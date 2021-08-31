const { dependencies } = require('../appDependencies');
const { MAP_TYPE, ENUM_TYPE, ENUM_OPTION_TYPE,
    ENUM_FIELD_TYPE, ONE_OF_TYPE, MESSAGE_TYPE, RESERVED_FIELD_TYPE, OPTION_FIELD_TYPE } = require('../helpers/parsingEntitiesTypes')

const NEW_DATABASE = 'New File'

const convertParsedFileDataToCollections = parsedData => {
    const _ = dependencies.lodash;
    const dbName = _.get(parsedData, 'packageName[0]', NEW_DATABASE);
    const enumDefinitions = _.get(parsedData, 'enums', []).map(parsedEnum => convertEnum(parsedEnum))
    const options = _.get(parsedData, 'options', [])
        .map(option => ({
            optionKey: option.name,
            optionValue: option.value
        }))
    const imports = _.get(parsedData, 'imports', []).map(importItem => ({packageName: importItem.value}));
    const messages = _.get(parsedData, 'messages', []).map(message => {
        return {
            objectNames: {
                collectionName: message.name,
            },
            doc: {
                modelDefinitions: { definitions: enumDefinitions },
                dbName,
                collectionName: message.name,
                bucketInfo: {
                    options,
                    package: dbName,
                    imports
                },
                entityLevel: {},
                views: [],
            },
            jsonSchema: getJsonSchema(message, enumDefinitions)
        }
    })

    return messages;
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
    return {
        collectionName: message.name,
        properties,
        type: 'object',
        options,
        definitions: internalDefinitions
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
        repetition: field.repeated ? 'repeated' : 'singular',
        fieldOptions: field.options,
        fieldNumber: field.fieldNumber
    }
}

const enumFieldConverter = ({ field }) => {
    const convertedEnum = convertEnum(field);
    const allow_alias = convertedEnum.fieldOptions.some(option => option.optionKey === 'allow_alias');
    return {
        name: field.name,
        type: 'enum',
        fieldOptions: convertedEnum.fieldOptions,
        listOfConstants: convertedEnum.listOfConstants,
        allow_alias
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
    const properties = message.body
        .filter(field => ![RESERVED_FIELD_TYPE, OPTION_FIELD_TYPE].includes(field.elementType))
        .reduce((fields, field) => ({ ...fields, [field.name]: getConverter(field.elementType)({ field, internalDefinitionsNames, modelDefinitionsNames }) }), {});
    const options = message.body
        .filter(field => field.elementType === OPTION_FIELD_TYPE)
        .map(option => ({
            optionKey: option.name,
            optionValue: option.value
        }))
    return {
        name: message.name,
        'childType': 'message',
        'type': 'document',
        properties,
        fieldOptions: options
    }
}

const mapFieldConverter = ({ field }) => ({
    type: 'map',
    key_type: getMapKeyType(field.keyType),
    value_type: field.type,
    fieldOptions: field.options
})


const getType = ({ type, internalDefinitionsNames = [], modelDefinitionsNames = [] }) => {
    let unwrappedType = type;
    if (internalDefinitionsNames.includes(type)) {
        return {
            $ref: `#/definitions/${type}`
        }
    }
    if (modelDefinitionsNames.includes(type)) {
        return {
            $ref: `#model/definitions/${type}`
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
            return ({ type: 'any', simpletextProp: type });
    }
}
const getMapKeyType = (type) => {
    let unwrappedType = type;
    if (type.startsWith('google.protobuf.')) {
        unwrappedType = type.replace('google.protobuf.', '').replace('Value', '').toLowerCase();
    }
    switch (unwrappedType) {
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
            return `map<string>`
    }
}

const convertEnum = parsedEnum => {
    const fieldOptions = parsedEnum.body.filter(element => element.elementType === ENUM_OPTION_TYPE)
        .map(option => ({
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
        listOfConstants,
        type: ENUM_TYPE,
        allow_alias
    }
};

module.exports = {
    convertParsedFileDataToCollections
}