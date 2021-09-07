const { dependencies } = require('../../reverse_engineering/appDependencies');


const MAX_CHAR_LENGTH = 10;
const PROTO_2_FIELD_RULES = ['required', 'optional', 'repeated'];
const PROTO_3_FIELD_RULES = ['singular', 'repeated'];
const ROW_PREFIX = '  '

const getInternalDefinitions = (definitions, messageId) => {
    if(typeof definitions === 'string'){
        return definitions;
    }

    return definitions[messageId];
}

const generateCollectionScript = data => {
    const _ = dependencies.lodash;
    const containerData = data.containerData[0];
    const protoVersion = `proto${data.modelData[0].dbVersion}`
    const packageName = `package ${containerData.code || containerData.name};\n`

    const jsonSchema = JSON.parse(data.jsonSchema)

    const internalDefinitions = parseDefinitions(getInternalDefinitions(data.internalDefinitions, jsonSchema.GUID));
    const modelDefinitions = getRequiredModelDefinitions(data.modelDefinitions, jsonSchema.properties);
    const externalDefinitions = parseDefinitions(data.externalDefinitions);
    const modelDefinitionsStatements = modelDefinitions.map(definition => getDefinitionStatements({
        jsonSchema: definition,
        spacePrefix: '',
        protoVersion,
        internalDefinitions: [],
        modelDefinitions,
        externalDefinitions
    }))

    const imports = getImports(externalDefinitions);

    const message = getMessageStatement({
        jsonSchema,
        internalDefinitions,
        protoVersion,
        modelDefinitions,
        externalDefinitions
    })

    const options = containerData.options ? containerData.options.map(option => getOptionStatement(option, '')) : '';

    return {
        syntax: `syntax = "${protoVersion}";\n`,
        packageName,
        imports,
        modelDefinitionsStatements,
        options,
        message
    }
}

const getDefinitionStatements = ({ jsonSchema, spacePrefix = '', protoVersion, internalDefinitions, modelDefinitions }) => {
    if (jsonSchema.type === 'message') {
        return getMessageStatement({ jsonSchema: { ...jsonSchema, options: jsonSchema.fieldOptions }, spacePrefix, protoVersion, internalDefinitions, modelDefinitions })
    }
    if (jsonSchema.type === 'enum') {
        return getEnumStatement({ jsonSchema: { ...jsonSchema, options: jsonSchema.fieldOptions }, spacePrefix })
    }
}

const getMessageStatement = ({ jsonSchema, spacePrefix = '', protoVersion, internalDefinitions, modelDefinitions, externalDefinitions }) => {
    const _ = dependencies.lodash;
    const { properties, extractedDefinitions } = extractDefinitionsFromProperties(jsonSchema.properties)
    const description = !jsonSchema.description ? '' :
        jsonSchema.description.replaceAll('\n', '').split(' ')
            .reduce((descriptionComment, word, i) => { return descriptionComment + ' ' + word + (i % MAX_CHAR_LENGTH === MAX_CHAR_LENGTH - 1 ? '\n*' : '') }, '/*') + '*/\n';
    const comment = !jsonSchema.comments ? '' : `//${jsonSchema.comments}`;
    const options = jsonSchema.options ? jsonSchema.options.map(option => getOptionStatement(option, spacePrefix + ROW_PREFIX)) : [];
    const { reservedFieldNumbers, reservedFieldNames } = getReservedStatements(jsonSchema, spacePrefix + ROW_PREFIX);
    const fields = getFieldsStatement({
        jsonSchema: { ...jsonSchema, properties },
        protoVersion,
        internalDefinitions: [...internalDefinitions, ...extractedDefinitions],
        modelDefinitions,
        externalDefinitions,
        spacePrefix: spacePrefix + ROW_PREFIX
    });
    const messageDefinitions = [...internalDefinitions, ...extractedDefinitions].map(definition => getDefinitionStatements({
        jsonSchema: definition,
        spacePrefix: spacePrefix + ROW_PREFIX,
        protoVersion,
        internalDefinitions: [],
        modelDefinitions,
        externalDefinitions
    })).join('\n');
    return [description,
        `${spacePrefix}message ${jsonSchema.title} { ${comment}`,
        reservedFieldNumbers,
        reservedFieldNames,
        options,
        messageDefinitions,
        fields,
        `${spacePrefix}}`
    ]
        .filter(row => row !== '')
        .join('\n');
}


