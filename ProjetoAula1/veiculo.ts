export class Veiculo{

    constructor(
        public pneu: number,
        public cor: string,
        public marca: string,
        public motorista: string
    ){}
    
    public alterarCorVeiculo(){
        console.log("Cor " + this.cor);
    }


}