const { dependencies } = require('../../reverse_engineering/appDependencies');

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

module.exports = {
    parseDefinitions,
    getDefinitionInfo,
    extractDefinitionsFromProperties
}