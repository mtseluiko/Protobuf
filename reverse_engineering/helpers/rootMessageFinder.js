const { dependencies } = require('../appDependencies');

const getRootMessageName = (messages) => {
    const _ = dependencies.lodash;
    const topLevelMessagesNames = messages.map(message => message.name)
    const referencedTopLevelNames = _.uniq(messages.reduce((referencedTopLevelNames, message) => {
        return [
            ...referencedTopLevelNames,
            ...getTopLevelTypes(message, topLevelMessagesNames)
        ]
    },[]));
    for(const index in topLevelMessagesNames){
        const name = topLevelMessagesNames[index];
        if(referencedTopLevelNames.includes(name)){
            continue;
        }
        return name;
    }
}

const getTopLevelTypes = (message, topLevelMessages) => {
    const _ = dependencies.lodash;
    const fieldProperties = message.body.filter(property => property)
        .filter(property => property.elementType === 'field');
    const fieldsTopLevelTypes = fieldProperties
        .filter(property => topLevelMessages.includes(property.type))
        .map(property => property.type);

    const messageProperties = message.body.filter(property => property)
        .filter(property => property.elementType === 'message');
    const messagesTopLevelTypes = messageProperties.reduce((topLevelTypes, message) => {
        return [...topLevelTypes,...getTopLevelTypes(message, topLevelMessages)];
    }, [])
    return _.uniq([...fieldsTopLevelTypes,...messagesTopLevelTypes]);
}


module.exports = {
    getRootMessageName
}