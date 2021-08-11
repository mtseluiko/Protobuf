const { dependencies } = require('../appDependencies');
const { MAP_TYPE, ENUM_TYPE, ENUM_OPTION_TYPE,
    ENUM_FIELD_TYPE, ONE_OF_TYPE, MESSAGE_TYPE, RESERVED_FIELD_TYPE } = require('../helpers/parsingEntitiesTypes')

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
    const messages = _.get(parsedData, 'messages', []).map(message => {
        return {
            objectNames: {
                collectionName: message.name,
            },
            doc: {
                dbName,
                collectionName: message.name,
                bucketInfo: {
                    options,
                    package: dbName
                },
                entityLevel: {},
                views: [],
            },
            jsonSchema: getJsonSchema(message)
        }
    })

    return messages;
}

const getJsonSchema = message => {
    const properties = message.body
        .filter(field => field.elementType !== RESERVED_FIELD_TYPE)
        .reduce((fields, field) => ({ ...fields, [field.name]: getConverter(field.elementType)(field) }), {});
    return {
        collectionName: message.name,
        properties,
        type: 'object'
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
const generalFieldConverter = field => {
    return {
        ...getType(field.type),
        repetition: field.repeated ? 'repeated' : 'singular',
        fieldOptions: field.options,
    }
}

const enumFieldConverter = field => {
    const convertedEnum = convertEnum(field);
    const allow_alias = convertedEnum.fieldOptions.some(option => option.optionKey === 'allow_alias');
    return {
        type: 'enum',
        fieldOptions: convertedEnum.fieldOptions,
        listOfConstants: convertedEnum.listOfConstants,
        allow_alias
    }
}

const oneOfFieldConverter = field => {
    const properties = field.fields.map(choice => {
        return {
            'type': 'subschema',
            properties: [{ ...generalFieldConverter(choice), name: choice.name }],
        }
    })
    return {
        'type': 'choice',
        'choice': 'oneOf',
        properties
    }
}

const messageFieldConverter = message => {
    const properties = message.body
        .filter(field => field.elementType !== RESERVED_FIELD_TYPE)
        .reduce((fields, field) => ({ ...fields, [field.name]: getConverter(field.elementType)(field) }), {});
    return {
        'childType': 'message',
        'type': 'document',
        properties
    }
}

const mapFieldConverter = field => ({
    type: 'map',
    key_type: getMapKeyType(field.type),
    fieldOptions: field.options
})


const getType = (type) => {
    let unwrappedType = type;
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
    return {
        name: parsedEnum.name,
        fieldOptions,
        listOfConstants
    }
};

module.exports = {
    convertParsedFileDataToCollections
}