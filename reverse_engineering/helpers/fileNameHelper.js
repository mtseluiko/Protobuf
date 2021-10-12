const fixFileName = name => {
    const isKeyOrValueSchema = fileName => {
        return fileName.match(/.*-key-\d+$/) || fileName.match(/.*-value-\d+$/)
    }
    const replaceKeyValueSuffix = fileName => fileName.replace(/-key-\d+$/, '').replace(/-value-\d+$/, '');
    const fileName = name.replace('.proto', '')
        .replace('.confluent-proto', '')
        .replace('.pulsarSchemaRegistry-proto', '')
    if (fileName.endsWith('-latest')) {
        return fileName
            .replace(/-latest$/, '')
            .replace(/-key$/, '')
            .replace(/-value$/, '');
    }
    if (fileName.endsWith(/-\d+/ && isKeyOrValueSchema(fileName))) {
        const schemaVersion = fileName.slice(fileName.lastIndexOf('-') + 1);
        return `${replaceKeyValueSuffix(fileName)}_${schemaVersion}`
    }
    return fileName.replaceAll('-', '_');
}

const determineSchemaType = name => {
    const fileName = name.replace('.proto', '')
        .replace('.confluent-proto', '')
        .replace('.pulsarSchemaRegistry-proto', '')
        .replace(/-latest$/, '')
        .replace(/-\d+$/, '');
    if (fileName.endsWith('-key')) {
        return 'key'
    }
    if (fileName.endsWith('-value')) {
        return 'value'
    }
    return ''
}


module.exports = {
    fixFileName,
    determineSchemaType
}