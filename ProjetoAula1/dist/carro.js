"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var veiculo_1 = require("./veiculo");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    //portas: number;
    //passageiros: number;
    function Carro(pneu, cor, marca, motorista) {
        return _super.call(this, pneu, cor, marca, motorista) || this;
        //this.portas = portas;
        //this.passageiros = passageiros;
    }
    Carro.prototype.acelerar = function () {
        console.log("Acelerar Carro");
    };
    Carro.prototype.desacelerar = function () {
        console.log("Desacelerar Carro");
    };
    Carro.prototype.alterarCorVeiculo = function () {
        this.cor = "Carro Verde";
        console.log("Cor " + this.cor);
    };
    return Carro;
}(veiculo_1.Veiculo));
exports.Carro = Carro;
