const { dependencies } = require('../appDependencies');
const { getRootMessageName } = require('../helpers/rootMessageFinder');
const { fixFileName, determineSchemaType } = require('../helpers/fileNameHelper')
const { MAP_TYPE, ENUM_TYPE, ENUM_OPTION_TYPE,
    ENUM_FIELD_TYPE, ONE_OF_TYPE, MESSAGE_TYPE, RESERVED_FIELD_TYPE, OPTION_FIELD_TYPE, FIELD_TYPE } = require('../helpers/parsingEntitiesTypes')

const NEW_DATABASE = 'New File'

const convertParsedFileDataToCollections = (parsedData, fileName) => {
    const _ = dependencies.lodash;
    const dbName = fixFileName(fileName);
    const schemaType = determineSchemaType(fileName);
    const rootMessageName = getRootMessageName(parsedData.messages);
    const packageName = _.get(parsedData, 'packageName[0]', NEW_DATABASE);
    const modelDefinitionsNames = [
        ..._.get(parsedData, 'enums', []).map(parsedEnum => parsedEnum.name),
        ..._.get(parsedData, 'messages', []).filter(parsedMessage => parsedMessage.name !== rootMessageName)
            .map(parsedMessage => parsedMessage.name)
    ]
    const enumDefinitions = _.get(parsedData, 'enums', []).map(parsedEnum => convertEnum(parsedEnum))
    const messagesDefinitions = _.get(parsedData, 'messages', [])
        .filter(message => message.name !== rootMessageName)
        .map(parsedMessage => messageFieldConverter({ field: parsedMessage, modelDefinitionsNames }))
    const options = _.get(parsedData, 'options', [])
        .map(option => ({
            optionKey: option.name,
            optionValue: option.value
        }))
    const imports = _.get(parsedData, 'imports', []).map(importItem => ({ packageName: importItem.value }));
    const modelDefinitions = [...enumDefinitions, ...messagesDefinitions];
    const formattedModelDefinitions = modelDefinitions
        .map(def => ({ ...def, isTopLevel: true }))
        .reduce((definitions, def) => (
            { ...definitions, [def.name]: _.omit(def, ['name']) }), {});
    const rootMessage = _.get(parsedData, 'messages', []).find(message => message.name === rootMessageName);

    if (!rootMessage) {
      return [
        {
          doc: {
            dbName,
            emptyBucket: true,
            bucketInfo: {
              options,
              package: packageName,
              imports,
              schemaType,
            },
            entityLevel: {},
            views: [],
          },
        },
        {
          doc: {
            modelDefinitions: JSON.stringify({ definitions: formattedModelDefinitions }),
            bucketInfo: {},
            entityLevel: {},
            views: [],
          },
        },
      ];
    }

    const hackoladeGeneratedDefsNames = getHackoladeGeneratedDefNames(rootMessage);
    const jsonSchema = getJsonSchema(rootMessage, modelDefinitionsNames, formattedModelDefinitions, hackoladeGeneratedDefsNames);

    const messages = [{
        objectNames: {
            collectionName: jsonSchema.collectionName,
        },
        doc: {
            modelDefinitions: JSON.stringify({ definitions: formattedModelDefinitions }),
            dbName,
            collectionName: jsonSchema.collectionName,
            bucketInfo: {
                options,
                package: packageName,
                imports,
                schemaType,
            },
            entityLevel: {},
            views: [],
        },
        jsonSchema: JSON.stringify(jsonSchema),
    }];

    return [
        ...messages,
        ...messagesDefinitions.map(message => ({
            objectNames: {
                collectionName: message.name,
            },
            doc: {
                dbName,
                collectionName: message.name,
                bucketInfo: {
                    options,
                    package: packageName,
                    imports,
                    schemaType,
                },
                entityLevel: {},
                views: [],
            },
            jsonSchema: JSON.stringify({
                type: "reference",
                $ref: `#model/definitions/${message.name}`,
            })
        }))
    ];
}

