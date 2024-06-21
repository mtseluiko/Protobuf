const { dependencies } = require('../../reverse_engineering/appDependencies');
const {
  parseDefinitions,
  getDefinitionInfo,
  extractDefinitionsFromProperties,
  getMessageUsedModelDefinitionNames,
} = require('../helpers/DefinitionsHelper');
const { fixFieldNumbers } = require('../helpers/FieldNumberGenerationHelper');
const { formatComment, wrapInCommentBlock } = require('../helpers/utils');

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
    const containerData = data.containerData[0];
    const protoVersion = `proto${data.modelData[0].dbVersion}`
    const packageName = `package ${containerData.code || containerData.name};\n`

    const jsonSchema = JSON.parse(data.jsonSchema)
    const internalDefinitions = parseDefinitions(getInternalDefinitions(data.internalDefinitions, jsonSchema.GUID));
    const modelDefinitions = [...parseDefinitions(data.modelDefinitions), ...internalDefinitions.filter(def => def.isTopLevel)];
    const externalDefinitions = parseDefinitions(data.externalDefinitions);
    const usedModelDefinitionNames = data.includeAllModelDefinitionsStatements
            ? modelDefinitions.map(definition => definition.title)
            : getMessageUsedModelDefinitionNames({ jsonSchema, modelDefinitions, internalDefinitions });
    const modelDefinitionsStatements = modelDefinitions
        .filter((definition) => usedModelDefinitionNames.includes(definition.title))
        .map((definition) =>
            getDefinitionStatements({
                jsonSchema: definition,
                protoVersion,
                internalDefinitions: internalDefinitions.filter(
                    (def) => def.isTopLevel
                ),
                modelDefinitions,
                externalDefinitions,
            })
        );

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
    if (jsonSchema.$ref) {
        const definitionName = jsonSchema.$ref.slice('#model/definitions/'.length);
        jsonSchema = modelDefinitions.find(definition => definition.title === definitionName) || jsonSchema;
    }
    const { properties, extractedDefinitions } = extractDefinitionsFromProperties(jsonSchema.properties)
    const description = formatComment(jsonSchema.description);
    const oneOfIndex = _.get(jsonSchema, 'oneOf_meta.index', 0);
    const options = jsonSchema.options ? jsonSchema.options.map(option => getOptionStatement(option, spacePrefix + ROW_PREFIX)) : [];
    const { reservedFieldNumbers, reservedFieldNames } = getReservedStatements(jsonSchema, spacePrefix + ROW_PREFIX);
    const { messageFields, oneOfFields } = getFieldsStatement({
        jsonSchema: { ...jsonSchema, properties },
        protoVersion,
        internalDefinitions: [...internalDefinitions, ...extractedDefinitions],
        modelDefinitions,
        externalDefinitions,
        spacePrefix: spacePrefix + ROW_PREFIX,
        oneOfIndex
    });

    const oneOfStatement = getOneOfStatement(jsonSchema?.oneOf_meta, oneOfFields, spacePrefix + ROW_PREFIX);

    const innerDefinitions = internalDefinitions.filter(def => !def.isTopLevel);
    const messageDefinitions = [...innerDefinitions, ...extractedDefinitions].map(definition => getDefinitionStatements({
        jsonSchema: definition,
        spacePrefix: spacePrefix + ROW_PREFIX,
        protoVersion,
        internalDefinitions: internalDefinitions.filter(def => def.isTopLevel),
        modelDefinitions,
        externalDefinitions
    })).join('\n');
    const statement = [
        description,
        `${spacePrefix}message ${jsonSchema.title} {`,
        reservedFieldNumbers,
        reservedFieldNames,
        ...options,
        messageDefinitions,
        concutFieldsStatements(messageFields, oneOfStatement, oneOfIndex),
        `${spacePrefix}}`
    ]
        .filter(row => row !== '')
        .join('\n');

    return jsonSchema.isActivated ? statement : wrapInCommentBlock({ statement, spacePrefix });
}