const getEnumStatement = ({ jsonSchema, spacePrefix = '' }) => {
    const constants = jsonSchema.listOfConstants.map(item => `${ROW_PREFIX}${item.constant} = ${item.value};`)
    const options = jsonSchema.options ? jsonSchema.options.map(option => getOptionStatement(option, ROW_PREFIX)) : [];
    return [
        `${spacePrefix}enum ${jsonSchema.title} {`,
        ...options,
        ...constants,
        `}`,
    ].join(`\n${spacePrefix}`)
}

const extractDefinitionsFromProperties = properties => {
    const { extractedDefinitions, modifiedProperties } = Object.entries(properties)
        .reduce(({ extractedDefinitions, modifiedProperties }, [key, value]) => {
            if (value.type !== 'message' && value.type !== 'enum') {
                return {
                    modifiedProperties: { ...modifiedProperties, [key]: value },
                    extractedDefinitions
                }
            }
            const definition = {
                ...value,
                title: key,
                definitionRefs: [[value.GUID]],
                options: value.fieldOptions
            }
            const property = {
                ...value,
                $ref: `#/definitions/${key}`,
                title: key.toLowerCase()
            }
            return {
                modifiedProperties: { ...modifiedProperties, [key]: property },
                extractedDefinitions: [...extractedDefinitions, definition]
            }

        }, { modifiedProperties: {}, extractedDefinitions: [] });
    return {
        extractedDefinitions,
        properties: modifiedProperties
    }
}

const getImports = externalDefinitions => {
    const importsFromDefinitions = externalDefinitions.map(definition => `import '${definition.link}';`)
    return [...importsFromDefinitions, `import 'google/protobuf/any.proto';`]
}

const getOptionStatement = (option, spacePrefix) => `${spacePrefix}option ${option.optionKey} = ${option.optionValue};`

const getReservedStatements = (data, spacePrefix) => {
    const _ = dependencies.lodash;
    const reservedFieldNames = !_.isEmpty(data.reservedFieldNames) ? `${spacePrefix}reserved ${data.reservedFieldNames};` : ``
    const reservedFieldNumbers = !_.isEmpty(data.reservedFieldNumbers) ? `${spacePrefix}reserved ${data.reservedFieldNumbers};` : ``
    return {
        reservedFieldNames,
        reservedFieldNumbers
    };
}

const getFieldsStatement = ({ jsonSchema, spacePrefix, protoVersion, internalDefinitions, modelDefinitions, externalDefinitions }) => {
    const _ = dependencies.lodash;

    const messageFields = jsonSchema.properties;
    const fields = Object.keys(messageFields).map(fieldName => {
        const field = messageFields[fieldName];
        const hasFieldNumberError = !(field.fieldNumber && field.fieldNumber !== '' && !isNaN(field.fieldNumber));
        const isReference = !!field.$ref;
        const isExternalRef = isReference ? field.$ref.startsWith('file://') : false;
        const { fieldType, fieldOptions, hasReferenceError } = getFieldInfo({ field, isReference, isExternalRef, internalDefinitions, modelDefinitions, externalDefinitions });
        if (hasFieldNumberError) {
            return `${spacePrefix}/*${getValidatedFieldRule({ fieldRule: field.repetition, protoVersion })}${fieldType} ${fieldName} = ${field.fieldNumber};\tERROR: you must specify a field number to include this field in the script*/`
        }
        if (hasReferenceError) {
            return `${spacePrefix}/*${getValidatedFieldRule({ fieldRule: field.repetition, protoVersion })}${fieldType} ${fieldName} = ${field.fieldNumber};\tERROR: the field contains an incorrect reference to not existed definition*/`
        }


        return `${spacePrefix}${getValidatedFieldRule({ fieldRule: field.repetition, protoVersion })}${fieldType} ${fieldName} = ${field.fieldNumber}${getFieldOptionsStatement(fieldOptions)}; ${field.comments && field.comments !== '' ? ` //${field.comments}` : ''}`
    }).join('\n');
    return fields;
}

