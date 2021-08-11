'use strict'

const fs = require('fs');
const antlr4 = require('antlr4');
const Protobuf3Lexer = require('./parser/Protobuf3Lexer');
const Protobuf3Parser = require('./parser/Protobuf3Parser');
const protoToCollectionsVisitor = require('./protobufToCollectionsVisitor');
const ExprErrorListener = require('./antlrErrorListener');
const { setDependencies, dependencies } = require('./appDependencies');
const {convertParsedFileDataToCollections} = require('./services/converterService')

module.exports = {
	reFromFile: async (data, logger, callback, app) => {
		try {
			setDependencies(app);
			const input = await handleFileData(data.filePath);
			const chars = new antlr4.InputStream(input);
			const lexer = new Protobuf3Lexer.Protobuf3Lexer(chars);
	
			const tokens = new antlr4.CommonTokenStream(lexer);
			const parser = new Protobuf3Parser.Protobuf3Parser(tokens);
			parser.removeErrorListeners();
			parser.addErrorListener(new ExprErrorListener());
			const fileDefinitions = parser.proto().accept(new protoToCollectionsVisitor());
			const result = convertParsedFileDataToCollections(fileDefinitions);
			callback(null, result, {}, [], 'multipleSchema');
		}catch(e){
			const errorObject = {
				message: ``,
				stack: e.stack,
			};

			logger.log('error', errorObject, 'Protobuf file Reverse-Engineering Error');
			callback(errorObject);
		}
	},
};

const handleFileData = filePath => {
	return new Promise((resolve, reject) => {

		fs.readFile(filePath, 'utf-8', (err, content) => {
			if(err) {
				reject(err);
			} else {
				resolve(content);
			}
		});
	});
}
