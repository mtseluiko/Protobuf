const { Protobuf3Visitor } = require("./parser/Protobuf3Visitor");
const { dependencies } = require('./appDependencies');
const {
	MESSAGE_TYPE, ENUM_TYPE, ENUM_OPTION_TYPE,
	ENUM_FIELD_TYPE, FIELD_TYPE, ONE_OF_TYPE,
	ONE_OF_FIELD_TYPE, RESERVED_FIELD_TYPE, MAP_TYPE
} = require('./helpers/parsingEntitiesTypes')


class Visitor extends Protobuf3Visitor {

	visitProto(ctx) {
		const syntaxVersion = this.visit(ctx.syntax());
		const packageName = this.visit(ctx.packageStatement());
		const options = this.visit(ctx.optionStatement());
		const imports = this.visit(ctx.importStatement());
		const definitions = this.visit(ctx.topLevelDef());
		const messages = definitions.filter(definition => definition.elementType === MESSAGE_TYPE);
		const enums = definitions.filter(definition => definition.elementType === ENUM_TYPE);
		return {
			syntaxVersion,
			packageName,
			options,
			imports,
			messages,
			enums
		};
	}

	visitSyntax(ctx) {
		return getLabelValue(ctx, 'version');
	}

	visitPackageStatement(ctx) {
		return getName(ctx.fullIdent());
	}

	visitImportStatement(ctx) {
		const accessModifier = getLabelValue(ctx, 'accessModifier');
		const value = getName(ctx.strLit());
		return {
			accessModifier,
			value
		};
	}

	visitOptionStatement(ctx) {
		const name = getName(ctx.optionName());
		const value = getName(ctx.constant());
		return {
			name,
			value
		};
	}

	visitTopLevelDef(ctx) {
		const protoMessage = this.visitIfExists(ctx, 'messageDef');
		const protoEnum = this.visitIfExists(ctx, 'enumDef');
		const protoService = this.visitIfExists(ctx, 'serviceDef');
		return protoMessage || protoEnum || protoService;
	}

	visitMessageDef(ctx) {
		const elementType = MESSAGE_TYPE;
		const name = getName(ctx.messageName());
		const body = this.visit(ctx.messageBody());
		return {
			elementType,
			name,
			body
		};
	}

	visitMessageBody(ctx) {
		return this.visit(ctx.messageElement());
	}

	visitMessageElement(ctx) {
		const field = this.visitIfExists(ctx, 'field');
		const messageDef = this.visitIfExists(ctx, 'messageDef');
		const enumDef = this.visitIfExists(ctx, 'enumDef');
		const oneOf = this.visitIfExists(ctx, 'oneof');
		const mapField = this.visitIfExists(ctx, 'mapField');
		const reserved = this.visitIfExists(ctx, 'reserved');
		return field || messageDef || enumDef || oneOf || mapField || reserved;
	}

	visitField(ctx) {
		const elementType = FIELD_TYPE;
		const type = getName(ctx.type_());
		const name = getName(ctx.fieldName());
		const fieldNumber = getName(ctx.fieldNumber());
		const repeated = this.visitFlagValue(ctx, 'REPEATED');
		const options = this.visitIfExists(ctx, 'fieldOptions', []);
		return {
			elementType,
			type,
			name,
			fieldNumber,
			repeated,
			options
		};
	}

	visitFieldOptions(ctx) {
		return this.visit(ctx.fieldOption());
	}

	visitFieldOption(ctx) {
		const name = getName(ctx.optionName());
		const value = getName(ctx.constant());
		return {
			name,
			value
		};
	}

	visitEnumDef(ctx) {
		const elementType = ENUM_TYPE;
		const name = getName(ctx.enumName());
		const body = this.visit(ctx.enumBody());
		return {
			elementType,
			name,
			body
		};
	}

	visitEnumBody(ctx) {
		return this.visit(ctx.enumElement());
	}

	visitEnumElement(ctx) {
		const option = this.visitIfExists(ctx, 'optionStatement');
		const field = this.visitIfExists(ctx, 'enumField');
		if (option) {
			return {
				...option,
				elementType: ENUM_OPTION_TYPE
			};
		}
		return {
			...field,
			elementType: ENUM_FIELD_TYPE
		};
	}

	visitEnumField(ctx) {
		const name = getName(ctx.ident());
		const isNegative = this.visitFlagValue(ctx, 'MINUS');
		const value = parseInt(getName(ctx.intLit()), 10);
		const enumValue = isNegative ? -value : value;
		const options = this.visitIfExists(ctx, 'enumValueOptions', []);
		return {
			name,
			value: enumValue,
			options
		};
	}

	visitEnumValueOptions(ctx) {
		return this.visit(ctx.enumValueOption());
	}

	visitEnumValueOption(ctx) {
		const name = getName(ctx.optionName());
		const value = getName(ctx.constant());
		return {
			name,
			value
		};
	}

	visitOneof(ctx) {
		const elementType = ONE_OF_TYPE;
		const name = getName(ctx.oneofName());
		const options = this.visitIfExists(ctx, 'optionStatement');
		const fields = this.visitIfExists(ctx, 'oneofField');
		return {
			elementType,
			name,
			options,
			fields
		}
	}

	visitOneofField(ctx) {
		const elementType = ONE_OF_FIELD_TYPE;
		const type = getName(ctx.type_());
		const name = getName(ctx.fieldName());
		const fieldNumber = getName(ctx.fieldNumber());
		const options = this.visitIfExists(ctx, 'fieldOptions', []);
		return {
			elementType,
			type,
			name,
			fieldNumber,
			options
		};
	}

	visitMapField(ctx) {
		const elementType = MAP_TYPE;
		const keyType = getName(ctx.keyType());
		const type = getName(ctx.type_());
		const name = getName(ctx.mapName());
		const fieldNumber = getName(ctx.fieldNumber());
		const options = this.visitIfExists(ctx, 'fieldOptions', []);
		return {
			elementType,
			keyType,
			type,
			name,
			fieldNumber,
			options
		};
	}

	visitReserved(ctx) {
		const fieldNames = this.visitIfExists(ctx, 'reservedFieldNames');
		const ranges = this.visitIfExists(ctx, 'ranges');
		return {
			elementType: RESERVED_FIELD_TYPE,
			values: ranges || fieldNames
		}
	}

	visitReservedFieldNames(ctx) {
		return this.visit(ctx.strLit());
	}

	visitRanges(ctx) {
		return this.visit(ctx.range_());
	}

	visitRange_(ctx) {
		const isRange = this.visitFlagValue(ctx, 'TO')
		if (isRange) {
			const start = getName(ctx.intLit()[0]);
			const end = getName(ctx.intLit()[1]);
			return `${start} TO ${end}`
		}
		return getName(ctx.intLit()[0]);
	}

	visitStrLit(ctx) {
		return getName(ctx);
	}

	visitIfExists(ctx, funcName, defaultValue) {
		try {
			return this.visit(ctx[funcName]());
		} catch (e) {
			return defaultValue;
		}
	}

	visitFlagValue(ctx, funcName) {
		try {
			this.visit(ctx[funcName]());
			return true;
		} catch (e) {
			return false;
		}
	}
}

const getLabelValue = (context, label) => {
	return context[label]?.text ? removeQuotes(context[label]?.text) : '';
}

const getName = context => {
	if (!context || dependencies.lodash.isEmpty(context)) {
		return '';
	}
	return removeQuotes(context.getText());
};

const removeQuotes = string => string.replace(/['`"]+/gm, '');

module.exports = Visitor;