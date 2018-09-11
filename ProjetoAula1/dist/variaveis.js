"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var variaveis = /** @class */ (function () {
    function variaveis() {
        this.atributoClasse = "atributoClasse";
    }
    variaveis.prototype.printVar = function () {
        if (true) {
            var escopoFuncao = "var";
            console.log("Print dentro da função " + escopoFuncao);
        }
        console.log("Print dentro da função " + variaveis.ESCOPO_CLASSE_READ_ONLY);
        this.atributoClasse = "atributoClasse ALTERADO";
        console.log(this.atributoClasse);
    };
    variaveis.prototype.printLet = function () {
        if (true) {
            var escopoFuncao = "let";
            console.log("Print fora da função" + escopoFuncao);
        }
    };
    variaveis.prototype.printConst = function () {
        if (true) {
            var ESCOPOFUNCAO = "const";
            console.log("Print dentro da função" + ESCOPOFUNCAO);
        }
        //console.log("Print dentro da função" + ESCOPOFUNCAO);
    };
    variaveis.prototype.printAtributoClasse = function () {
        console.log(this.atributoClasse);
    };
    variaveis.ESCOPO_CLASSE_READ_ONLY = "Valor Read Only";
    return variaveis;
}());
exports.variaveis = variaveis;
