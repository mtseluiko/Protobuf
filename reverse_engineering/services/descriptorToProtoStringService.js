
const protobufjs = require("protobufjs");
const { dependencies } = require('../appDependencies');
const descriptor = require("protobufjs/ext/descriptor");

let syntax = 'proto3'

const parseDescriptor = (descriptorString) => {
    const _ = dependencies.lodash;
    const buffer = Buffer.from(descriptorString, 'base64');
    const decodedDescriptor = descriptor.FileDescriptorSet.decode(buffer);
    const root = protobufjs.Root.fromDescriptor(decodedDescriptor);
    const jsonDescriptor = root.toJSON();

    const { packageName, fileDefinitions } = constructPackageName(jsonDescriptor);
    determineSyntax(fileDefinitions);
    const definitions = _.keys(fileDefinitions).reduce((definitions, defName) =>
    ([...definitions,
    {
        name: defName, body: fileDefinitions[defName]
    }]), []).map(definition => parseDefinition(definition)).join('\n');
    return `syntax = "${syntax}";\n\npackage ${packageName};\n\n${definitions}`;
}

const determineSyntax = definitions => {
    if (JSON.stringify(definitions).includes(`"rule":"required"`)) {
        syntax = `proto2`
    }
}

const parseDefinition = (definition) => {
    const _ = dependencies.lodash;
    if (_.has(definition, 'body.fields')) {
        return getMessageStatement(definition)
    }
    if (_.has(definition, 'body.values')) {
        return getEnumStatement(definition)
    }
    return '';
}

const getEnumStatement = (definition) => {
    const values = definition.body.values;
    const valuesStatements = Object.entries(values).map(([key, value]) => `\t${key} = ${value};`, []).join('\n');
    return `enum ${definition.name}{\n${valuesStatements}\n};\n`
}

const getMessageStatement = (definition) => {
    const _ = dependencies.lodash;
    const fields = definition.body.fields;
    const reservedValuesStatement = getReservedStatement(definition.body.reserved)
    const getDefaultRule = () => {
        if (syntax === 'proto2') {
            return `optional `
        }
        return '';
    }
    const fieldsDefinitionsStatement = Object.entries(fields).map(([key, value]) => {
        const rule = _.isEmpty(value.rule) ? getDefaultRule() : `${value.rule} `
        return `\t${rule}${value.type} ${key} = ${value.id};`
    }).join('\n');
    const nestedDefinitions = _.get(definition, 'body.nested', {});
    const nestedDefinitionsStatement = _.keys(nestedDefinitions).reduce((definitions, defName) =>
    ([...definitions,
    {
        name: defName, body: nestedDefinitions[defName]
    }]), []).map(definition => parseDefinition(definition)).join('\n')
    return `message ${definition.name}{\n${[fieldsDefinitionsStatement, nestedDefinitionsStatement, reservedValuesStatement].join('\n')}};\n`
}

const getReservedStatement = (reservedStatements) => {
    const _ = dependencies.lodash;
    if (!reservedStatements) {
        return '';
    }

    const splitColumnNamesAndFieldNumbers = statements => {
        return statements.reduce(({ columnNames, filedNumbers }, statement) => {
            if (_.isNumber(statement[0])) {
                return {
                    columnNames,
                    filedNumbers: [...filedNumbers, statement]
                }
            }
            return {
                filedNumbers,
                columnNames: [...columnNames, statement]
            }
        }, {
            columnNames: [],
            filedNumbers: []
        })
    }
    const getFieldNumberValue = (fieldNumber) => {
        const _ = dependencies.lodash;
        const uniqueNumbers = _.uniq(fieldNumber);
        if (_.size(uniqueNumbers) === 1) {
            return `${uniqueNumbers[0]}`
        }
        return `${uniqueNumbers[0]} to ${uniqueNumbers[1]}`
    }

    const { columnNames, filedNumbers } = splitColumnNamesAndFieldNumbers(reservedStatements);
    const reservedColumns = columnNames.map(name => `"${name}"`).join(', ');
    const reservedNumbers = filedNumbers.map(number => getFieldNumberValue(number)).join(', ');
    return [
        `${!_.isEmpty(reservedColumns) ? `reserved ${reservedColumns};` : ''}`,
        `${!_.isEmpty(reservedNumbers) ? `reserved ${reservedNumbers};` : ''}`
    ].join('\n')
}
const constructPackageName = (descriptor, packageNameParts = []) => {
    const _ = dependencies.lodash;
    const singlePropertyObject = _.keys(descriptor).length === 1;
    if (_.has(descriptor, 'nested') && singlePropertyObject) {
        return constructPackageName(descriptor.nested, packageNameParts)
    }
    if (singlePropertyObject) {
        const nestedProperty = descriptor[_.keys(descriptor)[0]];
        if (_.has(nestedProperty, 'nested') && _.keys(nestedProperty).length === 1) {
            return constructPackageName(nestedProperty, [...packageNameParts, _.keys(descriptor)[0]])
        }
        return { fileDefinitions: descriptor, packageName: packageNameParts.join('.') }
    }
    return { fileDefinitions: descriptor, packageName: packageNameParts.join('.') }
}

module.exports = {
    parseDescriptor
}