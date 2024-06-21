// Generated from grammars/Protobuf3.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require("antlr4/index");

// This class defines a complete generic visitor for a parse tree produced by Protobuf3Parser.

function Protobuf3Visitor() {
  antlr4.tree.ParseTreeVisitor.call(this);
  return this;
}

Protobuf3Visitor.prototype = Object.create(
  antlr4.tree.ParseTreeVisitor.prototype
);
Protobuf3Visitor.prototype.constructor = Protobuf3Visitor;

// Visit a parse tree produced by Protobuf3Parser#proto.
Protobuf3Visitor.prototype.visitProto = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#syntax.
Protobuf3Visitor.prototype.visitSyntax = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#importStatement.
Protobuf3Visitor.prototype.visitImportStatement = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#packageStatement.
Protobuf3Visitor.prototype.visitPackageStatement = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#optionStatement.
Protobuf3Visitor.prototype.visitOptionStatement = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#optionName.
Protobuf3Visitor.prototype.visitOptionName = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#field.
Protobuf3Visitor.prototype.visitField = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#fieldOptions.
Protobuf3Visitor.prototype.visitFieldOptions = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#fieldOption.
Protobuf3Visitor.prototype.visitFieldOption = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#fieldNumber.
Protobuf3Visitor.prototype.visitFieldNumber = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#extensions.
Protobuf3Visitor.prototype.visitExtensions = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#oneof.
Protobuf3Visitor.prototype.visitOneof = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#oneofField.
Protobuf3Visitor.prototype.visitOneofField = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#mapField.
Protobuf3Visitor.prototype.visitMapField = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#keyType.
Protobuf3Visitor.prototype.visitKeyType = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#type_.
Protobuf3Visitor.prototype.visitType_ = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#reserved.
Protobuf3Visitor.prototype.visitReserved = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#ranges.
Protobuf3Visitor.prototype.visitRanges = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#range_.
Protobuf3Visitor.prototype.visitRange_ = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#reservedFieldNames.
Protobuf3Visitor.prototype.visitReservedFieldNames = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#topLevelDef.
Protobuf3Visitor.prototype.visitTopLevelDef = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#enumDef.
Protobuf3Visitor.prototype.visitEnumDef = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#enumBody.
Protobuf3Visitor.prototype.visitEnumBody = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#enumElement.
Protobuf3Visitor.prototype.visitEnumElement = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#enumField.
Protobuf3Visitor.prototype.visitEnumField = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#enumValueOptions.
Protobuf3Visitor.prototype.visitEnumValueOptions = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#enumValueOption.
Protobuf3Visitor.prototype.visitEnumValueOption = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#messageDef.
Protobuf3Visitor.prototype.visitMessageDef = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#messageBody.
Protobuf3Visitor.prototype.visitMessageBody = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#messageElement.
Protobuf3Visitor.prototype.visitMessageElement = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#serviceDef.
Protobuf3Visitor.prototype.visitServiceDef = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#serviceElement.
Protobuf3Visitor.prototype.visitServiceElement = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#rpc.
Protobuf3Visitor.prototype.visitRpc = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#constant.
Protobuf3Visitor.prototype.visitConstant = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#blockLit.
Protobuf3Visitor.prototype.visitBlockLit = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#emptyStatement.
Protobuf3Visitor.prototype.visitEmptyStatement = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#ident.
Protobuf3Visitor.prototype.visitIdent = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#fullIdent.
Protobuf3Visitor.prototype.visitFullIdent = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#messageName.
Protobuf3Visitor.prototype.visitMessageName = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#enumName.
Protobuf3Visitor.prototype.visitEnumName = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#fieldName.
Protobuf3Visitor.prototype.visitFieldName = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#oneofName.
Protobuf3Visitor.prototype.visitOneofName = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#mapName.
Protobuf3Visitor.prototype.visitMapName = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#serviceName.
Protobuf3Visitor.prototype.visitServiceName = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#rpcName.
Protobuf3Visitor.prototype.visitRpcName = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#messageType.
Protobuf3Visitor.prototype.visitMessageType = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#enumType.
Protobuf3Visitor.prototype.visitEnumType = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#intLit.
Protobuf3Visitor.prototype.visitIntLit = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#strLit.
Protobuf3Visitor.prototype.visitStrLit = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#boolLit.
Protobuf3Visitor.prototype.visitBoolLit = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#floatLit.
Protobuf3Visitor.prototype.visitFloatLit = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#comment.
Protobuf3Visitor.prototype.visitComment = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#lineComment.
Protobuf3Visitor.prototype.visitLineComment = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#fieldLineComment.
Protobuf3Visitor.prototype.visitFieldLineComment = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by Protobuf3Parser#keywords.
Protobuf3Visitor.prototype.visitKeywords = function (ctx) {
  return this.visitChildren(ctx);
};

exports.Protobuf3Visitor = Protobuf3Visitor;
