// Generated from grammars/Protobuf3.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var Protobuf3Listener = require('./Protobuf3Listener').Protobuf3Listener;
var Protobuf3Visitor = require('./Protobuf3Visitor').Protobuf3Visitor;

var grammarFileName = "Protobuf3.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003<\u01dc\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0007\u0002o\n\u0002\f\u0002\u000e\u0002r\u000b\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0005\u0004{\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0090\n",
    "\u0007\u0005\u0007\u0092\n\u0007\u0003\b\u0005\b\u0095\n\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u009f\n\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\t\u00a6\n\t\f\t\u000e",
    "\t\u00a9\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u00b7\n\f\f",
    "\f\u000e\f\u00ba\u000b\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00c6\n\r\u0003\r\u0003\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0005\u000e\u00d7\n\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00ee\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u00f3\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0007\u0012\u00fa\n\u0012\f\u0012\u000e\u0012\u00fd",
    "\u000b\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013",
    "\u0103\n\u0013\u0005\u0013\u0105\n\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u010a\n\u0014\f\u0014\u000e\u0014\u010d\u000b\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0112\n\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0007",
    "\u0017\u011a\n\u0017\f\u0017\u000e\u0017\u011d\u000b\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0124\n",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0129\n\u0019",
    "\u0003\u0019\u0003\u0019\u0005\u0019\u012d\n\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u0135",
    "\n\u001a\f\u001a\u000e\u001a\u0138\u000b\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0007\u001d\u0146\n",
    "\u001d\f\u001d\u000e\u001d\u0149\u000b\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0005\u001e\u0155\n\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0007\u001f\u015b\n\u001f\f\u001f\u000e",
    "\u001f\u015e\u000b\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003",
    " \u0005 \u0165\n \u0003!\u0003!\u0003!\u0003!\u0005!\u016b\n!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0005!\u0172\n!\u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0007!\u0179\n!\f!\u000e!\u017c\u000b!\u0003!\u0003!\u0005",
    "!\u0180\n!\u0003\"\u0003\"\u0005\"\u0184\n\"\u0003\"\u0003\"\u0005\"",
    "\u0188\n\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u018e\n\"\u0003#",
    "\u0003#\u0003#\u0003#\u0003#\u0007#\u0195\n#\f#\u000e#\u0198\u000b#",
    "\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0005%\u01a0\n%\u0003&\u0003",
    "&\u0003&\u0007&\u01a5\n&\f&\u000e&\u01a8\u000b&\u0003\'\u0003\'\u0003",
    "(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003",
    "-\u0003-\u0003.\u0005.\u01b9\n.\u0003.\u0003.\u0003.\u0007.\u01be\n",
    ".\f.\u000e.\u01c1\u000b.\u0003.\u0003.\u0003/\u0005/\u01c6\n/\u0003",
    "/\u0003/\u0003/\u0007/\u01cb\n/\f/\u000e/\u01ce\u000b/\u0003/\u0003",
    "/\u00030\u00030\u00031\u00031\u00032\u00032\u00033\u00033\u00034\u0003",
    "4\u00034\u0002\u00025\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bd",
    "f\u0002\b\u0003\u0002$%\u0003\u0002\u0005\u0006\u0003\u0002\f\u0017",
    "\u0003\u000234\u0004\u0002$%55\u0004\u0002\u0003#66\u0002\u01f3\u0002",
    "h\u0003\u0002\u0002\u0002\u0004s\u0003\u0002\u0002\u0002\u0006x\u0003",
    "\u0002\u0002\u0002\b\u007f\u0003\u0002\u0002\u0002\n\u0083\u0003\u0002",
    "\u0002\u0002\f\u0091\u0003\u0002\u0002\u0002\u000e\u0094\u0003\u0002",
    "\u0002\u0002\u0010\u00a2\u0003\u0002\u0002\u0002\u0012\u00aa\u0003\u0002",
    "\u0002\u0002\u0014\u00ae\u0003\u0002\u0002\u0002\u0016\u00b0\u0003\u0002",
    "\u0002\u0002\u0018\u00bd\u0003\u0002\u0002\u0002\u001a\u00c9\u0003\u0002",
    "\u0002\u0002\u001c\u00da\u0003\u0002\u0002\u0002\u001e\u00ed\u0003\u0002",
    "\u0002\u0002 \u00ef\u0003\u0002\u0002\u0002\"\u00f6\u0003\u0002\u0002",
    "\u0002$\u00fe\u0003\u0002\u0002\u0002&\u0106\u0003\u0002\u0002\u0002",
    "(\u0111\u0003\u0002\u0002\u0002*\u0113\u0003\u0002\u0002\u0002,\u0117",
    "\u0003\u0002\u0002\u0002.\u0123\u0003\u0002\u0002\u00020\u0125\u0003",
    "\u0002\u0002\u00022\u0130\u0003\u0002\u0002\u00024\u013b\u0003\u0002",
    "\u0002\u00026\u013f\u0003\u0002\u0002\u00028\u0143\u0003\u0002\u0002",
    "\u0002:\u0154\u0003\u0002\u0002\u0002<\u0156\u0003\u0002\u0002\u0002",
    ">\u0164\u0003\u0002\u0002\u0002@\u0166\u0003\u0002\u0002\u0002B\u018d",
    "\u0003\u0002\u0002\u0002D\u018f\u0003\u0002\u0002\u0002F\u019b\u0003",
    "\u0002\u0002\u0002H\u019f\u0003\u0002\u0002\u0002J\u01a1\u0003\u0002",
    "\u0002\u0002L\u01a9\u0003\u0002\u0002\u0002N\u01ab\u0003\u0002\u0002",
    "\u0002P\u01ad\u0003\u0002\u0002\u0002R\u01af\u0003\u0002\u0002\u0002",
    "T\u01b1\u0003\u0002\u0002\u0002V\u01b3\u0003\u0002\u0002\u0002X\u01b5",
    "\u0003\u0002\u0002\u0002Z\u01b8\u0003\u0002\u0002\u0002\\\u01c5\u0003",
    "\u0002\u0002\u0002^\u01d1\u0003\u0002\u0002\u0002`\u01d3\u0003\u0002",
    "\u0002\u0002b\u01d5\u0003\u0002\u0002\u0002d\u01d7\u0003\u0002\u0002",
    "\u0002f\u01d9\u0003\u0002\u0002\u0002hp\u0005\u0004\u0003\u0002io\u0005",
    "\u0006\u0004\u0002jo\u0005\b\u0005\u0002ko\u0005\n\u0006\u0002lo\u0005",
    "(\u0015\u0002mo\u0005F$\u0002ni\u0003\u0002\u0002\u0002nj\u0003\u0002",
    "\u0002\u0002nk\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002nm\u0003",
    "\u0002\u0002\u0002or\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002",
    "pq\u0003\u0002\u0002\u0002q\u0003\u0003\u0002\u0002\u0002rp\u0003\u0002",
    "\u0002\u0002st\u0007\u0003\u0002\u0002tu\u0007\'\u0002\u0002uv\t\u0002",
    "\u0002\u0002vw\u0007&\u0002\u0002w\u0005\u0003\u0002\u0002\u0002xz\u0007",
    "\u0004\u0002\u0002y{\t\u0003\u0002\u0002zy\u0003\u0002\u0002\u0002z",
    "{\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|}\u0005`1\u0002",
    "}~\u0007&\u0002\u0002~\u0007\u0003\u0002\u0002\u0002\u007f\u0080\u0007",
    "\u0007\u0002\u0002\u0080\u0081\u0005J&\u0002\u0081\u0082\u0007&\u0002",
    "\u0002\u0082\t\u0003\u0002\u0002\u0002\u0083\u0084\u0007\b\u0002\u0002",
    "\u0084\u0085\u0005\f\u0007\u0002\u0085\u0086\u0007\'\u0002\u0002\u0086",
    "\u0087\u0005B\"\u0002\u0087\u0088\u0007&\u0002\u0002\u0088\u000b\u0003",
    "\u0002\u0002\u0002\u0089\u0092\u0005J&\u0002\u008a\u008b\u0007(\u0002",
    "\u0002\u008b\u008c\u0005J&\u0002\u008c\u008f\u0007)\u0002\u0002\u008d",
    "\u008e\u00070\u0002\u0002\u008e\u0090\u0005J&\u0002\u008f\u008d\u0003",
    "\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0003",
    "\u0002\u0002\u0002\u0091\u0089\u0003\u0002\u0002\u0002\u0091\u008a\u0003",
    "\u0002\u0002\u0002\u0092\r\u0003\u0002\u0002\u0002\u0093\u0095\u0007",
    "\t\u0002\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0094\u0095\u0003",
    "\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0097\u0005",
    "\u001e\u0010\u0002\u0097\u0098\u0005P)\u0002\u0098\u0099\u0007\'\u0002",
    "\u0002\u0099\u009e\u0005\u0014\u000b\u0002\u009a\u009b\u0007*\u0002",
    "\u0002\u009b\u009c\u0005\u0010\t\u0002\u009c\u009d\u0007+\u0002\u0002",
    "\u009d\u009f\u0003\u0002\u0002\u0002\u009e\u009a\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\u0007&\u0002\u0002\u00a1\u000f\u0003\u0002\u0002\u0002",
    "\u00a2\u00a7\u0005\u0012\n\u0002\u00a3\u00a4\u00071\u0002\u0002\u00a4",
    "\u00a6\u0005\u0012\n\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6",
    "\u00a9\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7",
    "\u00a8\u0003\u0002\u0002\u0002\u00a8\u0011\u0003\u0002\u0002\u0002\u00a9",
    "\u00a7\u0003\u0002\u0002\u0002\u00aa\u00ab\u0005\f\u0007\u0002\u00ab",
    "\u00ac\u0007\'\u0002\u0002\u00ac\u00ad\u0005B\"\u0002\u00ad\u0013\u0003",
    "\u0002\u0002\u0002\u00ae\u00af\u0005^0\u0002\u00af\u0015\u0003\u0002",
    "\u0002\u0002\u00b0\u00b1\u0007\n\u0002\u0002\u00b1\u00b2\u0005R*\u0002",
    "\u00b2\u00b8\u0007,\u0002\u0002\u00b3\u00b7\u0005\n\u0006\u0002\u00b4",
    "\u00b7\u0005\u0018\r\u0002\u00b5\u00b7\u0005F$\u0002\u00b6\u00b3\u0003",
    "\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b5\u0003",
    "\u0002\u0002\u0002\u00b7\u00ba\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003",
    "\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00bb\u0003",
    "\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007",
    "-\u0002\u0002\u00bc\u0017\u0003\u0002\u0002\u0002\u00bd\u00be\u0005",
    "\u001e\u0010\u0002\u00be\u00bf\u0005P)\u0002\u00bf\u00c0\u0007\'\u0002",
    "\u0002\u00c0\u00c5\u0005\u0014\u000b\u0002\u00c1\u00c2\u0007*\u0002",
    "\u0002\u00c2\u00c3\u0005\u0010\t\u0002\u00c3\u00c4\u0007+\u0002\u0002",
    "\u00c4\u00c6\u0003\u0002\u0002\u0002\u00c5\u00c1\u0003\u0002\u0002\u0002",
    "\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002",
    "\u00c7\u00c8\u0007&\u0002\u0002\u00c8\u0019\u0003\u0002\u0002\u0002",
    "\u00c9\u00ca\u0007\u000b\u0002\u0002\u00ca\u00cb\u0007.\u0002\u0002",
    "\u00cb\u00cc\u0005\u001c\u000f\u0002\u00cc\u00cd\u00071\u0002\u0002",
    "\u00cd\u00ce\u0005\u001e\u0010\u0002\u00ce\u00cf\u0007/\u0002\u0002",
    "\u00cf\u00d0\u0005T+\u0002\u00d0\u00d1\u0007\'\u0002\u0002\u00d1\u00d6",
    "\u0005\u0014\u000b\u0002\u00d2\u00d3\u0007*\u0002\u0002\u00d3\u00d4",
    "\u0005\u0010\t\u0002\u00d4\u00d5\u0007+\u0002\u0002\u00d5\u00d7\u0003",
    "\u0002\u0002\u0002\u00d6\u00d2\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003",
    "\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007",
    "&\u0002\u0002\u00d9\u001b\u0003\u0002\u0002\u0002\u00da\u00db\t\u0004",
    "\u0002\u0002\u00db\u001d\u0003\u0002\u0002\u0002\u00dc\u00ee\u0007\u0018",
    "\u0002\u0002\u00dd\u00ee\u0007\u0019\u0002\u0002\u00de\u00ee\u0007\f",
    "\u0002\u0002\u00df\u00ee\u0007\r\u0002\u0002\u00e0\u00ee\u0007\u000e",
    "\u0002\u0002\u00e1\u00ee\u0007\u000f\u0002\u0002\u00e2\u00ee\u0007\u0010",
    "\u0002\u0002\u00e3\u00ee\u0007\u0011\u0002\u0002\u00e4\u00ee\u0007\u0012",
    "\u0002\u0002\u00e5\u00ee\u0007\u0013\u0002\u0002\u00e6\u00ee\u0007\u0014",
    "\u0002\u0002\u00e7\u00ee\u0007\u0015\u0002\u0002\u00e8\u00ee\u0007\u0016",
    "\u0002\u0002\u00e9\u00ee\u0007\u0017\u0002\u0002\u00ea\u00ee\u0007\u001a",
    "\u0002\u0002\u00eb\u00ee\u0005Z.\u0002\u00ec\u00ee\u0005\\/\u0002\u00ed",
    "\u00dc\u0003\u0002\u0002\u0002\u00ed\u00dd\u0003\u0002\u0002\u0002\u00ed",
    "\u00de\u0003\u0002\u0002\u0002\u00ed\u00df\u0003\u0002\u0002\u0002\u00ed",
    "\u00e0\u0003\u0002\u0002\u0002\u00ed\u00e1\u0003\u0002\u0002\u0002\u00ed",
    "\u00e2\u0003\u0002\u0002\u0002\u00ed\u00e3\u0003\u0002\u0002\u0002\u00ed",
    "\u00e4\u0003\u0002\u0002\u0002\u00ed\u00e5\u0003\u0002\u0002\u0002\u00ed",
    "\u00e6\u0003\u0002\u0002\u0002\u00ed\u00e7\u0003\u0002\u0002\u0002\u00ed",
    "\u00e8\u0003\u0002\u0002\u0002\u00ed\u00e9\u0003\u0002\u0002\u0002\u00ed",
    "\u00ea\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ed",
    "\u00ec\u0003\u0002\u0002\u0002\u00ee\u001f\u0003\u0002\u0002\u0002\u00ef",
    "\u00f2\u0007\u001b\u0002\u0002\u00f0\u00f3\u0005\"\u0012\u0002\u00f1",
    "\u00f3\u0005&\u0014\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f2",
    "\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4",
    "\u00f5\u0007&\u0002\u0002\u00f5!\u0003\u0002\u0002\u0002\u00f6\u00fb",
    "\u0005$\u0013\u0002\u00f7\u00f8\u00071\u0002\u0002\u00f8\u00fa\u0005",
    "$\u0013\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00fa\u00fd\u0003",
    "\u0002\u0002\u0002\u00fb\u00f9\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003",
    "\u0002\u0002\u0002\u00fc#\u0003\u0002\u0002\u0002\u00fd\u00fb\u0003",
    "\u0002\u0002\u0002\u00fe\u0104\u0005^0\u0002\u00ff\u0102\u0007\u001c",
    "\u0002\u0002\u0100\u0103\u0005^0\u0002\u0101\u0103\u0007\u001d\u0002",
    "\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0102\u0101\u0003\u0002\u0002",
    "\u0002\u0103\u0105\u0003\u0002\u0002\u0002\u0104\u00ff\u0003\u0002\u0002",
    "\u0002\u0104\u0105\u0003\u0002\u0002\u0002\u0105%\u0003\u0002\u0002",
    "\u0002\u0106\u010b\u0005`1\u0002\u0107\u0108\u00071\u0002\u0002\u0108",
    "\u010a\u0005`1\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u010a\u010d",
    "\u0003\u0002\u0002\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010b\u010c",
    "\u0003\u0002\u0002\u0002\u010c\'\u0003\u0002\u0002\u0002\u010d\u010b",
    "\u0003\u0002\u0002\u0002\u010e\u0112\u00056\u001c\u0002\u010f\u0112",
    "\u0005*\u0016\u0002\u0110\u0112\u0005<\u001f\u0002\u0111\u010e\u0003",
    "\u0002\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0111\u0110\u0003",
    "\u0002\u0002\u0002\u0112)\u0003\u0002\u0002\u0002\u0113\u0114\u0007",
    "\u001e\u0002\u0002\u0114\u0115\u0005N(\u0002\u0115\u0116\u0005,\u0017",
    "\u0002\u0116+\u0003\u0002\u0002\u0002\u0117\u011b\u0007,\u0002\u0002",
    "\u0118\u011a\u0005.\u0018\u0002\u0119\u0118\u0003\u0002\u0002\u0002",
    "\u011a\u011d\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002\u0002\u0002",
    "\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u011e\u0003\u0002\u0002\u0002",
    "\u011d\u011b\u0003\u0002\u0002\u0002\u011e\u011f\u0007-\u0002\u0002",
    "\u011f-\u0003\u0002\u0002\u0002\u0120\u0124\u0005\n\u0006\u0002\u0121",
    "\u0124\u00050\u0019\u0002\u0122\u0124\u0005F$\u0002\u0123\u0120\u0003",
    "\u0002\u0002\u0002\u0123\u0121\u0003\u0002\u0002\u0002\u0123\u0122\u0003",
    "\u0002\u0002\u0002\u0124/\u0003\u0002\u0002\u0002\u0125\u0126\u0005",
    "H%\u0002\u0126\u0128\u0007\'\u0002\u0002\u0127\u0129\u00074\u0002\u0002",
    "\u0128\u0127\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002",
    "\u0129\u012a\u0003\u0002\u0002\u0002\u012a\u012c\u0005^0\u0002\u012b",
    "\u012d\u00052\u001a\u0002\u012c\u012b\u0003\u0002\u0002\u0002\u012c",
    "\u012d\u0003\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e",
    "\u012f\u0007&\u0002\u0002\u012f1\u0003\u0002\u0002\u0002\u0130\u0131",
    "\u0007*\u0002\u0002\u0131\u0136\u00054\u001b\u0002\u0132\u0133\u0007",
    "1\u0002\u0002\u0133\u0135\u00054\u001b\u0002\u0134\u0132\u0003\u0002",
    "\u0002\u0002\u0135\u0138\u0003\u0002\u0002\u0002\u0136\u0134\u0003\u0002",
    "\u0002\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137\u0139\u0003\u0002",
    "\u0002\u0002\u0138\u0136\u0003\u0002\u0002\u0002\u0139\u013a\u0007+",
    "\u0002\u0002\u013a3\u0003\u0002\u0002\u0002\u013b\u013c\u0005\f\u0007",
    "\u0002\u013c\u013d\u0007\'\u0002\u0002\u013d\u013e\u0005B\"\u0002\u013e",
    "5\u0003\u0002\u0002\u0002\u013f\u0140\u0007\u001f\u0002\u0002\u0140",
    "\u0141\u0005L\'\u0002\u0141\u0142\u00058\u001d\u0002\u01427\u0003\u0002",
    "\u0002\u0002\u0143\u0147\u0007,\u0002\u0002\u0144\u0146\u0005:\u001e",
    "\u0002\u0145\u0144\u0003\u0002\u0002\u0002\u0146\u0149\u0003\u0002\u0002",
    "\u0002\u0147\u0145\u0003\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002",
    "\u0002\u0148\u014a\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002",
    "\u0002\u014a\u014b\u0007-\u0002\u0002\u014b9\u0003\u0002\u0002\u0002",
    "\u014c\u0155\u0005\u000e\b\u0002\u014d\u0155\u0005*\u0016\u0002\u014e",
    "\u0155\u00056\u001c\u0002\u014f\u0155\u0005\n\u0006\u0002\u0150\u0155",
    "\u0005\u0016\f\u0002\u0151\u0155\u0005\u001a\u000e\u0002\u0152\u0155",
    "\u0005 \u0011\u0002\u0153\u0155\u0005F$\u0002\u0154\u014c\u0003\u0002",
    "\u0002\u0002\u0154\u014d\u0003\u0002\u0002\u0002\u0154\u014e\u0003\u0002",
    "\u0002\u0002\u0154\u014f\u0003\u0002\u0002\u0002\u0154\u0150\u0003\u0002",
    "\u0002\u0002\u0154\u0151\u0003\u0002\u0002\u0002\u0154\u0152\u0003\u0002",
    "\u0002\u0002\u0154\u0153\u0003\u0002\u0002\u0002\u0155;\u0003\u0002",
    "\u0002\u0002\u0156\u0157\u0007 \u0002\u0002\u0157\u0158\u0005V,\u0002",
    "\u0158\u015c\u0007,\u0002\u0002\u0159\u015b\u0005> \u0002\u015a\u0159",
    "\u0003\u0002\u0002\u0002\u015b\u015e\u0003\u0002\u0002\u0002\u015c\u015a",
    "\u0003\u0002\u0002\u0002\u015c\u015d\u0003\u0002\u0002\u0002\u015d\u015f",
    "\u0003\u0002\u0002\u0002\u015e\u015c\u0003\u0002\u0002\u0002\u015f\u0160",
    "\u0007-\u0002\u0002\u0160=\u0003\u0002\u0002\u0002\u0161\u0165\u0005",
    "\n\u0006\u0002\u0162\u0165\u0005@!\u0002\u0163\u0165\u0005F$\u0002\u0164",
    "\u0161\u0003\u0002\u0002\u0002\u0164\u0162\u0003\u0002\u0002\u0002\u0164",
    "\u0163\u0003\u0002\u0002\u0002\u0165?\u0003\u0002\u0002\u0002\u0166",
    "\u0167\u0007!\u0002\u0002\u0167\u0168\u0005X-\u0002\u0168\u016a\u0007",
    "(\u0002\u0002\u0169\u016b\u0007\"\u0002\u0002\u016a\u0169\u0003\u0002",
    "\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b\u016c\u0003\u0002",
    "\u0002\u0002\u016c\u016d\u0005Z.\u0002\u016d\u016e\u0007)\u0002\u0002",
    "\u016e\u016f\u0007#\u0002\u0002\u016f\u0171\u0007(\u0002\u0002\u0170",
    "\u0172\u0007\"\u0002\u0002\u0171\u0170\u0003\u0002\u0002\u0002\u0171",
    "\u0172\u0003\u0002\u0002\u0002\u0172\u0173\u0003\u0002\u0002\u0002\u0173",
    "\u0174\u0005Z.\u0002\u0174\u017f\u0007)\u0002\u0002\u0175\u017a\u0007",
    ",\u0002\u0002\u0176\u0179\u0005\n\u0006\u0002\u0177\u0179\u0005F$\u0002",
    "\u0178\u0176\u0003\u0002\u0002\u0002\u0178\u0177\u0003\u0002\u0002\u0002",
    "\u0179\u017c\u0003\u0002\u0002\u0002\u017a\u0178\u0003\u0002\u0002\u0002",
    "\u017a\u017b\u0003\u0002\u0002\u0002\u017b\u017d\u0003\u0002\u0002\u0002",
    "\u017c\u017a\u0003\u0002\u0002\u0002\u017d\u0180\u0007-\u0002\u0002",
    "\u017e\u0180\u0007&\u0002\u0002\u017f\u0175\u0003\u0002\u0002\u0002",
    "\u017f\u017e\u0003\u0002\u0002\u0002\u0180A\u0003\u0002\u0002\u0002",
    "\u0181\u018e\u0005J&\u0002\u0182\u0184\t\u0005\u0002\u0002\u0183\u0182",
    "\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184\u0185",
    "\u0003\u0002\u0002\u0002\u0185\u018e\u0005^0\u0002\u0186\u0188\t\u0005",
    "\u0002\u0002\u0187\u0186\u0003\u0002\u0002\u0002\u0187\u0188\u0003\u0002",
    "\u0002\u0002\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u018e\u0005d",
    "3\u0002\u018a\u018e\u0005`1\u0002\u018b\u018e\u0005b2\u0002\u018c\u018e",
    "\u0005D#\u0002\u018d\u0181\u0003\u0002\u0002\u0002\u018d\u0183\u0003",
    "\u0002\u0002\u0002\u018d\u0187\u0003\u0002\u0002\u0002\u018d\u018a\u0003",
    "\u0002\u0002\u0002\u018d\u018b\u0003\u0002\u0002\u0002\u018d\u018c\u0003",
    "\u0002\u0002\u0002\u018eC\u0003\u0002\u0002\u0002\u018f\u0196\u0007",
    ",\u0002\u0002\u0190\u0191\u0005H%\u0002\u0191\u0192\u00072\u0002\u0002",
    "\u0192\u0193\u0005B\"\u0002\u0193\u0195\u0003\u0002\u0002\u0002\u0194",
    "\u0190\u0003\u0002\u0002\u0002\u0195\u0198\u0003\u0002\u0002\u0002\u0196",
    "\u0194\u0003\u0002\u0002\u0002\u0196\u0197\u0003\u0002\u0002\u0002\u0197",
    "\u0199\u0003\u0002\u0002\u0002\u0198\u0196\u0003\u0002\u0002\u0002\u0199",
    "\u019a\u0007-\u0002\u0002\u019aE\u0003\u0002\u0002\u0002\u019b\u019c",
    "\u0007&\u0002\u0002\u019cG\u0003\u0002\u0002\u0002\u019d\u01a0\u0007",
    "9\u0002\u0002\u019e\u01a0\u0005f4\u0002\u019f\u019d\u0003\u0002\u0002",
    "\u0002\u019f\u019e\u0003\u0002\u0002\u0002\u01a0I\u0003\u0002\u0002",
    "\u0002\u01a1\u01a6\u0005H%\u0002\u01a2\u01a3\u00070\u0002\u0002\u01a3",
    "\u01a5\u0005H%\u0002\u01a4\u01a2\u0003\u0002\u0002\u0002\u01a5\u01a8",
    "\u0003\u0002\u0002\u0002\u01a6\u01a4\u0003\u0002\u0002\u0002\u01a6\u01a7",
    "\u0003\u0002\u0002\u0002\u01a7K\u0003\u0002\u0002\u0002\u01a8\u01a6",
    "\u0003\u0002\u0002\u0002\u01a9\u01aa\u0005H%\u0002\u01aaM\u0003\u0002",
    "\u0002\u0002\u01ab\u01ac\u0005H%\u0002\u01acO\u0003\u0002\u0002\u0002",
    "\u01ad\u01ae\u0005H%\u0002\u01aeQ\u0003\u0002\u0002\u0002\u01af\u01b0",
    "\u0005H%\u0002\u01b0S\u0003\u0002\u0002\u0002\u01b1\u01b2\u0005H%\u0002",
    "\u01b2U\u0003\u0002\u0002\u0002\u01b3\u01b4\u0005H%\u0002\u01b4W\u0003",
    "\u0002\u0002\u0002\u01b5\u01b6\u0005H%\u0002\u01b6Y\u0003\u0002\u0002",
    "\u0002\u01b7\u01b9\u00070\u0002\u0002\u01b8\u01b7\u0003\u0002\u0002",
    "\u0002\u01b8\u01b9\u0003\u0002\u0002\u0002\u01b9\u01bf\u0003\u0002\u0002",
    "\u0002\u01ba\u01bb\u0005H%\u0002\u01bb\u01bc\u00070\u0002\u0002\u01bc",
    "\u01be\u0003\u0002\u0002\u0002\u01bd\u01ba\u0003\u0002\u0002\u0002\u01be",
    "\u01c1\u0003\u0002\u0002\u0002\u01bf\u01bd\u0003\u0002\u0002\u0002\u01bf",
    "\u01c0\u0003\u0002\u0002\u0002\u01c0\u01c2\u0003\u0002\u0002\u0002\u01c1",
    "\u01bf\u0003\u0002\u0002\u0002\u01c2\u01c3\u0005L\'\u0002\u01c3[\u0003",
    "\u0002\u0002\u0002\u01c4\u01c6\u00070\u0002\u0002\u01c5\u01c4\u0003",
    "\u0002\u0002\u0002\u01c5\u01c6\u0003\u0002\u0002\u0002\u01c6\u01cc\u0003",
    "\u0002\u0002\u0002\u01c7\u01c8\u0005H%\u0002\u01c8\u01c9\u00070\u0002",
    "\u0002\u01c9\u01cb\u0003\u0002\u0002\u0002\u01ca\u01c7\u0003\u0002\u0002",
    "\u0002\u01cb\u01ce\u0003\u0002\u0002\u0002\u01cc\u01ca\u0003\u0002\u0002",
    "\u0002\u01cc\u01cd\u0003\u0002\u0002\u0002\u01cd\u01cf\u0003\u0002\u0002",
    "\u0002\u01ce\u01cc\u0003\u0002\u0002\u0002\u01cf\u01d0\u0005N(\u0002",
    "\u01d0]\u0003\u0002\u0002\u0002\u01d1\u01d2\u00078\u0002\u0002\u01d2",
    "_\u0003\u0002\u0002\u0002\u01d3\u01d4\t\u0006\u0002\u0002\u01d4a\u0003",
    "\u0002\u0002\u0002\u01d5\u01d6\u00076\u0002\u0002\u01d6c\u0003\u0002",
    "\u0002\u0002\u01d7\u01d8\u00077\u0002\u0002\u01d8e\u0003\u0002\u0002",
    "\u0002\u01d9\u01da\t\u0007\u0002\u0002\u01dag\u0003\u0002\u0002\u0002",
    "-npz\u008f\u0091\u0094\u009e\u00a7\u00b6\u00b8\u00c5\u00d6\u00ed\u00f2",
    "\u00fb\u0102\u0104\u010b\u0111\u011b\u0123\u0128\u012c\u0136\u0147\u0154",
    "\u015c\u0164\u016a\u0171\u0178\u017a\u017f\u0183\u0187\u018d\u0196\u019f",
    "\u01a6\u01b8\u01bf\u01c5\u01cc"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'syntax'", "'import'", "'weak'", "'public'", 
                     "'package'", "'option'", "'repeated'", "'oneof'", "'map'", 
                     "'int32'", "'int64'", "'uint32'", "'uint64'", "'sint32'", 
                     "'sint64'", "'fixed32'", "'fixed64'", "'sfixed32'", 
                     "'sfixed64'", "'bool'", "'string'", "'double'", "'float'", 
                     "'bytes'", "'reserved'", "'to'", "'max'", "'enum'", 
                     "'message'", "'service'", "'rpc'", "'stream'", "'returns'", 
                     "'\"proto3\"'", "''proto3''", "';'", "'='", "'('", 
                     "')'", "'['", "']'", "'{'", "'}'", "'<'", "'>'", "'.'", 
                     "','", "':'", "'+'", "'-'" ];