const concutFieldsStatements = (fieldsStatements, oneOfStatement, oneOfIndex) => {
    if(oneOfStatement === ''){
        return fieldsStatements.join('\n');
    }
    const statements = [...fieldsStatements];
    statements.splice(oneOfIndex,0,oneOfStatement);
    return statements.join('\n');
}

const getOneOfStatement = (oneOfMeta, fields, spacePrefix = '') => {
    const oneOfName = oneOfMeta?.name || 'one_of';
    const _ = dependencies.lodash;
    if (_.isEmpty(fields)) {
        return '';
    }

    const statement = [`${spacePrefix}oneof ${oneOfName} {`,
    ...fields,
        '}'
    ].join(`\n${spacePrefix}`);

    return oneOfMeta?.isActivated ? statement : wrapInCommentBlock({ statement, spacePrefix });
}

const getEnumStatement = ({ jsonSchema, spacePrefix = '' }) => {
    const constants = jsonSchema.listOfConstants?.map(item => `${ROW_PREFIX}${item.constant} = ${item.value};`) || [];
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
    const optionKey = option.optionKey;
    if (!optionValue || !optionKey) {
        return '';
    }
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

const getFieldsStatement = ({ jsonSchema, spacePrefix, protoVersion, internalDefinitions, modelDefinitions, externalDefinitions, oneOfIndex }) => {
    const _ = dependencies.lodash;
    const oneOfFields = Object.entries((jsonSchema.oneOf || [])
        .reduce((properties, property) => ({ ...properties, ...property.properties }), {}))
        .reduce((oneOfProperties, [key, value]) => ({ ...oneOfProperties, [key]: { ...value, parent: 'oneOf' } }), {})
    const {collectionProperties, oneOfProperties} = fixFieldNumbers({fields:{...jsonSchema.properties}, oneOfFields, reservedNumbers:jsonSchema.reservedFieldNumbers, oneOfIndex});
    const messageFieldsStatements = convertFieldsToStatements(
        {
            fields: collectionProperties,
            spacePrefix,
            protoVersion,
            internalDefinitions,
            modelDefinitions,
            externalDefinitions
        })

    const oneOfFieldsStatements = convertFieldsToStatements({
        fields: oneOfProperties,
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
        const fieldStatement = getFieldStatement({ field, fieldType, fieldName, fieldOptions, protoVersion });

        if (hasFieldNumberError) {
            return `${spacePrefix}/*${fieldStatement}\tERROR: you must specify a field number to include this field in the script*/`;
        }
        if (hasReferenceError) {
            return `${spacePrefix}/*${fieldStatement}\tERROR: the field contains an incorrect reference to not existed definition*/`;
        }
        if (!field.isActivated) {
            return `${spacePrefix}// ${fieldStatement} ${field.description || ''}`;
        }

        return `${spacePrefix}${fieldStatement} ${field.description ? ` //${field.description}` : ''}`;
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
        let fieldType = field.subtype || field.type || field.typeUrl;
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
    if ((!fieldRule || fieldRule === '') && protoVersion === 'proto2') {
        return 'optional ';
    }
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

    const stringifiedOptions = (options || [])
        .filter(option => option?.optionKey && option?.optionValue)
        .filter(option => option.optionKey !== 'allow_alias')
        .map(option => `${option.optionKey} = ${option.optionValue}`)

    if (!stringifiedOptions.length) {
        return '';
    }
    return ` [${stringifiedOptions.join(', ')}]`;
}

const getFieldStatement = ({ field, fieldType, fieldName, fieldOptions, protoVersion }) => {
    const fieldRuleStatement = getValidatedFieldRule({ fieldRule: field.repetition, protoVersion })
    const fieldOptionsStatement = getFieldOptionsStatement(fieldOptions);

    return `${fieldRuleStatement}${fieldType} ${fieldName} = ${field.fieldNumber}${fieldOptionsStatement};`;
};

module.exports = {
    generateCollectionScript
}
