const fixFileName = name => {
    return name.replace('.proto', '')
        .replace('.confluent-proto', '')
        .replace('.pulsarSchemaRegistry-proto', '')
        .replace(/-latest$/, '')
        .replace(/-\d+/, '')
        .replace(/-key$/, '')
        .replace(/-value$/, '')
        .replaceAll('-', '_');
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