const getJsonSchema = (message, modelDefinitionsNames, modelDefinitions, hackoladeGeneratedDefsNames) => {
    const internalDefinitions = message.body
        .filter(field => field)
        .filter(field => [MESSAGE_TYPE, ENUM_TYPE].includes(field.elementType))
        .map(field => getConverter(field.elementType)({ field }));
    const internalDefinitionsNames = internalDefinitions.map(definition => definition.name);
    const properties = message.body
        .filter(field => field)
        .filter(field => ![RESERVED_FIELD_TYPE, OPTION_FIELD_TYPE, MESSAGE_TYPE, ENUM_TYPE].includes(field.elementType))
        .reduce((fields, field) => ({
            ...fields, [field.name]: getConverter(field.elementType)({
                field,
                internalDefinitionsNames,
                modelDefinitionsNames,
                modelDefinitions,
                internalDefinitions,
                hackoladeGeneratedDefsNames
            })
        }), {});
    const options = message.body
        .filter(field => field)
        .filter(field => field.elementType === OPTION_FIELD_TYPE)
        .map(option => ({
            optionKey: option.name,
            optionValue: option.value
        }))
    const { reservedFieldNumbers, reservedFieldNames } = message.body
        .filter(field => field)
        .filter(field => field.elementType === RESERVED_FIELD_TYPE)
        .reduce((reservedValues, reservedString) => {
            const formattedString = reservedString.values.join(', ');
            if (formattedString.match(/^\d+(?:(?:,\s*\d+)|(?:,\s+\d+\s+to\s+\d+)|(?:,\s+\d+\s+to\s+max))*$/gm)) {
                return { ...reservedValues, reservedFieldNumbers: [...reservedValues.reservedFieldNumbers, formattedString] }
            } else {
                return { ...reservedValues, reservedFieldNames: [...reservedValues.reservedFieldNames, reservedString.values.map(str => `'${str}'`).join(', ')] }
            }
        }, { reservedFieldNumbers: [], reservedFieldNames: [] });
    const filteredInternalDefinitions = internalDefinitions
        .filter(def => !hackoladeGeneratedDefsNames.includes(def.name))
        .reduce((definitions, def) => ({ ...definitions, [def.name]: def }), {});
    return {
        collectionName: message.name,
        properties,
        type: 'object',
        options,
        definitions: { ...filteredInternalDefinitions },
        reservedFieldNumbers: reservedFieldNumbers.join(', '),
        reservedFieldNames: reservedFieldNames.join(', '),
        description: message.description
    }
}

const getConverter = (elementType) => {
    switch (elementType) {
        case ENUM_TYPE:
            return enumFieldConverter;
        case ONE_OF_TYPE:
            return oneOfFieldConverter;
        case MESSAGE_TYPE:
            return messageFieldConverter;
        case MAP_TYPE:
            return mapFieldConverter;
        default:
            return generalFieldConverter;
    }
}
const generalFieldConverter = ({ field,
    internalDefinitionsNames = [],
    modelDefinitionsNames = [],
    internalDefinitions = [],
    hackoladeGeneratedDefsNames = [] }) => {
    const _ = dependencies.lodash;
    if (hackoladeGeneratedDefsNames.includes(field.type) && internalDefinitionsNames.includes(field.type)) {
        return internalDefinitions.find(def => def.name === field.type);
    }
    const options = _.get(field, 'options', []).map(option => ({ optionKey: option.name, optionValue: option.value }))
    return {
        ...getType({ type: field.type, internalDefinitionsNames, modelDefinitionsNames }),
        repetition: field.repetition,
        fieldOptions: options,
        fieldNumber: field.fieldNumber,
        description: field.description
    }
}

const enumFieldConverter = ({ field }) => {
    const convertedEnum = convertEnum(field);
    return {
        ...convertedEnum,
        type: 'enum'
    }
}

const oneOfFieldConverter = ({
    field,
    internalDefinitionsNames = [],
    modelDefinitionsNames = [],
    modelDefinitions = [],
    internalDefinitions = [],
    hackoladeGeneratedDefsNames = [] }) => {
    const properties = field.fields.map(choice => {
        return {
            'type': 'subschema',
            'subschema': true,
            properties: [{ ...generalFieldConverter({ field: choice, internalDefinitionsNames, modelDefinitionsNames, modelDefinitions, internalDefinitions, hackoladeGeneratedDefsNames }), name: choice.name }],
        }
    })
    return {
        'name': field.name,
        'type': 'choice',
        'choice': 'oneOf',
        description: field.description,
        properties
    }
}

const messageFieldConverter = ({
    field: message, internalDefinitionsNames = [],
    modelDefinitionsNames = [],
    modelDefinitions = [],
    internalDefinitions = [],
    hackoladeGeneratedDefsNames = [] }) => {
    const _ = dependencies.lodash;
    const entitiesDefinitionsTypes = message.body
        .filter(field => field)
        .filter(field => [MESSAGE_TYPE, ENUM_TYPE].includes(field.elementType));
    const formattedEntitiesDefinitionTypes = entitiesDefinitionsTypes.reduce((entitiesMap, entity) => ({ ...entitiesMap, [entity.name]: entity }), {})
    const properties = message.body
        .filter(field => field)
        .filter(field => ![RESERVED_FIELD_TYPE, OPTION_FIELD_TYPE, MESSAGE_TYPE, ENUM_TYPE].includes(field.elementType))
        .map(field => ({ ...field, ...(formattedEntitiesDefinitionTypes[field.type] || {}) }))
        .reduce((fields, field) => {
            const messageWithUpperLevelDefinitions = { ...field, body: [..._.get(field, 'body', []), ...entitiesDefinitionsTypes] }
            return {
                ...fields,
                [field.name]: getConverter(field.elementType)({
                    field: messageWithUpperLevelDefinitions,
                    internalDefinitionsNames,
                    modelDefinitionsNames,
                    modelDefinitions,
                    internalDefinitions,
                    hackoladeGeneratedDefsNames
                })
            }
        }, {});
    const parsedMessageOptions = message.body
        .filter(field => field)
        .filter(field => field.elementType === OPTION_FIELD_TYPE);
    const messageOptions = _.isEmpty(parsedMessageOptions) ? _.get(message, 'options', []) : parsedMessageOptions;
    const options = messageOptions
        .map(option => ({
            optionKey: option.name,
            optionValue: option.value
        }))
    return {
        name: message.name,
        'childType': 'message',
        'type': 'document',
        properties,
        repetition: message.repetition,
        fieldNumber: message.fieldNumber,
        fieldOptions: options,
        description: message.description
    }
}

