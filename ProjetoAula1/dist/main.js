"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var moto_1 = require("./moto");
var fusca = new carro_1.Carro(4, 'azul', 'vw', 'Anderson');
fusca.acelerar();
fusca.desacelerar();
fusca.alterarCorVeiculo();
var motinha = new moto_1.Moto("Anderson", "Vermelha");
motinha.acelerar();
motinha.desacelerar();
motinha.alterarCorVeiculo();
console.log(motinha.obterMarca());
motinha.desacelerar();
//# sourceMappingURL=main.js.map