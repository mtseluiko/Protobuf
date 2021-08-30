'use strict'
const { generateCollectionScript } = require('./services/protoScriptGenerationService')
const { setDependencies, dependencies } = require('../reverse_engineering/appDependencies');

module.exports = {
	generateContainerScript(data, logger, callback, app) {
		setDependencies(app);
		const _ = dependencies.lodash;
		try {
			if (_.isEmpty(data.collections)) {
				callback(null, '');
			}
			const { syntax, packageName, imports, modelDefinitionsStatements, options, messages } = data.collections.reduce((processedMessages, message) => {
				const processedMessage = generateCollectionScript({ ...data, jsonSchema: message });
				return {
					syntax: processedMessage.syntax,
					packageName: processedMessage.packageName,
					imports: [...processedMessages.imports, ...processedMessage.imports],
					modelDefinitionsStatements: [...processedMessages.modelDefinitionsStatements, ...processedMessage.modelDefinitionsStatements],
					options: processedMessage.options,
					messages: [...processedMessages.messages, processedMessage.message],
				}
			}, {
				imports: [],
				modelDefinitionsStatements: [],
				options: [],
				messages: []
			})
			const script = [
				syntax,
				packageName,
				..._.uniq(imports),
				' ',
				..._.uniq(modelDefinitionsStatements),
				...options,
				...messages
			]
				.filter(row => row !== '')
				.join('\n');
			callback(null, script);
		} catch (error) {
			const errorObject = {
				message: error.message,
				stack: error.stack,
			};

			logger.log('error', errorObject, 'Protobuf Forward-Engineering Error');
			callback(errorObject);
		}
	},
	generateScript(data, logger, callback, app) {
		setDependencies(app);
		try {
			const processedMessage = generateCollectionScript(data);
			const script = [
				processedMessage.syntax,
				processedMessage.packageName,
				...processedMessage.imports,
				' ',
				...processedMessage.modelDefinitionsStatements,
				...processedMessage.options,
				processedMessage.message
			]
				.filter(row => row !== '')
				.join('\n');
			callback(null, script);
		} catch (error) {
			const errorObject = {
				message: error.message,
				stack: error.stack,
			};
			logger.log('error', errorObject, 'Protobuf Forward-Engineering Error');
			callback(errorObject);
		}
	}
};
