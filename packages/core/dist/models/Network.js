"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_Blockchains=require("./Blockchains"),Network=/*#__PURE__*/function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"https",d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,f=4<arguments.length&&void 0!==arguments[4]?arguments[4]:_Blockchains.Blockchains.EOS,g=5<arguments.length&&void 0!==arguments[5]?arguments[5]:"";(0,_classCallCheck2.default)(this,a),this.name=b,this.protocol=c,this.host=d,this.port=e,this.blockchain=f,this.chainId=g.toString()}return(0,_createClass2.default)(a,[{key:"unique",value:function a(){return("".concat(this.blockchain,":")+(this.chainId.length?"chain:".concat(this.chainId):"".concat(this.host,":").concat(this.port))).toLowerCase()}},{key:"hostport",value:function a(){return"".concat(this.host).concat(this.port?":":"").concat(this.port)}},{key:"fullhost",value:function a(){return"".concat(this.protocol,"://").concat(this.host).concat(this.port?":":"").concat(this.port)}},{key:"clone",value:function b(){return a.fromJson(JSON.parse(JSON.stringify(this)))}},{key:"isEmpty",value:function a(){return!this.host.length}},{key:"isValid",value:function a(){return this.protocol.length&&this.host.length&&this.port||this.chainId.length}}],[{key:"placeholder",value:function b(){return new a}},{key:"fromJson",value:function d(b){var c=Object.assign(a.placeholder(),b);return c.chainId=c.chainId?c.chainId.toString():"",c}},{key:"fromUnique",value:function e(b){var c=b.split(":")[0];if(-1<b.indexOf(":chain:"))return new a("","","","",c,b.replace("".concat(c,":chain:"),""));var d=b.replace("".concat(c,":"),"").split(":");return new a("","",d[0],parseInt(d[1]||80),c)}}]),a}();exports.default=Network;