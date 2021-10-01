const { dependencies } = require('../appDependencies');
const { getRootMessageName } = require('../helpers/rootMessageFinder');
const { MAP_TYPE, ENUM_TYPE, ENUM_OPTION_TYPE,
    ENUM_FIELD_TYPE, ONE_OF_TYPE, MESSAGE_TYPE, RESERVED_FIELD_TYPE, OPTION_FIELD_TYPE } = require('../helpers/parsingEntitiesTypes')

const NEW_DATABASE = 'New File'

const convertParsedFileDataToCollections = (parsedData, dbName) => {
    const _ = dependencies.lodash;
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
    const formattedModelDefinitions = modelDefinitions.reduce((definitions, def) => (
        { ...definitions, [def.name]: _.omit(def, ['name']) }), {});
    const rootMessage = _.get(parsedData, 'messages', []).find(message => message.name === rootMessageName);
    return [{
        objectNames: {
            collectionName: rootMessage.name,
        },
        doc: {
            modelDefinitions: { definitions: formattedModelDefinitions },
            dbName,
            collectionName: rootMessage.name,
            bucketInfo: {
                code: dbName,
                options,
                package: packageName,
                imports
            },
            entityLevel: {},
            views: [],
        },
        jsonSchema: getJsonSchema(rootMessage, modelDefinitions)
    }]
}

const getJsonSchema = (message, modelDefinitions) => {

    const internalDefinitions = message.body
        .filter(field => [MESSAGE_TYPE, ENUM_TYPE].includes(field.elementType))
        .map(field => getConverter(field.elementType)({ field }));
    const internalDefinitionsNames = internalDefinitions.map(definition => definition.name);
    const modelDefinitionsNames = modelDefinitions.map(definition => definition.name);
    const properties = message.body
        .filter(field => ![RESERVED_FIELD_TYPE, OPTION_FIELD_TYPE, MESSAGE_TYPE, ENUM_TYPE].includes(field.elementType))
        .reduce((fields, field) => ({ ...fields, [field.name]: getConverter(field.elementType)({ field, internalDefinitionsNames, modelDefinitionsNames }) }), {});
    const options = message.body
        .filter(field => field.elementType === OPTION_FIELD_TYPE)
        .map(option => ({
            optionKey: option.name,
            optionValue: option.value
        }))
    const { reservedFieldNumbers, reservedFieldNames } = message.body
        .filter(field => field.elementType === RESERVED_FIELD_TYPE)
        .reduce((reservedValues, reservedString) => {
            const formattedString = reservedString.values.join(', ');
            if (formattedString.match(/[\d+, (?:to)(?:max)]+/gm)) {
                return { ...reservedValues, reservedFieldNumbers: [...reservedValues.reservedFieldNumbers, formattedString] }
            } else {
                return { ...reservedValues, reservedFieldNames: [...reservedValues.reservedFieldNames, reservedString.values.map(str => `'${str}'`).join(', ')] }
            }
        }, { reservedFieldNumbers: [], reservedFieldNames: [] });
    return {
        collectionName: message.name,
        properties,
        type: 'object',
        options,
        definitions: internalDefinitions,
        reservedFieldNumbers: reservedFieldNumbers.join(', '),
        reservedFieldNames: reservedFieldNames.join(', '),
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
const generalFieldConverter = ({ field, internalDefinitionsNames = [], modelDefinitionsNames = [] }) => {
    return {
        ...getType({ type: field.type, internalDefinitionsNames, modelDefinitionsNames }),
        repetition: field.repetition,
        fieldOptions: field.options,
        fieldNumber: field.fieldNumber
    }
}

const enumFieldConverter = ({ field }) => {
    const convertedEnum = convertEnum(field);
    return {
        ...convertedEnum,
        type: 'enum'
    }
}

const oneOfFieldConverter = ({ field, internalDefinitionsNames = [], modelDefinitionsNames = [] }) => {
    const properties = field.fields.map(choice => {
        return {
            'type': 'subschema',
            properties: [{ ...generalFieldConverter({ field: choice, internalDefinitionsNames, modelDefinitionsNames }), name: choice.name }],
        }
    })
    return {
        'type': 'choice',
        'choice': 'oneOf',
        properties
    }
}

const messageFieldConverter = ({ field: message, internalDefinitionsNames = [], modelDefinitionsNames = [] }) => {
    const _ = dependencies.lodash;
    const entitiesDefinitionsTypes = message.body
        .filter(field => [MESSAGE_TYPE, ENUM_TYPE].includes(field.elementType));
    const formattedEntitiesDefinitionTypes = entitiesDefinitionsTypes.reduce((entitiesMap, entity) => ({ ...entitiesMap, [entity.name]: entity }), {})
    const properties = message.body
        .filter(field => ![RESERVED_FIELD_TYPE, OPTION_FIELD_TYPE, MESSAGE_TYPE, ENUM_TYPE].includes(field.elementType))
        .map(field => ({ ...field, ...(formattedEntitiesDefinitionTypes[field.type] || {}) }))
        .reduce((fields, field) => {
            const messageWithUpperLevelDefinitions = { ...field, body: [..._.get(field, 'body', []), ...entitiesDefinitionsTypes] }
            return {
                ...fields,
                [field.name]: getConverter(field.elementType)({
                    field: messageWithUpperLevelDefinitions,
                    internalDefinitionsNames,
                    modelDefinitionsNames
                })
            }
        }, {});
    const parsedMessageOptions = message.body
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
        fieldOptions: options
    }
}

const mapFieldConverter = ({ field }) => {
    const subtype = getMapKeyType(field.type);
    return {
        type: 'map',
        subtype,
        udt_value_type: subtype === 'map<udt>' ? field.type : '',
        fieldOptions: field.options
    }
}


const getType = ({ type, internalDefinitionsNames = [], modelDefinitionsNames = [] }) => {
    let unwrappedType = type;
    if (internalDefinitionsNames.includes(type) || modelDefinitionsNames.includes(type)) {
        return {
            $ref: `#/definitions/${type}`,
            type: 'reference'
        }
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
    const parsedOptions = parsedEnum.body.filter(element => element.elementType === ENUM_OPTION_TYPE);
    const enumOptions = _.isEmpty(parsedOptions) ? _.get(parsedEnum, 'options', []) : parsedOptions
    const fieldOptions = enumOptions.map(option => ({
        optionKey: option.name,
        optionValue: option.value
    }))
    const listOfConstants = parsedEnum.body.filter(element => element.elementType === ENUM_FIELD_TYPE)
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
        allow_alias
    }
};

module.exports = {
    convertParsedFileDataToCollections
}