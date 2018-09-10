import { Veiculo } from "./veiculo";
import { Motor } from "./motor";

export class Moto extends Veiculo implements Motor{
    constructor(
        public motorista: string,
        public cor: any)
    {
        super(2,cor,"honda",motorista);

    }

    acelerar() : any{
    console.log("Acelerar Moto.");
    }

    desacelerar() : any{
        console.log("Desacelerar Moto.");
    }

    obterMarca(): string{
        return this.marca;
    }


}