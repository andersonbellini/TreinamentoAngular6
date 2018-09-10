import { Carro } from "./carro";
import { Moto } from "./moto";

let fusca  = new Carro(4,'azul','vw','Anderson');

fusca.acelerar();
fusca.desacelerar();
fusca.alterarCorVeiculo();

const motinha = new Moto("Anderson", "Vermelha");
motinha.acelerar();
motinha.desacelerar();
motinha.alterarCorVeiculo();
console.log(motinha.obterMarca());
motinha.desacelerar();

