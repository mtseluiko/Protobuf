const { dependencies } = require('../../reverse_engineering/appDependencies');

const MODEL_DEFINITION_REF_REGEX = /#model\/definitions\/(.*)/;

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
        _.get(definition, 'definitionRefs', []).some(ref => _.last(ref) === referenceId))
}

const extractDefinitionsFromProperties = (properties = []) => {
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
                description: '',
                $ref: `#/definitions/${key}`,
                title: convertEntityTypeToValidName(key)
            }
            return {
                modifiedProperties: { ...modifiedProperties, [convertEntityTypeToValidName(key)]: property },
                extractedDefinitions: [...extractedDefinitions, definition]
            }

        }, { modifiedProperties: {}, extractedDefinitions: [] });
    return {
        extractedDefinitions,
        properties: modifiedProperties
    }
}

const convertEntityTypeToValidName = (type) => {
    const _ = dependencies.lodash;
    return _.lowerCase(type).split(' ').join('_');
}

/**
 * @param {{ schema?: object }}
 * @returns {boolean}
 */
const checkIsModelDefinitionReference = ({ schema }) => {
    return MODEL_DEFINITION_REF_REGEX.test(schema?.$ref);
};

/**
 * @param {{ schema?: object, modelDefinitions: object[] }}
 * @returns {object | undefined}
 */
const getModelDefinitionByReference = ({ schema, modelDefinitions }) => {
    const isModelDefinitionReference = checkIsModelDefinitionReference({ schema });

    if (!isModelDefinitionReference) {
        return schema;
    }

    const [__, definitionName] = MODEL_DEFINITION_REF_REGEX.exec(schema.$ref);

    return modelDefinitions.find((definition) => definition.title === definitionName);
};

/**
 * @param {{ schema?: object, modelDefinitions: object[] }}
 * @returns {string[]}
 */
const getUsedModelDefinitionNames = ({ schema, modelDefinitions }) => {
    const isModelDefinitionReference = checkIsModelDefinitionReference({ schema });

    if (isModelDefinitionReference) {
        const definition = getModelDefinitionByReference({ schema, modelDefinitions });
        const usedModelDefinitionNames = getUsedModelDefinitionNames({ schema: definition, modelDefinitions });

        return [definition?.title, ...usedModelDefinitionNames];
    }

    if (schema?.properties) {
        return Object.values(schema.properties).flatMap((propertySchema) => {
            return getUsedModelDefinitionNames({ schema: propertySchema, modelDefinitions });
        });
    }

    return [];
};

/**
 * @param {{ jsonSchema: object, modelDefinitions: object[], internalDefinitions: object[] }}
 * @returns {string[]}
 */
const getMessageUsedModelDefinitionNames = ({
    jsonSchema,
    modelDefinitions,
    internalDefinitions,
}) => {
    const schema = getModelDefinitionByReference({ schema: jsonSchema, modelDefinitions });
    const usedModelDefinitionNamesInFields = getUsedModelDefinitionNames({ schema, modelDefinitions });
    const usedModelDefinitionNamesInChoice = (jsonSchema?.oneOf || []).flatMap(propertySchema => {
        return getUsedModelDefinitionNames({ schema: propertySchema, modelDefinitions });
    });
    const usedModelDefinitionNamesInInternalDefinitions =
        internalDefinitions.flatMap((definition) => {
            return getUsedModelDefinitionNames({ schema: definition, modelDefinitions });
        });

    return [
        ...usedModelDefinitionNamesInFields,
        ...usedModelDefinitionNamesInChoice,
        ...usedModelDefinitionNamesInInternalDefinitions,
    ];
};

module.exports = {
    parseDefinitions,
    getDefinitionInfo,
    extractDefinitionsFromProperties,
    getMessageUsedModelDefinitionNames,
}