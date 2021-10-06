const { dependencies } = require('../../reverse_engineering/appDependencies');
const { parseDefinitions, getDefinitionInfo, extractDefinitionsFromProperties } = require('../helpers/DefinitionsHelper');
const { fixFieldNumbers } = require('../helpers/FieldNumberGenerationHelper');
const { formatComment } = require('../helpers/utils');

const PROTO_2_FIELD_RULES = ['required', 'optional', 'repeated'];
const PROTO_3_FIELD_RULES = ['singular', 'repeated'];
const ROW_PREFIX = '  '

const getInternalDefinitions = (definitions, messageId) => {
    if (typeof definitions === 'string') {
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
    const modelDefinitions = parseDefinitions(data.modelDefinitions);
    const externalDefinitions = parseDefinitions(data.externalDefinitions);
    const modelDefinitionsStatements = modelDefinitions.map(definition => getDefinitionStatements({
        jsonSchema: definition,
        spacePrefix: '',
        protoVersion,
        internalDefinitions: [],
        modelDefinitions,
        externalDefinitions
    }))

    const imports = getImports(externalDefinitions, containerData.imports);

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
        options,
        modelDefinitionsStatements,
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
    const description = formatComment(jsonSchema.description);
    const options = jsonSchema.options ? jsonSchema.options.map(option => getOptionStatement(option, spacePrefix + ROW_PREFIX)) : [];
    const { reservedFieldNumbers, reservedFieldNames } = getReservedStatements(jsonSchema, spacePrefix + ROW_PREFIX);
    const { messageFields, oneOfFields } = getFieldsStatement({
        jsonSchema: { ...jsonSchema, properties },
        protoVersion,
        internalDefinitions: [...internalDefinitions, ...extractedDefinitions],
        modelDefinitions,
        externalDefinitions,
        spacePrefix: spacePrefix + ROW_PREFIX
    });

    const oneOfStatement = getOneOfStatement(jsonSchema?.oneOf_meta?.name, oneOfFields, spacePrefix + ROW_PREFIX);


    const messageDefinitions = [...internalDefinitions, ...extractedDefinitions].map(definition => getDefinitionStatements({
        jsonSchema: definition,
        spacePrefix: spacePrefix + ROW_PREFIX,
        protoVersion,
        internalDefinitions: [],
        modelDefinitions,
        externalDefinitions
    })).join('\n');
    return [description,
        `${spacePrefix}message ${jsonSchema.title} {`,
        reservedFieldNumbers,
        reservedFieldNames,
        ...options,
        messageDefinitions,
        messageFields,
        oneOfStatement,
        `${spacePrefix}}`
    ]
        .filter(row => row !== '')
        .join('\n');
}

const getOneOfStatement = (oneOfName, fields, spacePrefix = '') => {
    const _ = dependencies.lodash;
    if (_.isEmpty(fields)) {
        return '';
    }
    return [`${spacePrefix}oneof ${oneOfName} {`,
        ...fields,
        '}'
    ].join(`\n${spacePrefix}`);
}

const getEnumStatement = ({ jsonSchema, spacePrefix = '' }) => {
    const constants = jsonSchema.listOfConstants.map(item => `${ROW_PREFIX}${item.constant} = ${item.value};`)
    const options = getEnumOptions(jsonSchema.options);
    return [
        `${spacePrefix}enum ${jsonSchema.title} {`,
        ...options,
        ...constants,
        `}`,
    ].join(`\n${spacePrefix}`)
}

const getEnumOptions = options => {
    if (!options) {
        return [];
    }
    return options.filter(option => option.optionKey === 'allow_alias').map(option => getOptionStatement(option, ROW_PREFIX))

}

const getImports = (externalDefinitions, imports = []) => {
    const formattedImports = imports.map(({ packageName }) => `import "${packageName}";`)
    const importsFromDefinitions = externalDefinitions.map(definition => `import '${definition.link}';`)
    return [...importsFromDefinitions, ...formattedImports, `import "google/protobuf/any.proto";`]
}

const getOptionStatement = (option, spacePrefix) => {
    const optionValue = option.optionValue;
    if (optionValue === 'true' || optionValue === 'false') {
        return `${spacePrefix}option ${option.optionKey} = ${optionValue};`
    }
    return `${spacePrefix}option ${option.optionKey} = "${optionValue}";`
}

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
    const oneOfFields = Object.entries((jsonSchema?.oneOf_meta?.isActivated ? jsonSchema.oneOf : [])
        .filter(property => property.isActivated)
        .reduce((properties, property) => ({ ...properties, ...property.properties }), {}))
        .filter(([key, value]) => value.isActivated)
        .reduce((oneOfProperties, [key, value]) => ({ ...oneOfProperties, [key]: { ...value, parent: 'oneOf' } }), {})
    const fixedFields = fixFieldNumbers({ ...jsonSchema.properties, ...oneOfFields }, jsonSchema.reservedFieldNumbers);
    const messageFieldsStatements = convertFieldsToStatements(
        {
            fields: Object.entries(fixedFields)
                .filter(([key, field]) => !field.parent)
                .reduce((fields, [key, field]) => ({ ...fields, [key]: field }), {}),
            spacePrefix,
            protoVersion,
            internalDefinitions,
            modelDefinitions,
            externalDefinitions
        }).join('\n');

    const oneOfFieldsStatements = convertFieldsToStatements({
        fields: Object.entries(fixedFields)
            .filter(([key, field]) => field.parent === 'oneOf')
            .reduce((fields, [key, field]) => ({ ...fields, [key]: field }), {}),
            spacePrefix,
            protoVersion,
            internalDefinitions,
            modelDefinitions,
            externalDefinitions
    });
    return { messageFields: messageFieldsStatements, oneOfFields: oneOfFieldsStatements };
}
const convertFieldsToStatements = ({ fields, spacePrefix, protoVersion, internalDefinitions, modelDefinitions, externalDefinitions }) => {
    return Object.keys(fields).map(fieldName => {
        const field = fields[fieldName];
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

        return `${spacePrefix}${getValidatedFieldRule({ fieldRule: field.repetition, protoVersion })}${fieldType} ${fieldName} = ${field.fieldNumber}${getFieldOptionsStatement(fieldOptions)}; ${field.description && field.description !== '' ? ` //${field.description}` : ''}`
    });
}