var symbolicNames = [ null, "SYNTAX", "IMPORT", "WEAK", "PUBLIC", "PACKAGE", 
                      "OPTION", "REPEATED", "ONEOF", "MAP", "INT32", "INT64", 
                      "UINT32", "UINT64", "SINT32", "SINT64", "FIXED32", 
                      "FIXED64", "SFIXED32", "SFIXED64", "BOOL", "STRING", 
                      "DOUBLE", "FLOAT", "BYTES", "RESERVED", "TO", "MAX", 
                      "ENUM", "MESSAGE", "SERVICE", "RPC", "STREAM", "RETURNS", 
                      "PROTO3_LIT_SINGLE", "PROTO3_LIT_DOBULE", "SEMI", 
                      "EQ", "LP", "RP", "LB", "RB", "LC", "RC", "LT", "GT", 
                      "DOT", "COMMA", "COLON", "PLUS", "MINUS", "STR_LIT", 
                      "BOOL_LIT", "FLOAT_LIT", "INT_LIT", "IDENTIFIER", 
                      "WS", "LINE_COMMENT", "COMMENT" ];

var ruleNames =  [ "proto", "syntax", "importStatement", "packageStatement", 
                   "optionStatement", "optionName", "field", "fieldOptions", 
                   "fieldOption", "fieldNumber", "oneof", "oneofField", 
                   "mapField", "keyType", "type_", "reserved", "ranges", 
                   "range_", "reservedFieldNames", "topLevelDef", "enumDef", 
                   "enumBody", "enumElement", "enumField", "enumValueOptions", 
                   "enumValueOption", "messageDef", "messageBody", "messageElement", 
                   "serviceDef", "serviceElement", "rpc", "constant", "blockLit", 
                   "emptyStatement", "ident", "fullIdent", "messageName", 
                   "enumName", "fieldName", "oneofName", "mapName", "serviceName", 
                   "rpcName", "messageType", "enumType", "intLit", "strLit", 
                   "boolLit", "floatLit", "keywords" ];

