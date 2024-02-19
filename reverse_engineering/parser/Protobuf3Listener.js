// Generated from grammars/Protobuf3.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require("antlr4/index");

// This class defines a complete listener for a parse tree produced by Protobuf3Parser.
function Protobuf3Listener() {
  antlr4.tree.ParseTreeListener.call(this);
  return this;
}

Protobuf3Listener.prototype = Object.create(
  antlr4.tree.ParseTreeListener.prototype,
);
Protobuf3Listener.prototype.constructor = Protobuf3Listener;

// Enter a parse tree produced by Protobuf3Parser#proto.
Protobuf3Listener.prototype.enterProto = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#proto.
Protobuf3Listener.prototype.exitProto = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#syntax.
Protobuf3Listener.prototype.enterSyntax = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#syntax.
Protobuf3Listener.prototype.exitSyntax = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#importStatement.
Protobuf3Listener.prototype.enterImportStatement = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#importStatement.
Protobuf3Listener.prototype.exitImportStatement = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#packageStatement.
Protobuf3Listener.prototype.enterPackageStatement = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#packageStatement.
Protobuf3Listener.prototype.exitPackageStatement = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#optionStatement.
Protobuf3Listener.prototype.enterOptionStatement = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#optionStatement.
Protobuf3Listener.prototype.exitOptionStatement = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#optionName.
Protobuf3Listener.prototype.enterOptionName = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#optionName.
Protobuf3Listener.prototype.exitOptionName = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#field.
Protobuf3Listener.prototype.enterField = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#field.
Protobuf3Listener.prototype.exitField = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#fieldOptions.
Protobuf3Listener.prototype.enterFieldOptions = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#fieldOptions.
Protobuf3Listener.prototype.exitFieldOptions = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#fieldOption.
Protobuf3Listener.prototype.enterFieldOption = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#fieldOption.
Protobuf3Listener.prototype.exitFieldOption = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#fieldNumber.
Protobuf3Listener.prototype.enterFieldNumber = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#fieldNumber.
Protobuf3Listener.prototype.exitFieldNumber = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#extensions.
Protobuf3Listener.prototype.enterExtensions = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#extensions.
Protobuf3Listener.prototype.exitExtensions = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#oneof.
Protobuf3Listener.prototype.enterOneof = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#oneof.
Protobuf3Listener.prototype.exitOneof = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#oneofField.
Protobuf3Listener.prototype.enterOneofField = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#oneofField.
Protobuf3Listener.prototype.exitOneofField = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#mapField.
Protobuf3Listener.prototype.enterMapField = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#mapField.
Protobuf3Listener.prototype.exitMapField = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#keyType.
Protobuf3Listener.prototype.enterKeyType = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#keyType.
Protobuf3Listener.prototype.exitKeyType = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#type_.
Protobuf3Listener.prototype.enterType_ = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#type_.
Protobuf3Listener.prototype.exitType_ = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#reserved.
Protobuf3Listener.prototype.enterReserved = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#reserved.
Protobuf3Listener.prototype.exitReserved = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#ranges.
Protobuf3Listener.prototype.enterRanges = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#ranges.
Protobuf3Listener.prototype.exitRanges = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#range_.
Protobuf3Listener.prototype.enterRange_ = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#range_.
Protobuf3Listener.prototype.exitRange_ = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#reservedFieldNames.
Protobuf3Listener.prototype.enterReservedFieldNames = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#reservedFieldNames.
Protobuf3Listener.prototype.exitReservedFieldNames = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#topLevelDef.
Protobuf3Listener.prototype.enterTopLevelDef = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#topLevelDef.
Protobuf3Listener.prototype.exitTopLevelDef = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#enumDef.
Protobuf3Listener.prototype.enterEnumDef = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#enumDef.
Protobuf3Listener.prototype.exitEnumDef = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#enumBody.
Protobuf3Listener.prototype.enterEnumBody = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#enumBody.
Protobuf3Listener.prototype.exitEnumBody = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#enumElement.
Protobuf3Listener.prototype.enterEnumElement = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#enumElement.
Protobuf3Listener.prototype.exitEnumElement = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#enumField.
Protobuf3Listener.prototype.enterEnumField = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#enumField.
Protobuf3Listener.prototype.exitEnumField = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#enumValueOptions.
Protobuf3Listener.prototype.enterEnumValueOptions = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#enumValueOptions.
Protobuf3Listener.prototype.exitEnumValueOptions = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#enumValueOption.
Protobuf3Listener.prototype.enterEnumValueOption = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#enumValueOption.
Protobuf3Listener.prototype.exitEnumValueOption = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#messageDef.
Protobuf3Listener.prototype.enterMessageDef = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#messageDef.
Protobuf3Listener.prototype.exitMessageDef = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#messageBody.
Protobuf3Listener.prototype.enterMessageBody = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#messageBody.
Protobuf3Listener.prototype.exitMessageBody = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#messageElement.
Protobuf3Listener.prototype.enterMessageElement = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#messageElement.
Protobuf3Listener.prototype.exitMessageElement = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#serviceDef.
Protobuf3Listener.prototype.enterServiceDef = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#serviceDef.
Protobuf3Listener.prototype.exitServiceDef = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#serviceElement.
Protobuf3Listener.prototype.enterServiceElement = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#serviceElement.
Protobuf3Listener.prototype.exitServiceElement = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#rpc.
Protobuf3Listener.prototype.enterRpc = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#rpc.
Protobuf3Listener.prototype.exitRpc = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#constant.
Protobuf3Listener.prototype.enterConstant = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#constant.
Protobuf3Listener.prototype.exitConstant = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#blockLit.
Protobuf3Listener.prototype.enterBlockLit = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#blockLit.
Protobuf3Listener.prototype.exitBlockLit = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#emptyStatement.
Protobuf3Listener.prototype.enterEmptyStatement = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#emptyStatement.
Protobuf3Listener.prototype.exitEmptyStatement = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#ident.
Protobuf3Listener.prototype.enterIdent = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#ident.
Protobuf3Listener.prototype.exitIdent = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#fullIdent.
Protobuf3Listener.prototype.enterFullIdent = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#fullIdent.
Protobuf3Listener.prototype.exitFullIdent = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#messageName.
Protobuf3Listener.prototype.enterMessageName = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#messageName.
Protobuf3Listener.prototype.exitMessageName = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#enumName.
Protobuf3Listener.prototype.enterEnumName = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#enumName.
Protobuf3Listener.prototype.exitEnumName = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#fieldName.
Protobuf3Listener.prototype.enterFieldName = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#fieldName.
Protobuf3Listener.prototype.exitFieldName = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#oneofName.
Protobuf3Listener.prototype.enterOneofName = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#oneofName.
Protobuf3Listener.prototype.exitOneofName = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#mapName.
Protobuf3Listener.prototype.enterMapName = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#mapName.
Protobuf3Listener.prototype.exitMapName = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#serviceName.
Protobuf3Listener.prototype.enterServiceName = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#serviceName.
Protobuf3Listener.prototype.exitServiceName = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#rpcName.
Protobuf3Listener.prototype.enterRpcName = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#rpcName.
Protobuf3Listener.prototype.exitRpcName = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#messageType.
Protobuf3Listener.prototype.enterMessageType = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#messageType.
Protobuf3Listener.prototype.exitMessageType = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#enumType.
Protobuf3Listener.prototype.enterEnumType = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#enumType.
Protobuf3Listener.prototype.exitEnumType = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#intLit.
Protobuf3Listener.prototype.enterIntLit = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#intLit.
Protobuf3Listener.prototype.exitIntLit = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#strLit.
Protobuf3Listener.prototype.enterStrLit = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#strLit.
Protobuf3Listener.prototype.exitStrLit = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#boolLit.
Protobuf3Listener.prototype.enterBoolLit = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#boolLit.
Protobuf3Listener.prototype.exitBoolLit = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#floatLit.
Protobuf3Listener.prototype.enterFloatLit = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#floatLit.
Protobuf3Listener.prototype.exitFloatLit = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#lineComment.
Protobuf3Listener.prototype.enterLineComment = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#lineComment.
Protobuf3Listener.prototype.exitLineComment = function (ctx) {};

// Enter a parse tree produced by Protobuf3Parser#keywords.
Protobuf3Listener.prototype.enterKeywords = function (ctx) {};

// Exit a parse tree produced by Protobuf3Parser#keywords.
Protobuf3Listener.prototype.exitKeywords = function (ctx) {};

exports.Protobuf3Listener = Protobuf3Listener;