const getFieldInfo = ({ field, isReference, isExternalRef, internalDefinitions, modelDefinitions, externalDefinitions }) => {

    const getUDT = (udt) => {
        const _ = dependencies.lodash;
        return !_.isEmpty(udt) ? udt : 'string'
    }
    if (isExternalRef) {
        return getDefinitionInfo(externalDefinitions, field.fieldOptions, field.GUID)
    }
    if (!isReference) {
        let fieldType = field.subtype || field.type;
        if (field.type === 'map') {
            const value = field.subtype !== `map<udt>` ? field.subtype.slice(4, -1) : getUDT(field.udt_value_type)
            fieldType = `map<${field.keyType},${value}>`
        }
        if (fieldType === 'any') {
            if (field.typeUrl) {
                fieldType = field.typeUrl
            } else {
                fieldType = 'google.protobuf.Any'
            }

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

const getValidatedFieldRule = ({ fieldRule, protoVersion }) => {
    const fieldRules = protoVersion === 'proto2' ? PROTO_2_FIELD_RULES : PROTO_3_FIELD_RULES;
    if (fieldRule === 'singular') {
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

    const stringifiedOptions = options.filter(option => option.optionKey !== 'allow_alias')
        .map(option => `${option.optionKey} = ${option.optionValue}`)

    return ` [${stringifiedOptions.join(', ')}]`;
}

module.exports = {
    generateCollectionScript
}