function Protobuf3Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

Protobuf3Parser.prototype = Object.create(antlr4.Parser.prototype);
Protobuf3Parser.prototype.constructor = Protobuf3Parser;

Object.defineProperty(Protobuf3Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

Protobuf3Parser.EOF = antlr4.Token.EOF;
Protobuf3Parser.SYNTAX = 1;
Protobuf3Parser.IMPORT = 2;
Protobuf3Parser.WEAK = 3;
Protobuf3Parser.PUBLIC = 4;
Protobuf3Parser.PACKAGE = 5;
Protobuf3Parser.OPTION = 6;
Protobuf3Parser.REPEATED = 7;
Protobuf3Parser.ONEOF = 8;
Protobuf3Parser.MAP = 9;
Protobuf3Parser.INT32 = 10;
Protobuf3Parser.INT64 = 11;
Protobuf3Parser.UINT32 = 12;
Protobuf3Parser.UINT64 = 13;
Protobuf3Parser.SINT32 = 14;
Protobuf3Parser.SINT64 = 15;
Protobuf3Parser.FIXED32 = 16;
Protobuf3Parser.FIXED64 = 17;
Protobuf3Parser.SFIXED32 = 18;
Protobuf3Parser.SFIXED64 = 19;
Protobuf3Parser.BOOL = 20;
Protobuf3Parser.STRING = 21;
Protobuf3Parser.DOUBLE = 22;
Protobuf3Parser.FLOAT = 23;
Protobuf3Parser.BYTES = 24;
Protobuf3Parser.RESERVED = 25;
Protobuf3Parser.TO = 26;
Protobuf3Parser.MAX = 27;
Protobuf3Parser.ENUM = 28;
Protobuf3Parser.MESSAGE = 29;
Protobuf3Parser.SERVICE = 30;
Protobuf3Parser.RPC = 31;
Protobuf3Parser.STREAM = 32;
Protobuf3Parser.RETURNS = 33;
Protobuf3Parser.PROTO3_LIT_SINGLE = 34;
Protobuf3Parser.PROTO3_LIT_DOBULE = 35;
Protobuf3Parser.SEMI = 36;
Protobuf3Parser.EQ = 37;
Protobuf3Parser.LP = 38;
Protobuf3Parser.RP = 39;
Protobuf3Parser.LB = 40;
Protobuf3Parser.RB = 41;
Protobuf3Parser.LC = 42;
Protobuf3Parser.RC = 43;
Protobuf3Parser.LT = 44;
Protobuf3Parser.GT = 45;
Protobuf3Parser.DOT = 46;
Protobuf3Parser.COMMA = 47;
Protobuf3Parser.COLON = 48;
Protobuf3Parser.PLUS = 49;
Protobuf3Parser.MINUS = 50;
Protobuf3Parser.STR_LIT = 51;
Protobuf3Parser.BOOL_LIT = 52;
Protobuf3Parser.FLOAT_LIT = 53;
Protobuf3Parser.INT_LIT = 54;
Protobuf3Parser.IDENTIFIER = 55;
Protobuf3Parser.WS = 56;
Protobuf3Parser.LINE_COMMENT = 57;
Protobuf3Parser.COMMENT = 58;

Protobuf3Parser.RULE_proto = 0;
Protobuf3Parser.RULE_syntax = 1;
Protobuf3Parser.RULE_importStatement = 2;
Protobuf3Parser.RULE_packageStatement = 3;
Protobuf3Parser.RULE_optionStatement = 4;
Protobuf3Parser.RULE_optionName = 5;
Protobuf3Parser.RULE_field = 6;
Protobuf3Parser.RULE_fieldOptions = 7;
Protobuf3Parser.RULE_fieldOption = 8;
Protobuf3Parser.RULE_fieldNumber = 9;
Protobuf3Parser.RULE_oneof = 10;
Protobuf3Parser.RULE_oneofField = 11;
Protobuf3Parser.RULE_mapField = 12;
Protobuf3Parser.RULE_keyType = 13;
Protobuf3Parser.RULE_type_ = 14;
Protobuf3Parser.RULE_reserved = 15;
Protobuf3Parser.RULE_ranges = 16;
Protobuf3Parser.RULE_range_ = 17;
Protobuf3Parser.RULE_reservedFieldNames = 18;
Protobuf3Parser.RULE_topLevelDef = 19;
Protobuf3Parser.RULE_enumDef = 20;
Protobuf3Parser.RULE_enumBody = 21;
Protobuf3Parser.RULE_enumElement = 22;
Protobuf3Parser.RULE_enumField = 23;
Protobuf3Parser.RULE_enumValueOptions = 24;
Protobuf3Parser.RULE_enumValueOption = 25;
Protobuf3Parser.RULE_messageDef = 26;
Protobuf3Parser.RULE_messageBody = 27;
Protobuf3Parser.RULE_messageElement = 28;
Protobuf3Parser.RULE_serviceDef = 29;
Protobuf3Parser.RULE_serviceElement = 30;
Protobuf3Parser.RULE_rpc = 31;
Protobuf3Parser.RULE_constant = 32;
Protobuf3Parser.RULE_blockLit = 33;
Protobuf3Parser.RULE_emptyStatement = 34;
Protobuf3Parser.RULE_ident = 35;
Protobuf3Parser.RULE_fullIdent = 36;
Protobuf3Parser.RULE_messageName = 37;
Protobuf3Parser.RULE_enumName = 38;
Protobuf3Parser.RULE_fieldName = 39;
Protobuf3Parser.RULE_oneofName = 40;
Protobuf3Parser.RULE_mapName = 41;
Protobuf3Parser.RULE_serviceName = 42;
Protobuf3Parser.RULE_rpcName = 43;
Protobuf3Parser.RULE_messageType = 44;
Protobuf3Parser.RULE_enumType = 45;
Protobuf3Parser.RULE_intLit = 46;
Protobuf3Parser.RULE_strLit = 47;
Protobuf3Parser.RULE_boolLit = 48;
Protobuf3Parser.RULE_floatLit = 49;
Protobuf3Parser.RULE_keywords = 50;

function ProtoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_proto;
    return this;
}

ProtoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProtoContext.prototype.constructor = ProtoContext;

ProtoContext.prototype.syntax = function() {
    return this.getTypedRuleContext(SyntaxContext,0);
};

ProtoContext.prototype.importStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ImportStatementContext);
    } else {
        return this.getTypedRuleContext(ImportStatementContext,i);
    }
};

ProtoContext.prototype.packageStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PackageStatementContext);
    } else {
        return this.getTypedRuleContext(PackageStatementContext,i);
    }
};

ProtoContext.prototype.optionStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptionStatementContext);
    } else {
        return this.getTypedRuleContext(OptionStatementContext,i);
    }
};

ProtoContext.prototype.topLevelDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TopLevelDefContext);
    } else {
        return this.getTypedRuleContext(TopLevelDefContext,i);
    }
};

ProtoContext.prototype.emptyStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EmptyStatementContext);
    } else {
        return this.getTypedRuleContext(EmptyStatementContext,i);
    }
};

ProtoContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterProto(this);
	}
};

ProtoContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitProto(this);
	}
};

ProtoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitProto(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.ProtoContext = ProtoContext;

Protobuf3Parser.prototype.proto = function() {

    var localctx = new ProtoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, Protobuf3Parser.RULE_proto);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.syntax();
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE))) !== 0) || _la===Protobuf3Parser.SEMI) {
            this.state = 108;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case Protobuf3Parser.IMPORT:
                this.state = 103;
                this.importStatement();
                break;
            case Protobuf3Parser.PACKAGE:
                this.state = 104;
                this.packageStatement();
                break;
            case Protobuf3Parser.OPTION:
                this.state = 105;
                this.optionStatement();
                break;
            case Protobuf3Parser.ENUM:
            case Protobuf3Parser.MESSAGE:
            case Protobuf3Parser.SERVICE:
                this.state = 106;
                this.topLevelDef();
                break;
            case Protobuf3Parser.SEMI:
                this.state = 107;
                this.emptyStatement();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SyntaxContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_syntax;
    return this;
}

SyntaxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SyntaxContext.prototype.constructor = SyntaxContext;

SyntaxContext.prototype.SYNTAX = function() {
    return this.getToken(Protobuf3Parser.SYNTAX, 0);
};

SyntaxContext.prototype.EQ = function() {
    return this.getToken(Protobuf3Parser.EQ, 0);
};

SyntaxContext.prototype.SEMI = function() {
    return this.getToken(Protobuf3Parser.SEMI, 0);
};

SyntaxContext.prototype.PROTO3_LIT_SINGLE = function() {
    return this.getToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0);
};

SyntaxContext.prototype.PROTO3_LIT_DOBULE = function() {
    return this.getToken(Protobuf3Parser.PROTO3_LIT_DOBULE, 0);
};

SyntaxContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterSyntax(this);
	}
};

SyntaxContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitSyntax(this);
	}
};

SyntaxContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitSyntax(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.SyntaxContext = SyntaxContext;

Protobuf3Parser.prototype.syntax = function() {

    var localctx = new SyntaxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, Protobuf3Parser.RULE_syntax);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(Protobuf3Parser.SYNTAX);
        this.state = 114;
        this.match(Protobuf3Parser.EQ);
        this.state = 115;
        _la = this._input.LA(1);
        if(!(_la===Protobuf3Parser.PROTO3_LIT_SINGLE || _la===Protobuf3Parser.PROTO3_LIT_DOBULE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 116;
        this.match(Protobuf3Parser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImportStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_importStatement;
    return this;
}

ImportStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportStatementContext.prototype.constructor = ImportStatementContext;

ImportStatementContext.prototype.IMPORT = function() {
    return this.getToken(Protobuf3Parser.IMPORT, 0);
};

ImportStatementContext.prototype.strLit = function() {
    return this.getTypedRuleContext(StrLitContext,0);
};

ImportStatementContext.prototype.SEMI = function() {
    return this.getToken(Protobuf3Parser.SEMI, 0);
};

ImportStatementContext.prototype.WEAK = function() {
    return this.getToken(Protobuf3Parser.WEAK, 0);
};

ImportStatementContext.prototype.PUBLIC = function() {
    return this.getToken(Protobuf3Parser.PUBLIC, 0);
};

ImportStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterImportStatement(this);
	}
};

ImportStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitImportStatement(this);
	}
};

ImportStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitImportStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.ImportStatementContext = ImportStatementContext;

Protobuf3Parser.prototype.importStatement = function() {

    var localctx = new ImportStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, Protobuf3Parser.RULE_importStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(Protobuf3Parser.IMPORT);
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Protobuf3Parser.WEAK || _la===Protobuf3Parser.PUBLIC) {
            this.state = 119;
            _la = this._input.LA(1);
            if(!(_la===Protobuf3Parser.WEAK || _la===Protobuf3Parser.PUBLIC)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 122;
        this.strLit();
        this.state = 123;
        this.match(Protobuf3Parser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PackageStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_packageStatement;
    return this;
}

PackageStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PackageStatementContext.prototype.constructor = PackageStatementContext;

PackageStatementContext.prototype.PACKAGE = function() {
    return this.getToken(Protobuf3Parser.PACKAGE, 0);
};

PackageStatementContext.prototype.fullIdent = function() {
    return this.getTypedRuleContext(FullIdentContext,0);
};

PackageStatementContext.prototype.SEMI = function() {
    return this.getToken(Protobuf3Parser.SEMI, 0);
};

PackageStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterPackageStatement(this);
	}
};

PackageStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitPackageStatement(this);
	}
};

PackageStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitPackageStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.PackageStatementContext = PackageStatementContext;

Protobuf3Parser.prototype.packageStatement = function() {

    var localctx = new PackageStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, Protobuf3Parser.RULE_packageStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(Protobuf3Parser.PACKAGE);
        this.state = 126;
        this.fullIdent();
        this.state = 127;
        this.match(Protobuf3Parser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OptionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_optionStatement;
    return this;
}

OptionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionStatementContext.prototype.constructor = OptionStatementContext;

OptionStatementContext.prototype.OPTION = function() {
    return this.getToken(Protobuf3Parser.OPTION, 0);
};

OptionStatementContext.prototype.optionName = function() {
    return this.getTypedRuleContext(OptionNameContext,0);
};

OptionStatementContext.prototype.EQ = function() {
    return this.getToken(Protobuf3Parser.EQ, 0);
};

OptionStatementContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

OptionStatementContext.prototype.SEMI = function() {
    return this.getToken(Protobuf3Parser.SEMI, 0);
};

OptionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterOptionStatement(this);
	}
};

OptionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitOptionStatement(this);
	}
};

OptionStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitOptionStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.OptionStatementContext = OptionStatementContext;

Protobuf3Parser.prototype.optionStatement = function() {

    var localctx = new OptionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, Protobuf3Parser.RULE_optionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(Protobuf3Parser.OPTION);
        this.state = 130;
        this.optionName();
        this.state = 131;
        this.match(Protobuf3Parser.EQ);
        this.state = 132;
        this.constant();
        this.state = 133;
        this.match(Protobuf3Parser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OptionNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_optionName;
    return this;
}

OptionNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionNameContext.prototype.constructor = OptionNameContext;

OptionNameContext.prototype.fullIdent = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FullIdentContext);
    } else {
        return this.getTypedRuleContext(FullIdentContext,i);
    }
};

OptionNameContext.prototype.LP = function() {
    return this.getToken(Protobuf3Parser.LP, 0);
};

OptionNameContext.prototype.RP = function() {
    return this.getToken(Protobuf3Parser.RP, 0);
};

OptionNameContext.prototype.DOT = function() {
    return this.getToken(Protobuf3Parser.DOT, 0);
};

OptionNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterOptionName(this);
	}
};

OptionNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitOptionName(this);
	}
};

OptionNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitOptionName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.OptionNameContext = OptionNameContext;

Protobuf3Parser.prototype.optionName = function() {

    var localctx = new OptionNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, Protobuf3Parser.RULE_optionName);
    var _la = 0; // Token type
    try {
        this.state = 143;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Protobuf3Parser.SYNTAX:
        case Protobuf3Parser.IMPORT:
        case Protobuf3Parser.WEAK:
        case Protobuf3Parser.PUBLIC:
        case Protobuf3Parser.PACKAGE:
        case Protobuf3Parser.OPTION:
        case Protobuf3Parser.REPEATED:
        case Protobuf3Parser.ONEOF:
        case Protobuf3Parser.MAP:
        case Protobuf3Parser.INT32:
        case Protobuf3Parser.INT64:
        case Protobuf3Parser.UINT32:
        case Protobuf3Parser.UINT64:
        case Protobuf3Parser.SINT32:
        case Protobuf3Parser.SINT64:
        case Protobuf3Parser.FIXED32:
        case Protobuf3Parser.FIXED64:
        case Protobuf3Parser.SFIXED32:
        case Protobuf3Parser.SFIXED64:
        case Protobuf3Parser.BOOL:
        case Protobuf3Parser.STRING:
        case Protobuf3Parser.DOUBLE:
        case Protobuf3Parser.FLOAT:
        case Protobuf3Parser.BYTES:
        case Protobuf3Parser.RESERVED:
        case Protobuf3Parser.TO:
        case Protobuf3Parser.MAX:
        case Protobuf3Parser.ENUM:
        case Protobuf3Parser.MESSAGE:
        case Protobuf3Parser.SERVICE:
        case Protobuf3Parser.RPC:
        case Protobuf3Parser.STREAM:
        case Protobuf3Parser.RETURNS:
        case Protobuf3Parser.BOOL_LIT:
        case Protobuf3Parser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 135;
            this.fullIdent();
            break;
        case Protobuf3Parser.LP:
            this.enterOuterAlt(localctx, 2);
            this.state = 136;
            this.match(Protobuf3Parser.LP);
            this.state = 137;
            this.fullIdent();
            this.state = 138;
            this.match(Protobuf3Parser.RP);
            this.state = 141;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===Protobuf3Parser.DOT) {
                this.state = 139;
                this.match(Protobuf3Parser.DOT);
                this.state = 140;
                this.fullIdent();
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.type_ = function() {
    return this.getTypedRuleContext(Type_Context,0);
};

FieldContext.prototype.fieldName = function() {
    return this.getTypedRuleContext(FieldNameContext,0);
};

FieldContext.prototype.EQ = function() {
    return this.getToken(Protobuf3Parser.EQ, 0);
};

FieldContext.prototype.fieldNumber = function() {
    return this.getTypedRuleContext(FieldNumberContext,0);
};

FieldContext.prototype.SEMI = function() {
    return this.getToken(Protobuf3Parser.SEMI, 0);
};

FieldContext.prototype.REPEATED = function() {
    return this.getToken(Protobuf3Parser.REPEATED, 0);
};

FieldContext.prototype.LB = function() {
    return this.getToken(Protobuf3Parser.LB, 0);
};

FieldContext.prototype.fieldOptions = function() {
    return this.getTypedRuleContext(FieldOptionsContext,0);
};

FieldContext.prototype.RB = function() {
    return this.getToken(Protobuf3Parser.RB, 0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitField(this);
	}
};

FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.FieldContext = FieldContext;

Protobuf3Parser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, Protobuf3Parser.RULE_field);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        if(la_===1) {
            this.state = 145;
            this.match(Protobuf3Parser.REPEATED);

        }
        this.state = 148;
        this.type_();
        this.state = 149;
        this.fieldName();
        this.state = 150;
        this.match(Protobuf3Parser.EQ);
        this.state = 151;
        this.fieldNumber();
        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Protobuf3Parser.LB) {
            this.state = 152;
            this.match(Protobuf3Parser.LB);
            this.state = 153;
            this.fieldOptions();
            this.state = 154;
            this.match(Protobuf3Parser.RB);
        }

        this.state = 158;
        this.match(Protobuf3Parser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldOptionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_fieldOptions;
    return this;
}

FieldOptionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldOptionsContext.prototype.constructor = FieldOptionsContext;

FieldOptionsContext.prototype.fieldOption = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldOptionContext);
    } else {
        return this.getTypedRuleContext(FieldOptionContext,i);
    }
};

FieldOptionsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Protobuf3Parser.COMMA);
    } else {
        return this.getToken(Protobuf3Parser.COMMA, i);
    }
};


FieldOptionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterFieldOptions(this);
	}
};

FieldOptionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitFieldOptions(this);
	}
};

FieldOptionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitFieldOptions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.FieldOptionsContext = FieldOptionsContext;

Protobuf3Parser.prototype.fieldOptions = function() {

    var localctx = new FieldOptionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, Protobuf3Parser.RULE_fieldOptions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.fieldOption();
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Protobuf3Parser.COMMA) {
            this.state = 161;
            this.match(Protobuf3Parser.COMMA);
            this.state = 162;
            this.fieldOption();
            this.state = 167;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_fieldOption;
    return this;
}

FieldOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldOptionContext.prototype.constructor = FieldOptionContext;

FieldOptionContext.prototype.optionName = function() {
    return this.getTypedRuleContext(OptionNameContext,0);
};

FieldOptionContext.prototype.EQ = function() {
    return this.getToken(Protobuf3Parser.EQ, 0);
};

FieldOptionContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

FieldOptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterFieldOption(this);
	}
};

FieldOptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitFieldOption(this);
	}
};

FieldOptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitFieldOption(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.FieldOptionContext = FieldOptionContext;

Protobuf3Parser.prototype.fieldOption = function() {

    var localctx = new FieldOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, Protobuf3Parser.RULE_fieldOption);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.optionName();
        this.state = 169;
        this.match(Protobuf3Parser.EQ);
        this.state = 170;
        this.constant();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldNumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_fieldNumber;
    return this;
}

FieldNumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldNumberContext.prototype.constructor = FieldNumberContext;

FieldNumberContext.prototype.intLit = function() {
    return this.getTypedRuleContext(IntLitContext,0);
};

FieldNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterFieldNumber(this);
	}
};

FieldNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitFieldNumber(this);
	}
};

FieldNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitFieldNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.FieldNumberContext = FieldNumberContext;

Protobuf3Parser.prototype.fieldNumber = function() {

    var localctx = new FieldNumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, Protobuf3Parser.RULE_fieldNumber);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.intLit();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OneofContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_oneof;
    return this;
}

OneofContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OneofContext.prototype.constructor = OneofContext;

OneofContext.prototype.ONEOF = function() {
    return this.getToken(Protobuf3Parser.ONEOF, 0);
};

OneofContext.prototype.oneofName = function() {
    return this.getTypedRuleContext(OneofNameContext,0);
};

OneofContext.prototype.LC = function() {
    return this.getToken(Protobuf3Parser.LC, 0);
};

OneofContext.prototype.RC = function() {
    return this.getToken(Protobuf3Parser.RC, 0);
};

OneofContext.prototype.optionStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptionStatementContext);
    } else {
        return this.getTypedRuleContext(OptionStatementContext,i);
    }
};