const mapFieldConverter = ({ field }) => {
    const subtype = getMapKeyType(field.type);
    return {
        type: 'map',
        subtype,
        keyType: field.keyType,
        udt_value_type: subtype === 'map<udt>' ? field.type : '',
        fieldOptions: field.options
    }
}


const getType = ({ type, internalDefinitionsNames = [], modelDefinitionsNames = [] }) => {
    let unwrappedType = type;
    if (internalDefinitionsNames.includes(type)) {
        return {
            $ref: `#/definitions/${type}`,
            type: 'reference'
        };
    } else if (modelDefinitionsNames.includes(type)) {
        return {
            $ref: `#model/definitions/${type}`,
            type: 'reference'
        };
    }
    if (type.startsWith('google.protobuf.')) {
        unwrappedType = type.replace('google.protobuf.', '').replace('Value', '').toLowerCase();
    }
    switch (unwrappedType) {
        case 'string':
            return ({ type: 'string' });
        case 'bool':
            return ({ type: 'bool' });
        case 'bytes':
            return ({ type: 'bytes' });
        case 'double':
            return ({ type: 'double' });
        case 'fixed32':
        case 'fixed64':
        case 'sfixed32':
        case 'sfixed64':
            return ({ type: 'fixed', subtype: unwrappedType });
        case 'float':
            return ({ type: 'float' });
        case 'int32':
        case 'int64':
        case 'uint32':
        case 'uint64':
        case 'sint32':
        case 'sint64':
            return ({ type: 'int', subtype: unwrappedType });
        default:
            return ({ type: 'any', typeUrl: type });
    }
}

const getMapKeyType = (type) => {
    let unwrappedType = type;
    if (type.startsWith('google.protobuf.')) {
        unwrappedType = type.replace('google.protobuf.', '').replace('Value', '').toLowerCase();
    }
    switch (unwrappedType) {
        case 'string':
        case 'bool':
        case 'fixed32':
        case 'fixed64':
        case 'sfixed32':
        case 'sfixed64':
        case 'int32':
        case 'int64':
        case 'uint32':
        case 'uint64':
        case 'sint32':
        case 'sint64':
            return `map<${unwrappedType}>`;
        default:
            return `map<udt>`
    }
}

const convertEnum = parsedEnum => {
    const _ = dependencies.lodash;
    const parsedOptions = parsedEnum.body
        .filter(Boolean)
        .filter(element => element)
        .filter(element => element.elementType === ENUM_OPTION_TYPE);
    const enumOptions = _.isEmpty(parsedOptions) ? _.get(parsedEnum, 'options', []) : parsedOptions
    const fieldOptions = enumOptions.map(option => ({
        optionKey: option.name,
        optionValue: option.value
    }))
    const listOfConstants = parsedEnum.body
        .filter(Boolean)
        .filter(element => element.elementType === ENUM_FIELD_TYPE)
        .map(constant => ({
            constant: constant.name,
            value: constant.value
        }))
    const allow_alias = fieldOptions.some(option => option.optionKey === 'allow_alias');
    return {
        name: parsedEnum.name,
        fieldOptions,
        fieldNumber: parsedEnum.fieldNumber,
        listOfConstants,
        repetition: parsedEnum.repetition,
        type: ENUM_TYPE,
        allow_alias,
        description: parsedEnum.description
    }
};


const getHackoladeGeneratedDefNames = rootMessage => {
    const _ = dependencies.lodash;
    const usageFrequency = _.countBy(countDefinitionUsageFrequency(rootMessage), name => name)
    return Object.entries(usageFrequency)
        .filter(([name, frequency]) => frequency === 1)
        .map(([name, frequency]) => name);
}

const countDefinitionUsageFrequency = message => {
    const _ = dependencies.lodash;
    const defNamesInFields = message.body
        .filter(Boolean)
        .filter(element => element.elementType === FIELD_TYPE)
        .filter(element => _.lowerCase(element.type).split(' ').join('_') === element.name)
        .map(element => element.type);
    const defNamesInDefinitions = message.body
        .filter(Boolean)
        .filter(element => element.elementType === MESSAGE_TYPE)
        .reduce((definitions, def) => [...definitions, ...countDefinitionUsageFrequency(def)], [])
    return [...defNamesInFields, ...defNamesInDefinitions];
}

module.exports = {
    convertParsedFileDataToCollections
}