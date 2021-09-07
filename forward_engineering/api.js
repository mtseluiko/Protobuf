'use strict'
const { generateCollectionScript } = require('./services/protoScriptGenerationService')
const { setDependencies, dependencies } = require('../reverse_engineering/appDependencies');
const RECORD_NAME_STRATEGY = 'RecordNameStrategy';
const TOPIC_RECORD_NAME_STRATEGY = 'TopicRecordNameStrategy';
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
			callback(null, this.prepareScript(script, data));
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
			callback(null, this.prepareScript(script, data));
		} catch (error) {
			const errorObject = {
				message: error.message,
				stack: error.stack,
			};
			logger.log('error', errorObject, 'Protobuf Forward-Engineering Error');
			callback(errorObject);
		}
	},

	prepareScript(script, data) {
		const _ = dependencies.lodash;
		const targetSchemaRegistry = _.get(data, 'options.targetScriptOptions.keyword')
		if (targetSchemaRegistry === 'confluentSchemaRegistry') {
			return this.getConfluentPostQuery({ data, schema: script });
		}
		if (targetSchemaRegistry === 'pulsarSchemaRegistry') {
			const bodyObject = {
				type: "PROTOBUF",
				data: script,
				properties: {}
			}
			const schema = needMinify ? JSON.stringify(bodyObject) : JSON.stringify(bodyObject, null, 4);

			const namespace = _.get(data, 'containerData.name', '');
			const topic = _.get(data, 'entityData.pulsarTopicName', '');
			const persistence = _.get(data, 'entityData.isNonPersistentTopic', false) ? 'non-persistent' : 'persistent';
			return `POST /${persistence}/${namespace}/${topic}/schema\n${script}`
		}

		return script;
	},

	getConfluentPostQuery({ data, schema }) {
		const getName = () => {
			const _ = dependencies.lodash;
			const name = this.getRecordName(data);
			const typePostfix = _.has(data, 'entityData.schemaType') ? `-${data.entityData.schemaType}` : '';
			const containerPrefix = _.has(data, 'containerData.name') ? `${data.containerData.name}.` : '';
			const topicPrefix = _.has(data, 'modelData.schemaTopic') ? `${data.modelData.schemaTopic}-` : '';

			const schemaNameStrategy = _.get(data, 'modelData.schemaNameStrategy', '');
			switch (schemaNameStrategy) {
				case RECORD_NAME_STRATEGY:
					return `${containerPrefix}${name}${typePostfix}`
				case TOPIC_RECORD_NAME_STRATEGY:
					return `${topicPrefix}${containerPrefix}${name}${typePostfix}`
				default:
					return `${name}${typePostfix}`;
			}
		}

		return `POST /subjects/${getName()}/versions\n${JSON.stringify(
			{ schema, schemaType: "PROTOBUF" },
			null,
			4
		)}`;
	},

	getRecordName(data) {
		return (
			data.containerData[0].code
			||
			data.containerData[0].name
			||
			data.containerData[0].collectionName
		);
	}
};