OneofContext.prototype.oneofField = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OneofFieldContext);
    } else {
        return this.getTypedRuleContext(OneofFieldContext,i);
    }
};

OneofContext.prototype.emptyStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EmptyStatementContext);
    } else {
        return this.getTypedRuleContext(EmptyStatementContext,i);
    }
};

OneofContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterOneof(this);
	}
};

OneofContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitOneof(this);
	}
};

OneofContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitOneof(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.OneofContext = OneofContext;

Protobuf3Parser.prototype.oneof = function() {

    var localctx = new OneofContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, Protobuf3Parser.RULE_oneof);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(Protobuf3Parser.ONEOF);
        this.state = 175;
        this.oneofName();
        this.state = 176;
        this.match(Protobuf3Parser.LC);
        this.state = 182;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.SEMI - 32)) | (1 << (Protobuf3Parser.DOT - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
            this.state = 180;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            switch(la_) {
            case 1:
                this.state = 177;
                this.optionStatement();
                break;

            case 2:
                this.state = 178;
                this.oneofField();
                break;

            case 3:
                this.state = 179;
                this.emptyStatement();
                break;

            }
            this.state = 184;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 185;
        this.match(Protobuf3Parser.RC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OneofFieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_oneofField;
    return this;
}

OneofFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OneofFieldContext.prototype.constructor = OneofFieldContext;

OneofFieldContext.prototype.type_ = function() {
    return this.getTypedRuleContext(Type_Context,0);
};

OneofFieldContext.prototype.fieldName = function() {
    return this.getTypedRuleContext(FieldNameContext,0);
};

OneofFieldContext.prototype.EQ = function() {
    return this.getToken(Protobuf3Parser.EQ, 0);
};

OneofFieldContext.prototype.fieldNumber = function() {
    return this.getTypedRuleContext(FieldNumberContext,0);
};

OneofFieldContext.prototype.SEMI = function() {
    return this.getToken(Protobuf3Parser.SEMI, 0);
};

OneofFieldContext.prototype.LB = function() {
    return this.getToken(Protobuf3Parser.LB, 0);
};

OneofFieldContext.prototype.fieldOptions = function() {
    return this.getTypedRuleContext(FieldOptionsContext,0);
};

OneofFieldContext.prototype.RB = function() {
    return this.getToken(Protobuf3Parser.RB, 0);
};

OneofFieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterOneofField(this);
	}
};

OneofFieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitOneofField(this);
	}
};

OneofFieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitOneofField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.OneofFieldContext = OneofFieldContext;

Protobuf3Parser.prototype.oneofField = function() {

    var localctx = new OneofFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, Protobuf3Parser.RULE_oneofField);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.type_();
        this.state = 188;
        this.fieldName();
        this.state = 189;
        this.match(Protobuf3Parser.EQ);
        this.state = 190;
        this.fieldNumber();
        this.state = 195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Protobuf3Parser.LB) {
            this.state = 191;
            this.match(Protobuf3Parser.LB);
            this.state = 192;
            this.fieldOptions();
            this.state = 193;
            this.match(Protobuf3Parser.RB);
        }

        this.state = 197;
        this.match(Protobuf3Parser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MapFieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_mapField;
    return this;
}

MapFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapFieldContext.prototype.constructor = MapFieldContext;

MapFieldContext.prototype.MAP = function() {
    return this.getToken(Protobuf3Parser.MAP, 0);
};

MapFieldContext.prototype.LT = function() {
    return this.getToken(Protobuf3Parser.LT, 0);
};

MapFieldContext.prototype.keyType = function() {
    return this.getTypedRuleContext(KeyTypeContext,0);
};

MapFieldContext.prototype.COMMA = function() {
    return this.getToken(Protobuf3Parser.COMMA, 0);
};

MapFieldContext.prototype.type_ = function() {
    return this.getTypedRuleContext(Type_Context,0);
};

MapFieldContext.prototype.GT = function() {
    return this.getToken(Protobuf3Parser.GT, 0);
};

MapFieldContext.prototype.mapName = function() {
    return this.getTypedRuleContext(MapNameContext,0);
};

MapFieldContext.prototype.EQ = function() {
    return this.getToken(Protobuf3Parser.EQ, 0);
};

MapFieldContext.prototype.fieldNumber = function() {
    return this.getTypedRuleContext(FieldNumberContext,0);
};

MapFieldContext.prototype.SEMI = function() {
    return this.getToken(Protobuf3Parser.SEMI, 0);
};

MapFieldContext.prototype.LB = function() {
    return this.getToken(Protobuf3Parser.LB, 0);
};

MapFieldContext.prototype.fieldOptions = function() {
    return this.getTypedRuleContext(FieldOptionsContext,0);
};

MapFieldContext.prototype.RB = function() {
    return this.getToken(Protobuf3Parser.RB, 0);
};

MapFieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterMapField(this);
	}
};

MapFieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitMapField(this);
	}
};

MapFieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitMapField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.MapFieldContext = MapFieldContext;

Protobuf3Parser.prototype.mapField = function() {

    var localctx = new MapFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, Protobuf3Parser.RULE_mapField);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(Protobuf3Parser.MAP);
        this.state = 200;
        this.match(Protobuf3Parser.LT);
        this.state = 201;
        this.keyType();
        this.state = 202;
        this.match(Protobuf3Parser.COMMA);
        this.state = 203;
        this.type_();
        this.state = 204;
        this.match(Protobuf3Parser.GT);
        this.state = 205;
        this.mapName();
        this.state = 206;
        this.match(Protobuf3Parser.EQ);
        this.state = 207;
        this.fieldNumber();
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Protobuf3Parser.LB) {
            this.state = 208;
            this.match(Protobuf3Parser.LB);
            this.state = 209;
            this.fieldOptions();
            this.state = 210;
            this.match(Protobuf3Parser.RB);
        }

        this.state = 214;
        this.match(Protobuf3Parser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KeyTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_keyType;
    return this;
}

KeyTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyTypeContext.prototype.constructor = KeyTypeContext;

KeyTypeContext.prototype.INT32 = function() {
    return this.getToken(Protobuf3Parser.INT32, 0);
};

KeyTypeContext.prototype.INT64 = function() {
    return this.getToken(Protobuf3Parser.INT64, 0);
};

KeyTypeContext.prototype.UINT32 = function() {
    return this.getToken(Protobuf3Parser.UINT32, 0);
};

KeyTypeContext.prototype.UINT64 = function() {
    return this.getToken(Protobuf3Parser.UINT64, 0);
};

KeyTypeContext.prototype.SINT32 = function() {
    return this.getToken(Protobuf3Parser.SINT32, 0);
};

KeyTypeContext.prototype.SINT64 = function() {
    return this.getToken(Protobuf3Parser.SINT64, 0);
};

KeyTypeContext.prototype.FIXED32 = function() {
    return this.getToken(Protobuf3Parser.FIXED32, 0);
};

KeyTypeContext.prototype.FIXED64 = function() {
    return this.getToken(Protobuf3Parser.FIXED64, 0);
};

KeyTypeContext.prototype.SFIXED32 = function() {
    return this.getToken(Protobuf3Parser.SFIXED32, 0);
};

KeyTypeContext.prototype.SFIXED64 = function() {
    return this.getToken(Protobuf3Parser.SFIXED64, 0);
};

KeyTypeContext.prototype.BOOL = function() {
    return this.getToken(Protobuf3Parser.BOOL, 0);
};

KeyTypeContext.prototype.STRING = function() {
    return this.getToken(Protobuf3Parser.STRING, 0);
};

KeyTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterKeyType(this);
	}
};

KeyTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitKeyType(this);
	}
};

KeyTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitKeyType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.KeyTypeContext = KeyTypeContext;

Protobuf3Parser.prototype.keyType = function() {

    var localctx = new KeyTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, Protobuf3Parser.RULE_keyType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_type_;
    return this;
}

Type_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_Context.prototype.constructor = Type_Context;

Type_Context.prototype.DOUBLE = function() {
    return this.getToken(Protobuf3Parser.DOUBLE, 0);
};

Type_Context.prototype.FLOAT = function() {
    return this.getToken(Protobuf3Parser.FLOAT, 0);
};

Type_Context.prototype.INT32 = function() {
    return this.getToken(Protobuf3Parser.INT32, 0);
};

Type_Context.prototype.INT64 = function() {
    return this.getToken(Protobuf3Parser.INT64, 0);
};

Type_Context.prototype.UINT32 = function() {
    return this.getToken(Protobuf3Parser.UINT32, 0);
};

Type_Context.prototype.UINT64 = function() {
    return this.getToken(Protobuf3Parser.UINT64, 0);
};

Type_Context.prototype.SINT32 = function() {
    return this.getToken(Protobuf3Parser.SINT32, 0);
};

Type_Context.prototype.SINT64 = function() {
    return this.getToken(Protobuf3Parser.SINT64, 0);
};

Type_Context.prototype.FIXED32 = function() {
    return this.getToken(Protobuf3Parser.FIXED32, 0);
};

Type_Context.prototype.FIXED64 = function() {
    return this.getToken(Protobuf3Parser.FIXED64, 0);
};

Type_Context.prototype.SFIXED32 = function() {
    return this.getToken(Protobuf3Parser.SFIXED32, 0);
};

Type_Context.prototype.SFIXED64 = function() {
    return this.getToken(Protobuf3Parser.SFIXED64, 0);
};

Type_Context.prototype.BOOL = function() {
    return this.getToken(Protobuf3Parser.BOOL, 0);
};

Type_Context.prototype.STRING = function() {
    return this.getToken(Protobuf3Parser.STRING, 0);
};

Type_Context.prototype.BYTES = function() {
    return this.getToken(Protobuf3Parser.BYTES, 0);
};

Type_Context.prototype.messageType = function() {
    return this.getTypedRuleContext(MessageTypeContext,0);
};

Type_Context.prototype.enumType = function() {
    return this.getTypedRuleContext(EnumTypeContext,0);
};

Type_Context.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterType_(this);
	}
};

Type_Context.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitType_(this);
	}
};

Type_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitType_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.Type_Context = Type_Context;

Protobuf3Parser.prototype.type_ = function() {

    var localctx = new Type_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 28, Protobuf3Parser.RULE_type_);
    try {
        this.state = 235;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 218;
            this.match(Protobuf3Parser.DOUBLE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 219;
            this.match(Protobuf3Parser.FLOAT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 220;
            this.match(Protobuf3Parser.INT32);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 221;
            this.match(Protobuf3Parser.INT64);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 222;
            this.match(Protobuf3Parser.UINT32);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 223;
            this.match(Protobuf3Parser.UINT64);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 224;
            this.match(Protobuf3Parser.SINT32);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 225;
            this.match(Protobuf3Parser.SINT64);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 226;
            this.match(Protobuf3Parser.FIXED32);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 227;
            this.match(Protobuf3Parser.FIXED64);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 228;
            this.match(Protobuf3Parser.SFIXED32);
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 229;
            this.match(Protobuf3Parser.SFIXED64);
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 230;
            this.match(Protobuf3Parser.BOOL);
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 231;
            this.match(Protobuf3Parser.STRING);
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 232;
            this.match(Protobuf3Parser.BYTES);
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 233;
            this.messageType();
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 234;
            this.enumType();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReservedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_reserved;
    return this;
}

ReservedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReservedContext.prototype.constructor = ReservedContext;

ReservedContext.prototype.RESERVED = function() {
    return this.getToken(Protobuf3Parser.RESERVED, 0);
};

ReservedContext.prototype.SEMI = function() {
    return this.getToken(Protobuf3Parser.SEMI, 0);
};

ReservedContext.prototype.ranges = function() {
    return this.getTypedRuleContext(RangesContext,0);
};

ReservedContext.prototype.reservedFieldNames = function() {
    return this.getTypedRuleContext(ReservedFieldNamesContext,0);
};

ReservedContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterReserved(this);
	}
};

ReservedContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitReserved(this);
	}
};

ReservedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitReserved(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.ReservedContext = ReservedContext;

Protobuf3Parser.prototype.reserved = function() {

    var localctx = new ReservedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, Protobuf3Parser.RULE_reserved);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.match(Protobuf3Parser.RESERVED);
        this.state = 240;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Protobuf3Parser.INT_LIT:
            this.state = 238;
            this.ranges();
            break;
        case Protobuf3Parser.PROTO3_LIT_SINGLE:
        case Protobuf3Parser.PROTO3_LIT_DOBULE:
        case Protobuf3Parser.STR_LIT:
            this.state = 239;
            this.reservedFieldNames();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 242;
        this.match(Protobuf3Parser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RangesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_ranges;
    return this;
}

RangesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangesContext.prototype.constructor = RangesContext;

RangesContext.prototype.range_ = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Range_Context);
    } else {
        return this.getTypedRuleContext(Range_Context,i);
    }
};

RangesContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Protobuf3Parser.COMMA);
    } else {
        return this.getToken(Protobuf3Parser.COMMA, i);
    }
};


RangesContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterRanges(this);
	}
};

RangesContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitRanges(this);
	}
};

RangesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitRanges(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.RangesContext = RangesContext;

Protobuf3Parser.prototype.ranges = function() {

    var localctx = new RangesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, Protobuf3Parser.RULE_ranges);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this.range_();
        this.state = 249;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Protobuf3Parser.COMMA) {
            this.state = 245;
            this.match(Protobuf3Parser.COMMA);
            this.state = 246;
            this.range_();
            this.state = 251;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Range_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_range_;
    return this;
}

Range_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Range_Context.prototype.constructor = Range_Context;