const getFieldInfo = ({ field, isReference, isExternalRef, internalDefinitions, modelDefinitions, externalDefinitions }) => {
    if (isExternalRef) {
        return getDefinitionInfo(externalDefinitions, field.fieldOptions, field.GUID)
    }
    if (!isReference) {
        let fieldType = field.subtype || field.type;
        if (fieldType === 'map') {
            fieldType = `${field.key_type.slice(0, -1)},${field.value_type}>`
        }
        if (fieldType === 'any') {
            fieldType = 'google.protobuf.Any'
        }
        return {
            fieldType,
            fieldOptions: field.fieldOptions
        };
    }
    const modelDefinition = field.$ref.startsWith('#model')

    if (modelDefinition) {
        return getDefinitionInfo(modelDefinitions, field.fieldOptions, field.GUID)
    }

    return getDefinitionInfo(internalDefinitions, field.fieldOptions, field.GUID)
}


const getDefinitionInfo = (definitions, fieldOptions, referenceId) => {
    const _ = dependencies.lodash;
    const requiredDefinition = getReferencedDefinition(definitions, referenceId);

    if (requiredDefinition) {
        return {
            fieldType: requiredDefinition.title,
            fieldOptions
        }
    }
    return {
        hasReferenceError: true,
        fieldOptions: ''
    }
}

const getReferencedDefinition = (definitions, referenceId) => {
    const _ = dependencies.lodash;

    return definitions.find(definition =>
        definition.definitionRefs.some(ref => _.last(ref) === referenceId))
}

const getValidatedFieldRule = ({ fieldRule, protoVersion }) => {
    const fieldRules = protoVersion === 'proto2' ? PROTO_2_FIELD_RULES : PROTO_3_FIELD_RULES;
    if(fieldRule === 'singular'){
        return '';
    }
    if (fieldRules.includes(fieldRule)) {
        return `${fieldRule} `
    }

    return '';

}

const getFieldOptionsStatement = (options) => {
    const _ = dependencies.lodash;

    if (_.isEmpty(options)) {
        return '';
    }

    return ` [${options.map(option => `${option.optionKey} = ${option.optionValue}`).join(', ')}]`;
}

const getRequiredModelDefinitions = (modelDefinitions, messageProperties) => {
    const definitions = parseDefinitions(modelDefinitions)
    const modelDefinitionsReferences = Object.values(messageProperties)
        .filter(property => !!property.$ref)
        .filter(property => property.$ref.startsWith('#model'))
    return modelDefinitionsReferences.reduce((requiredDefinitions, { GUID }) => {
        const requiredDefinition = getReferencedDefinition(definitions, GUID);
        if (requiredDefinition) {
            return [...requiredDefinitions, requiredDefinition];
        }
        return requiredDefinitions
    }, [])
}

const parseDefinitions = definitions => {
    const _ = dependencies.lodash;
    return Object.entries(
        _.get(JSON.parse(definitions), 'properties', {})
    ).map(([key, value]) => ({ title: key, ...value }))
        .filter(definition => {
            const isMessage = definition.type === 'message';
            const isEnum = definition.type === 'enum';
            return isMessage || isEnum;
        });
}



module.exports = {
    generateCollectionScript
}
