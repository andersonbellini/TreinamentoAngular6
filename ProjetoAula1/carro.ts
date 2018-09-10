import { Veiculo } from "./veiculo";
import { Motor } from "./motor";

export class Carro extends Veiculo implements Motor {
    //portas: number;
    //passageiros: number;

    constructor(
        pneu: number,
        cor: string,
        marca: string,
        motorista: string
        ){
            super(pneu, cor, marca, motorista);    
            //this.portas = portas;
            //this.passageiros = passageiros;
        }

    acelerar(){
        console.log("Acelerar Carro");
    }

    desacelerar(){
        console.log("Desacelerar Carro");
    }

    alterarCorVeiculo(): void{
        this.cor = "Carro Verde";
        console.log("Cor " + this.cor);
    }
}