Range_Context.prototype.intLit = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IntLitContext);
    } else {
        return this.getTypedRuleContext(IntLitContext,i);
    }
};

Range_Context.prototype.TO = function() {
    return this.getToken(Protobuf3Parser.TO, 0);
};

Range_Context.prototype.MAX = function() {
    return this.getToken(Protobuf3Parser.MAX, 0);
};

Range_Context.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterRange_(this);
	}
};

Range_Context.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitRange_(this);
	}
};

Range_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitRange_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.Range_Context = Range_Context;

Protobuf3Parser.prototype.range_ = function() {

    var localctx = new Range_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 34, Protobuf3Parser.RULE_range_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this.intLit();
        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Protobuf3Parser.TO) {
            this.state = 253;
            this.match(Protobuf3Parser.TO);
            this.state = 256;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case Protobuf3Parser.INT_LIT:
                this.state = 254;
                this.intLit();
                break;
            case Protobuf3Parser.MAX:
                this.state = 255;
                this.match(Protobuf3Parser.MAX);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReservedFieldNamesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_reservedFieldNames;
    return this;
}

ReservedFieldNamesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReservedFieldNamesContext.prototype.constructor = ReservedFieldNamesContext;

ReservedFieldNamesContext.prototype.strLit = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StrLitContext);
    } else {
        return this.getTypedRuleContext(StrLitContext,i);
    }
};

ReservedFieldNamesContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Protobuf3Parser.COMMA);
    } else {
        return this.getToken(Protobuf3Parser.COMMA, i);
    }
};


ReservedFieldNamesContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterReservedFieldNames(this);
	}
};

ReservedFieldNamesContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitReservedFieldNames(this);
	}
};

ReservedFieldNamesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitReservedFieldNames(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.ReservedFieldNamesContext = ReservedFieldNamesContext;

Protobuf3Parser.prototype.reservedFieldNames = function() {

    var localctx = new ReservedFieldNamesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, Protobuf3Parser.RULE_reservedFieldNames);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        this.strLit();
        this.state = 265;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Protobuf3Parser.COMMA) {
            this.state = 261;
            this.match(Protobuf3Parser.COMMA);
            this.state = 262;
            this.strLit();
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TopLevelDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_topLevelDef;
    return this;
}

TopLevelDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TopLevelDefContext.prototype.constructor = TopLevelDefContext;

TopLevelDefContext.prototype.messageDef = function() {
    return this.getTypedRuleContext(MessageDefContext,0);
};

TopLevelDefContext.prototype.enumDef = function() {
    return this.getTypedRuleContext(EnumDefContext,0);
};

TopLevelDefContext.prototype.serviceDef = function() {
    return this.getTypedRuleContext(ServiceDefContext,0);
};

TopLevelDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterTopLevelDef(this);
	}
};

TopLevelDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitTopLevelDef(this);
	}
};

TopLevelDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitTopLevelDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.TopLevelDefContext = TopLevelDefContext;

Protobuf3Parser.prototype.topLevelDef = function() {

    var localctx = new TopLevelDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, Protobuf3Parser.RULE_topLevelDef);
    try {
        this.state = 271;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Protobuf3Parser.MESSAGE:
            this.enterOuterAlt(localctx, 1);
            this.state = 268;
            this.messageDef();
            break;
        case Protobuf3Parser.ENUM:
            this.enterOuterAlt(localctx, 2);
            this.state = 269;
            this.enumDef();
            break;
        case Protobuf3Parser.SERVICE:
            this.enterOuterAlt(localctx, 3);
            this.state = 270;
            this.serviceDef();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_enumDef;
    return this;
}

EnumDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumDefContext.prototype.constructor = EnumDefContext;

EnumDefContext.prototype.ENUM = function() {
    return this.getToken(Protobuf3Parser.ENUM, 0);
};

EnumDefContext.prototype.enumName = function() {
    return this.getTypedRuleContext(EnumNameContext,0);
};

EnumDefContext.prototype.enumBody = function() {
    return this.getTypedRuleContext(EnumBodyContext,0);
};

EnumDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterEnumDef(this);
	}
};

EnumDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitEnumDef(this);
	}
};

EnumDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitEnumDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.EnumDefContext = EnumDefContext;

Protobuf3Parser.prototype.enumDef = function() {

    var localctx = new EnumDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, Protobuf3Parser.RULE_enumDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(Protobuf3Parser.ENUM);
        this.state = 274;
        this.enumName();
        this.state = 275;
        this.enumBody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_enumBody;
    return this;
}

EnumBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumBodyContext.prototype.constructor = EnumBodyContext;

EnumBodyContext.prototype.LC = function() {
    return this.getToken(Protobuf3Parser.LC, 0);
};

EnumBodyContext.prototype.RC = function() {
    return this.getToken(Protobuf3Parser.RC, 0);
};

EnumBodyContext.prototype.enumElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EnumElementContext);
    } else {
        return this.getTypedRuleContext(EnumElementContext,i);
    }
};

EnumBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterEnumBody(this);
	}
};

EnumBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitEnumBody(this);
	}
};

EnumBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitEnumBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.EnumBodyContext = EnumBodyContext;

Protobuf3Parser.prototype.enumBody = function() {

    var localctx = new EnumBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, Protobuf3Parser.RULE_enumBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.match(Protobuf3Parser.LC);
        this.state = 281;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.SEMI - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
            this.state = 278;
            this.enumElement();
            this.state = 283;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 284;
        this.match(Protobuf3Parser.RC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_enumElement;
    return this;
}

EnumElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumElementContext.prototype.constructor = EnumElementContext;

EnumElementContext.prototype.optionStatement = function() {
    return this.getTypedRuleContext(OptionStatementContext,0);
};

EnumElementContext.prototype.enumField = function() {
    return this.getTypedRuleContext(EnumFieldContext,0);
};

EnumElementContext.prototype.emptyStatement = function() {
    return this.getTypedRuleContext(EmptyStatementContext,0);
};

EnumElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterEnumElement(this);
	}
};

EnumElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitEnumElement(this);
	}
};

EnumElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitEnumElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.EnumElementContext = EnumElementContext;

Protobuf3Parser.prototype.enumElement = function() {

    var localctx = new EnumElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, Protobuf3Parser.RULE_enumElement);
    try {
        this.state = 289;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 286;
            this.optionStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 287;
            this.enumField();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 288;
            this.emptyStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumFieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_enumField;
    return this;
}

EnumFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumFieldContext.prototype.constructor = EnumFieldContext;

EnumFieldContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

EnumFieldContext.prototype.EQ = function() {
    return this.getToken(Protobuf3Parser.EQ, 0);
};

EnumFieldContext.prototype.intLit = function() {
    return this.getTypedRuleContext(IntLitContext,0);
};

EnumFieldContext.prototype.SEMI = function() {
    return this.getToken(Protobuf3Parser.SEMI, 0);
};

EnumFieldContext.prototype.MINUS = function() {
    return this.getToken(Protobuf3Parser.MINUS, 0);
};

EnumFieldContext.prototype.enumValueOptions = function() {
    return this.getTypedRuleContext(EnumValueOptionsContext,0);
};

EnumFieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterEnumField(this);
	}
};

EnumFieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitEnumField(this);
	}
};

EnumFieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitEnumField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.EnumFieldContext = EnumFieldContext;

Protobuf3Parser.prototype.enumField = function() {

    var localctx = new EnumFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, Protobuf3Parser.RULE_enumField);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this.ident();
        this.state = 292;
        this.match(Protobuf3Parser.EQ);
        this.state = 294;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Protobuf3Parser.MINUS) {
            this.state = 293;
            this.match(Protobuf3Parser.MINUS);
        }

        this.state = 296;
        this.intLit();
        this.state = 298;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Protobuf3Parser.LB) {
            this.state = 297;
            this.enumValueOptions();
        }

        this.state = 300;
        this.match(Protobuf3Parser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumValueOptionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_enumValueOptions;
    return this;
}

EnumValueOptionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumValueOptionsContext.prototype.constructor = EnumValueOptionsContext;

EnumValueOptionsContext.prototype.LB = function() {
    return this.getToken(Protobuf3Parser.LB, 0);
};

EnumValueOptionsContext.prototype.enumValueOption = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EnumValueOptionContext);
    } else {
        return this.getTypedRuleContext(EnumValueOptionContext,i);
    }
};

EnumValueOptionsContext.prototype.RB = function() {
    return this.getToken(Protobuf3Parser.RB, 0);
};

EnumValueOptionsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Protobuf3Parser.COMMA);
    } else {
        return this.getToken(Protobuf3Parser.COMMA, i);
    }
};


EnumValueOptionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterEnumValueOptions(this);
	}
};

EnumValueOptionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitEnumValueOptions(this);
	}
};

EnumValueOptionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitEnumValueOptions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.EnumValueOptionsContext = EnumValueOptionsContext;

Protobuf3Parser.prototype.enumValueOptions = function() {

    var localctx = new EnumValueOptionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, Protobuf3Parser.RULE_enumValueOptions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        this.match(Protobuf3Parser.LB);
        this.state = 303;
        this.enumValueOption();
        this.state = 308;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Protobuf3Parser.COMMA) {
            this.state = 304;
            this.match(Protobuf3Parser.COMMA);
            this.state = 305;
            this.enumValueOption();
            this.state = 310;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 311;
        this.match(Protobuf3Parser.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumValueOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_enumValueOption;
    return this;
}

EnumValueOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumValueOptionContext.prototype.constructor = EnumValueOptionContext;

EnumValueOptionContext.prototype.optionName = function() {
    return this.getTypedRuleContext(OptionNameContext,0);
};

EnumValueOptionContext.prototype.EQ = function() {
    return this.getToken(Protobuf3Parser.EQ, 0);
};

EnumValueOptionContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

EnumValueOptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterEnumValueOption(this);
	}
};

EnumValueOptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitEnumValueOption(this);
	}
};

EnumValueOptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitEnumValueOption(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.EnumValueOptionContext = EnumValueOptionContext;

Protobuf3Parser.prototype.enumValueOption = function() {

    var localctx = new EnumValueOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, Protobuf3Parser.RULE_enumValueOption);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        this.optionName();
        this.state = 314;
        this.match(Protobuf3Parser.EQ);
        this.state = 315;
        this.constant();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MessageDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_messageDef;
    return this;
}

MessageDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageDefContext.prototype.constructor = MessageDefContext;

MessageDefContext.prototype.MESSAGE = function() {
    return this.getToken(Protobuf3Parser.MESSAGE, 0);
};

MessageDefContext.prototype.messageName = function() {
    return this.getTypedRuleContext(MessageNameContext,0);
};

MessageDefContext.prototype.messageBody = function() {
    return this.getTypedRuleContext(MessageBodyContext,0);
};

MessageDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterMessageDef(this);
	}
};

MessageDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitMessageDef(this);
	}
};

MessageDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitMessageDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.MessageDefContext = MessageDefContext;

Protobuf3Parser.prototype.messageDef = function() {

    var localctx = new MessageDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, Protobuf3Parser.RULE_messageDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this.match(Protobuf3Parser.MESSAGE);
        this.state = 318;
        this.messageName();
        this.state = 319;
        this.messageBody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MessageBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_messageBody;
    return this;
}

MessageBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageBodyContext.prototype.constructor = MessageBodyContext;

MessageBodyContext.prototype.LC = function() {
    return this.getToken(Protobuf3Parser.LC, 0);
};

MessageBodyContext.prototype.RC = function() {
    return this.getToken(Protobuf3Parser.RC, 0);
};

MessageBodyContext.prototype.messageElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MessageElementContext);
    } else {
        return this.getTypedRuleContext(MessageElementContext,i);
    }
};

MessageBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterMessageBody(this);
	}
};

MessageBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitMessageBody(this);
	}
};

MessageBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitMessageBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.MessageBodyContext = MessageBodyContext;

Protobuf3Parser.prototype.messageBody = function() {

    var localctx = new MessageBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, Protobuf3Parser.RULE_messageBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        this.match(Protobuf3Parser.LC);
        this.state = 325;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.SEMI - 32)) | (1 << (Protobuf3Parser.DOT - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
            this.state = 322;
            this.messageElement();
            this.state = 327;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 328;
        this.match(Protobuf3Parser.RC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MessageElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_messageElement;
    return this;
}

MessageElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageElementContext.prototype.constructor = MessageElementContext;

MessageElementContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

MessageElementContext.prototype.enumDef = function() {
    return this.getTypedRuleContext(EnumDefContext,0);
};

MessageElementContext.prototype.messageDef = function() {
    return this.getTypedRuleContext(MessageDefContext,0);
};

MessageElementContext.prototype.optionStatement = function() {
    return this.getTypedRuleContext(OptionStatementContext,0);
};

MessageElementContext.prototype.oneof = function() {
    return this.getTypedRuleContext(OneofContext,0);
};

MessageElementContext.prototype.mapField = function() {
    return this.getTypedRuleContext(MapFieldContext,0);
};

MessageElementContext.prototype.reserved = function() {
    return this.getTypedRuleContext(ReservedContext,0);
};

MessageElementContext.prototype.emptyStatement = function() {
    return this.getTypedRuleContext(EmptyStatementContext,0);
};

MessageElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterMessageElement(this);
	}
};

MessageElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitMessageElement(this);
	}
};

MessageElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitMessageElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.MessageElementContext = MessageElementContext;

Protobuf3Parser.prototype.messageElement = function() {

    var localctx = new MessageElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, Protobuf3Parser.RULE_messageElement);
    try {
        this.state = 338;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 330;
            this.field();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 331;
            this.enumDef();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 332;
            this.messageDef();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 333;
            this.optionStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 334;
            this.oneof();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 335;
            this.mapField();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 336;
            this.reserved();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 337;
            this.emptyStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ServiceDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_serviceDef;
    return this;
}

ServiceDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ServiceDefContext.prototype.constructor = ServiceDefContext;

ServiceDefContext.prototype.SERVICE = function() {
    return this.getToken(Protobuf3Parser.SERVICE, 0);
};

ServiceDefContext.prototype.serviceName = function() {
    return this.getTypedRuleContext(ServiceNameContext,0);
};

ServiceDefContext.prototype.LC = function() {
    return this.getToken(Protobuf3Parser.LC, 0);
};

ServiceDefContext.prototype.RC = function() {
    return this.getToken(Protobuf3Parser.RC, 0);
};

ServiceDefContext.prototype.serviceElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ServiceElementContext);
    } else {
        return this.getTypedRuleContext(ServiceElementContext,i);
    }
};

ServiceDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterServiceDef(this);
	}
};

ServiceDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitServiceDef(this);
	}
};

ServiceDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitServiceDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.ServiceDefContext = ServiceDefContext;

Protobuf3Parser.prototype.serviceDef = function() {

    var localctx = new ServiceDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, Protobuf3Parser.RULE_serviceDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        this.match(Protobuf3Parser.SERVICE);
        this.state = 341;
        this.serviceName();
        this.state = 342;
        this.match(Protobuf3Parser.LC);
        this.state = 346;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (Protobuf3Parser.OPTION - 6)) | (1 << (Protobuf3Parser.RPC - 6)) | (1 << (Protobuf3Parser.SEMI - 6)))) !== 0)) {
            this.state = 343;
            this.serviceElement();
            this.state = 348;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 349;
        this.match(Protobuf3Parser.RC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ServiceElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_serviceElement;
    return this;
}

ServiceElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ServiceElementContext.prototype.constructor = ServiceElementContext;

ServiceElementContext.prototype.optionStatement = function() {
    return this.getTypedRuleContext(OptionStatementContext,0);
};

ServiceElementContext.prototype.rpc = function() {
    return this.getTypedRuleContext(RpcContext,0);
};

ServiceElementContext.prototype.emptyStatement = function() {
    return this.getTypedRuleContext(EmptyStatementContext,0);
};

ServiceElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterServiceElement(this);
	}
};

ServiceElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitServiceElement(this);
	}
};

ServiceElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitServiceElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.ServiceElementContext = ServiceElementContext;

Protobuf3Parser.prototype.serviceElement = function() {

    var localctx = new ServiceElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, Protobuf3Parser.RULE_serviceElement);
    try {
        this.state = 354;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Protobuf3Parser.OPTION:
            this.enterOuterAlt(localctx, 1);
            this.state = 351;
            this.optionStatement();
            break;
        case Protobuf3Parser.RPC:
            this.enterOuterAlt(localctx, 2);
            this.state = 352;
            this.rpc();
            break;
        case Protobuf3Parser.SEMI:
            this.enterOuterAlt(localctx, 3);
            this.state = 353;
            this.emptyStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RpcContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_rpc;
    return this;
}

RpcContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RpcContext.prototype.constructor = RpcContext;

RpcContext.prototype.RPC = function() {
    return this.getToken(Protobuf3Parser.RPC, 0);
};

RpcContext.prototype.rpcName = function() {
    return this.getTypedRuleContext(RpcNameContext,0);
};

RpcContext.prototype.LP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Protobuf3Parser.LP);
    } else {
        return this.getToken(Protobuf3Parser.LP, i);
    }
};


RpcContext.prototype.messageType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MessageTypeContext);
    } else {
        return this.getTypedRuleContext(MessageTypeContext,i);
    }
};

RpcContext.prototype.RP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Protobuf3Parser.RP);
    } else {
        return this.getToken(Protobuf3Parser.RP, i);
    }
};


RpcContext.prototype.RETURNS = function() {
    return this.getToken(Protobuf3Parser.RETURNS, 0);
};

RpcContext.prototype.LC = function() {
    return this.getToken(Protobuf3Parser.LC, 0);
};

RpcContext.prototype.RC = function() {
    return this.getToken(Protobuf3Parser.RC, 0);
};

RpcContext.prototype.SEMI = function() {
    return this.getToken(Protobuf3Parser.SEMI, 0);
};

RpcContext.prototype.STREAM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Protobuf3Parser.STREAM);
    } else {
        return this.getToken(Protobuf3Parser.STREAM, i);
    }
};


RpcContext.prototype.optionStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptionStatementContext);
    } else {
        return this.getTypedRuleContext(OptionStatementContext,i);
    }
};

RpcContext.prototype.emptyStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EmptyStatementContext);
    } else {
        return this.getTypedRuleContext(EmptyStatementContext,i);
    }
};

RpcContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterRpc(this);
	}
};

RpcContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitRpc(this);
	}
};

RpcContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitRpc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.RpcContext = RpcContext;

Protobuf3Parser.prototype.rpc = function() {

    var localctx = new RpcContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, Protobuf3Parser.RULE_rpc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 356;
        this.match(Protobuf3Parser.RPC);
        this.state = 357;
        this.rpcName();
        this.state = 358;
        this.match(Protobuf3Parser.LP);
        this.state = 360;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        if(la_===1) {
            this.state = 359;
            this.match(Protobuf3Parser.STREAM);

        }
        this.state = 362;
        this.messageType();
        this.state = 363;
        this.match(Protobuf3Parser.RP);
        this.state = 364;
        this.match(Protobuf3Parser.RETURNS);
        this.state = 365;
        this.match(Protobuf3Parser.LP);
        this.state = 367;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        if(la_===1) {
            this.state = 366;
            this.match(Protobuf3Parser.STREAM);

        }
        this.state = 369;
        this.messageType();
        this.state = 370;
        this.match(Protobuf3Parser.RP);
        this.state = 381;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Protobuf3Parser.LC:
            this.state = 371;
            this.match(Protobuf3Parser.LC);
            this.state = 376;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===Protobuf3Parser.OPTION || _la===Protobuf3Parser.SEMI) {
                this.state = 374;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case Protobuf3Parser.OPTION:
                    this.state = 372;
                    this.optionStatement();
                    break;
                case Protobuf3Parser.SEMI:
                    this.state = 373;
                    this.emptyStatement();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 378;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 379;
            this.match(Protobuf3Parser.RC);
            break;
        case Protobuf3Parser.SEMI:
            this.state = 380;
            this.match(Protobuf3Parser.SEMI);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.fullIdent = function() {
    return this.getTypedRuleContext(FullIdentContext,0);
};

ConstantContext.prototype.intLit = function() {
    return this.getTypedRuleContext(IntLitContext,0);
};

ConstantContext.prototype.MINUS = function() {
    return this.getToken(Protobuf3Parser.MINUS, 0);
};

ConstantContext.prototype.PLUS = function() {
    return this.getToken(Protobuf3Parser.PLUS, 0);
};

ConstantContext.prototype.floatLit = function() {
    return this.getTypedRuleContext(FloatLitContext,0);
};

ConstantContext.prototype.strLit = function() {
    return this.getTypedRuleContext(StrLitContext,0);
};

ConstantContext.prototype.boolLit = function() {
    return this.getTypedRuleContext(BoolLitContext,0);
};

ConstantContext.prototype.blockLit = function() {
    return this.getTypedRuleContext(BlockLitContext,0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitConstant(this);
	}
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.ConstantContext = ConstantContext;

Protobuf3Parser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, Protobuf3Parser.RULE_constant);
    var _la = 0; // Token type
    try {
        this.state = 395;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 383;
            this.fullIdent();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 385;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===Protobuf3Parser.PLUS || _la===Protobuf3Parser.MINUS) {
                this.state = 384;
                _la = this._input.LA(1);
                if(!(_la===Protobuf3Parser.PLUS || _la===Protobuf3Parser.MINUS)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 387;
            this.intLit();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 389;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===Protobuf3Parser.PLUS || _la===Protobuf3Parser.MINUS) {
                this.state = 388;
                _la = this._input.LA(1);
                if(!(_la===Protobuf3Parser.PLUS || _la===Protobuf3Parser.MINUS)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 391;
            this.floatLit();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 392;
            this.strLit();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 393;
            this.boolLit();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 394;
            this.blockLit();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockLitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_blockLit;
    return this;
}

BlockLitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockLitContext.prototype.constructor = BlockLitContext;

BlockLitContext.prototype.LC = function() {
    return this.getToken(Protobuf3Parser.LC, 0);
};

BlockLitContext.prototype.RC = function() {
    return this.getToken(Protobuf3Parser.RC, 0);
};

BlockLitContext.prototype.ident = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentContext);
    } else {
        return this.getTypedRuleContext(IdentContext,i);
    }
};

BlockLitContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Protobuf3Parser.COLON);
    } else {
        return this.getToken(Protobuf3Parser.COLON, i);
    }
};


BlockLitContext.prototype.constant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantContext);
    } else {
        return this.getTypedRuleContext(ConstantContext,i);
    }
};

BlockLitContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterBlockLit(this);
	}
};

BlockLitContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitBlockLit(this);
	}
};

BlockLitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitBlockLit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.BlockLitContext = BlockLitContext;

Protobuf3Parser.prototype.blockLit = function() {

    var localctx = new BlockLitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, Protobuf3Parser.RULE_blockLit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 397;
        this.match(Protobuf3Parser.LC);
        this.state = 404;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
            this.state = 398;
            this.ident();
            this.state = 399;
            this.match(Protobuf3Parser.COLON);
            this.state = 400;
            this.constant();
            this.state = 406;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 407;
        this.match(Protobuf3Parser.RC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EmptyStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_emptyStatement;
    return this;
}

EmptyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;

EmptyStatementContext.prototype.SEMI = function() {
    return this.getToken(Protobuf3Parser.SEMI, 0);
};

EmptyStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitEmptyStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.EmptyStatementContext = EmptyStatementContext;

Protobuf3Parser.prototype.emptyStatement = function() {

    var localctx = new EmptyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, Protobuf3Parser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        this.match(Protobuf3Parser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_ident;
    return this;
}

IdentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentContext.prototype.constructor = IdentContext;

IdentContext.prototype.IDENTIFIER = function() {
    return this.getToken(Protobuf3Parser.IDENTIFIER, 0);
};

IdentContext.prototype.keywords = function() {
    return this.getTypedRuleContext(KeywordsContext,0);
};

IdentContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterIdent(this);
	}
};

IdentContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitIdent(this);
	}
};

IdentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitIdent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.IdentContext = IdentContext;

Protobuf3Parser.prototype.ident = function() {

    var localctx = new IdentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, Protobuf3Parser.RULE_ident);
    try {
        this.state = 413;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Protobuf3Parser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 411;
            this.match(Protobuf3Parser.IDENTIFIER);
            break;
        case Protobuf3Parser.SYNTAX:
        case Protobuf3Parser.IMPORT:
        case Protobuf3Parser.WEAK:
        case Protobuf3Parser.PUBLIC:
        case Protobuf3Parser.PACKAGE:
        case Protobuf3Parser.OPTION:
        case Protobuf3Parser.REPEATED:
        case Protobuf3Parser.ONEOF:
        case Protobuf3Parser.MAP:
        case Protobuf3Parser.INT32:
        case Protobuf3Parser.INT64:
        case Protobuf3Parser.UINT32:
        case Protobuf3Parser.UINT64:
        case Protobuf3Parser.SINT32:
        case Protobuf3Parser.SINT64:
        case Protobuf3Parser.FIXED32:
        case Protobuf3Parser.FIXED64:
        case Protobuf3Parser.SFIXED32:
        case Protobuf3Parser.SFIXED64:
        case Protobuf3Parser.BOOL:
        case Protobuf3Parser.STRING:
        case Protobuf3Parser.DOUBLE:
        case Protobuf3Parser.FLOAT:
        case Protobuf3Parser.BYTES:
        case Protobuf3Parser.RESERVED:
        case Protobuf3Parser.TO:
        case Protobuf3Parser.MAX:
        case Protobuf3Parser.ENUM:
        case Protobuf3Parser.MESSAGE:
        case Protobuf3Parser.SERVICE:
        case Protobuf3Parser.RPC:
        case Protobuf3Parser.STREAM:
        case Protobuf3Parser.RETURNS:
        case Protobuf3Parser.BOOL_LIT:
            this.enterOuterAlt(localctx, 2);
            this.state = 412;
            this.keywords();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FullIdentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_fullIdent;
    return this;
}

FullIdentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullIdentContext.prototype.constructor = FullIdentContext;

FullIdentContext.prototype.ident = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentContext);
    } else {
        return this.getTypedRuleContext(IdentContext,i);
    }
};

FullIdentContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Protobuf3Parser.DOT);
    } else {
        return this.getToken(Protobuf3Parser.DOT, i);
    }
};


FullIdentContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterFullIdent(this);
	}
};

FullIdentContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitFullIdent(this);
	}
};

FullIdentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitFullIdent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.FullIdentContext = FullIdentContext;

Protobuf3Parser.prototype.fullIdent = function() {

    var localctx = new FullIdentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, Protobuf3Parser.RULE_fullIdent);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this.ident();
        this.state = 420;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Protobuf3Parser.DOT) {
            this.state = 416;
            this.match(Protobuf3Parser.DOT);
            this.state = 417;
            this.ident();
            this.state = 422;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MessageNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_messageName;
    return this;
}

MessageNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageNameContext.prototype.constructor = MessageNameContext;

MessageNameContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

MessageNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterMessageName(this);
	}
};

MessageNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitMessageName(this);
	}
};

MessageNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitMessageName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.MessageNameContext = MessageNameContext;

Protobuf3Parser.prototype.messageName = function() {

    var localctx = new MessageNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, Protobuf3Parser.RULE_messageName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 423;
        this.ident();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_enumName;
    return this;
}

EnumNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumNameContext.prototype.constructor = EnumNameContext;

EnumNameContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

EnumNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterEnumName(this);
	}
};

EnumNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitEnumName(this);
	}
};

EnumNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitEnumName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.EnumNameContext = EnumNameContext;

Protobuf3Parser.prototype.enumName = function() {

    var localctx = new EnumNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, Protobuf3Parser.RULE_enumName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 425;
        this.ident();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_fieldName;
    return this;
}

FieldNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldNameContext.prototype.constructor = FieldNameContext;

FieldNameContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

FieldNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterFieldName(this);
	}
};

FieldNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitFieldName(this);
	}
};

FieldNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitFieldName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.FieldNameContext = FieldNameContext;

Protobuf3Parser.prototype.fieldName = function() {

    var localctx = new FieldNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, Protobuf3Parser.RULE_fieldName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
        this.ident();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OneofNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_oneofName;
    return this;
}

OneofNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OneofNameContext.prototype.constructor = OneofNameContext;

OneofNameContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

OneofNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterOneofName(this);
	}
};

OneofNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitOneofName(this);
	}
};

OneofNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitOneofName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.OneofNameContext = OneofNameContext;

Protobuf3Parser.prototype.oneofName = function() {

    var localctx = new OneofNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, Protobuf3Parser.RULE_oneofName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 429;
        this.ident();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MapNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_mapName;
    return this;
}

MapNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapNameContext.prototype.constructor = MapNameContext;

MapNameContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

MapNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterMapName(this);
	}
};

MapNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitMapName(this);
	}
};

MapNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitMapName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.MapNameContext = MapNameContext;

Protobuf3Parser.prototype.mapName = function() {

    var localctx = new MapNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, Protobuf3Parser.RULE_mapName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 431;
        this.ident();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ServiceNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_serviceName;
    return this;
}

ServiceNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ServiceNameContext.prototype.constructor = ServiceNameContext;

ServiceNameContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

ServiceNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterServiceName(this);
	}
};

ServiceNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitServiceName(this);
	}
};

ServiceNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitServiceName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.ServiceNameContext = ServiceNameContext;

Protobuf3Parser.prototype.serviceName = function() {

    var localctx = new ServiceNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, Protobuf3Parser.RULE_serviceName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 433;
        this.ident();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RpcNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_rpcName;
    return this;
}

RpcNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RpcNameContext.prototype.constructor = RpcNameContext;

RpcNameContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

RpcNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterRpcName(this);
	}
};

RpcNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitRpcName(this);
	}
};

RpcNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitRpcName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.RpcNameContext = RpcNameContext;

Protobuf3Parser.prototype.rpcName = function() {

    var localctx = new RpcNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, Protobuf3Parser.RULE_rpcName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 435;
        this.ident();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MessageTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_messageType;
    return this;
}

MessageTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageTypeContext.prototype.constructor = MessageTypeContext;

MessageTypeContext.prototype.messageName = function() {
    return this.getTypedRuleContext(MessageNameContext,0);
};

MessageTypeContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Protobuf3Parser.DOT);
    } else {
        return this.getToken(Protobuf3Parser.DOT, i);
    }
};


MessageTypeContext.prototype.ident = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentContext);
    } else {
        return this.getTypedRuleContext(IdentContext,i);
    }
};

MessageTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterMessageType(this);
	}
};

MessageTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitMessageType(this);
	}
};

MessageTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitMessageType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.MessageTypeContext = MessageTypeContext;

Protobuf3Parser.prototype.messageType = function() {

    var localctx = new MessageTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, Protobuf3Parser.RULE_messageType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 438;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Protobuf3Parser.DOT) {
            this.state = 437;
            this.match(Protobuf3Parser.DOT);
        }

        this.state = 445;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 440;
                this.ident();
                this.state = 441;
                this.match(Protobuf3Parser.DOT); 
            }
            this.state = 447;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
        }

        this.state = 448;
        this.messageName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_enumType;
    return this;
}

EnumTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumTypeContext.prototype.constructor = EnumTypeContext;

EnumTypeContext.prototype.enumName = function() {
    return this.getTypedRuleContext(EnumNameContext,0);
};

EnumTypeContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Protobuf3Parser.DOT);
    } else {
        return this.getToken(Protobuf3Parser.DOT, i);
    }
};


EnumTypeContext.prototype.ident = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentContext);
    } else {
        return this.getTypedRuleContext(IdentContext,i);
    }
};

EnumTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterEnumType(this);
	}
};

EnumTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitEnumType(this);
	}
};

EnumTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitEnumType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.EnumTypeContext = EnumTypeContext;

Protobuf3Parser.prototype.enumType = function() {

    var localctx = new EnumTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, Protobuf3Parser.RULE_enumType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Protobuf3Parser.DOT) {
            this.state = 450;
            this.match(Protobuf3Parser.DOT);
        }

        this.state = 458;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 453;
                this.ident();
                this.state = 454;
                this.match(Protobuf3Parser.DOT); 
            }
            this.state = 460;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
        }

        this.state = 461;
        this.enumName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntLitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_intLit;
    return this;
}

IntLitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntLitContext.prototype.constructor = IntLitContext;

IntLitContext.prototype.INT_LIT = function() {
    return this.getToken(Protobuf3Parser.INT_LIT, 0);
};

IntLitContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterIntLit(this);
	}
};

IntLitContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitIntLit(this);
	}
};

IntLitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitIntLit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.IntLitContext = IntLitContext;

Protobuf3Parser.prototype.intLit = function() {

    var localctx = new IntLitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, Protobuf3Parser.RULE_intLit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
        this.match(Protobuf3Parser.INT_LIT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StrLitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_strLit;
    return this;
}

StrLitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StrLitContext.prototype.constructor = StrLitContext;

StrLitContext.prototype.STR_LIT = function() {
    return this.getToken(Protobuf3Parser.STR_LIT, 0);
};

StrLitContext.prototype.PROTO3_LIT_SINGLE = function() {
    return this.getToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0);
};

StrLitContext.prototype.PROTO3_LIT_DOBULE = function() {
    return this.getToken(Protobuf3Parser.PROTO3_LIT_DOBULE, 0);
};

StrLitContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterStrLit(this);
	}
};

StrLitContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitStrLit(this);
	}
};

StrLitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitStrLit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.StrLitContext = StrLitContext;

Protobuf3Parser.prototype.strLit = function() {

    var localctx = new StrLitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, Protobuf3Parser.RULE_strLit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 465;
        _la = this._input.LA(1);
        if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (Protobuf3Parser.PROTO3_LIT_SINGLE - 34)) | (1 << (Protobuf3Parser.PROTO3_LIT_DOBULE - 34)) | (1 << (Protobuf3Parser.STR_LIT - 34)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BoolLitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_boolLit;
    return this;
}

BoolLitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolLitContext.prototype.constructor = BoolLitContext;

BoolLitContext.prototype.BOOL_LIT = function() {
    return this.getToken(Protobuf3Parser.BOOL_LIT, 0);
};

BoolLitContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterBoolLit(this);
	}
};

BoolLitContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitBoolLit(this);
	}
};

BoolLitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitBoolLit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.BoolLitContext = BoolLitContext;

Protobuf3Parser.prototype.boolLit = function() {

    var localctx = new BoolLitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, Protobuf3Parser.RULE_boolLit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 467;
        this.match(Protobuf3Parser.BOOL_LIT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FloatLitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_floatLit;
    return this;
}

FloatLitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FloatLitContext.prototype.constructor = FloatLitContext;

FloatLitContext.prototype.FLOAT_LIT = function() {
    return this.getToken(Protobuf3Parser.FLOAT_LIT, 0);
};

FloatLitContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterFloatLit(this);
	}
};

FloatLitContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitFloatLit(this);
	}
};

FloatLitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitFloatLit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.FloatLitContext = FloatLitContext;

Protobuf3Parser.prototype.floatLit = function() {

    var localctx = new FloatLitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, Protobuf3Parser.RULE_floatLit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
        this.match(Protobuf3Parser.FLOAT_LIT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KeywordsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Protobuf3Parser.RULE_keywords;
    return this;
}

KeywordsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordsContext.prototype.constructor = KeywordsContext;

KeywordsContext.prototype.SYNTAX = function() {
    return this.getToken(Protobuf3Parser.SYNTAX, 0);
};

KeywordsContext.prototype.IMPORT = function() {
    return this.getToken(Protobuf3Parser.IMPORT, 0);
};

KeywordsContext.prototype.WEAK = function() {
    return this.getToken(Protobuf3Parser.WEAK, 0);
};

KeywordsContext.prototype.PUBLIC = function() {
    return this.getToken(Protobuf3Parser.PUBLIC, 0);
};

KeywordsContext.prototype.PACKAGE = function() {
    return this.getToken(Protobuf3Parser.PACKAGE, 0);
};

KeywordsContext.prototype.OPTION = function() {
    return this.getToken(Protobuf3Parser.OPTION, 0);
};

KeywordsContext.prototype.REPEATED = function() {
    return this.getToken(Protobuf3Parser.REPEATED, 0);
};

KeywordsContext.prototype.ONEOF = function() {
    return this.getToken(Protobuf3Parser.ONEOF, 0);
};

KeywordsContext.prototype.MAP = function() {
    return this.getToken(Protobuf3Parser.MAP, 0);
};

KeywordsContext.prototype.INT32 = function() {
    return this.getToken(Protobuf3Parser.INT32, 0);
};

KeywordsContext.prototype.INT64 = function() {
    return this.getToken(Protobuf3Parser.INT64, 0);
};

KeywordsContext.prototype.UINT32 = function() {
    return this.getToken(Protobuf3Parser.UINT32, 0);
};

KeywordsContext.prototype.UINT64 = function() {
    return this.getToken(Protobuf3Parser.UINT64, 0);
};

KeywordsContext.prototype.SINT32 = function() {
    return this.getToken(Protobuf3Parser.SINT32, 0);
};

KeywordsContext.prototype.SINT64 = function() {
    return this.getToken(Protobuf3Parser.SINT64, 0);
};

KeywordsContext.prototype.FIXED32 = function() {
    return this.getToken(Protobuf3Parser.FIXED32, 0);
};

KeywordsContext.prototype.FIXED64 = function() {
    return this.getToken(Protobuf3Parser.FIXED64, 0);
};

KeywordsContext.prototype.SFIXED32 = function() {
    return this.getToken(Protobuf3Parser.SFIXED32, 0);
};

KeywordsContext.prototype.SFIXED64 = function() {
    return this.getToken(Protobuf3Parser.SFIXED64, 0);
};

KeywordsContext.prototype.BOOL = function() {
    return this.getToken(Protobuf3Parser.BOOL, 0);
};

KeywordsContext.prototype.STRING = function() {
    return this.getToken(Protobuf3Parser.STRING, 0);
};

KeywordsContext.prototype.DOUBLE = function() {
    return this.getToken(Protobuf3Parser.DOUBLE, 0);
};

KeywordsContext.prototype.FLOAT = function() {
    return this.getToken(Protobuf3Parser.FLOAT, 0);
};

KeywordsContext.prototype.BYTES = function() {
    return this.getToken(Protobuf3Parser.BYTES, 0);
};

KeywordsContext.prototype.RESERVED = function() {
    return this.getToken(Protobuf3Parser.RESERVED, 0);
};

KeywordsContext.prototype.TO = function() {
    return this.getToken(Protobuf3Parser.TO, 0);
};

KeywordsContext.prototype.MAX = function() {
    return this.getToken(Protobuf3Parser.MAX, 0);
};

KeywordsContext.prototype.ENUM = function() {
    return this.getToken(Protobuf3Parser.ENUM, 0);
};

KeywordsContext.prototype.MESSAGE = function() {
    return this.getToken(Protobuf3Parser.MESSAGE, 0);
};

KeywordsContext.prototype.SERVICE = function() {
    return this.getToken(Protobuf3Parser.SERVICE, 0);
};

KeywordsContext.prototype.RPC = function() {
    return this.getToken(Protobuf3Parser.RPC, 0);
};

KeywordsContext.prototype.STREAM = function() {
    return this.getToken(Protobuf3Parser.STREAM, 0);
};

KeywordsContext.prototype.RETURNS = function() {
    return this.getToken(Protobuf3Parser.RETURNS, 0);
};

KeywordsContext.prototype.BOOL_LIT = function() {
    return this.getToken(Protobuf3Parser.BOOL_LIT, 0);
};

KeywordsContext.prototype.enterRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.enterKeywords(this);
	}
};

KeywordsContext.prototype.exitRule = function(listener) {
    if(listener instanceof Protobuf3Listener ) {
        listener.exitKeywords(this);
	}
};

KeywordsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Protobuf3Visitor ) {
        return visitor.visitKeywords(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Protobuf3Parser.KeywordsContext = KeywordsContext;

Protobuf3Parser.prototype.keywords = function() {

    var localctx = new KeywordsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, Protobuf3Parser.RULE_keywords);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.Protobuf3Parser = Protobuf3Parser;
