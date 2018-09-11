export class variaveis{

    public static readonly ESCOPO_CLASSE_READ_ONLY ="Valor Read Only";
    
    private atributoClasse: string ="atributoClasse";

    printVar(): void{
        if(true){
            var escopoFuncao ="var";
            console.log("Print dentro da função " + escopoFuncao);
        }
        console.log("Print dentro da função " + variaveis.ESCOPO_CLASSE_READ_ONLY);
        this.atributoClasse = "atributoClasse ALTERADO";
        console.log(this.atributoClasse);
    }

    printLet(): void{
        if(true){
            let escopoFuncao ="let";
            console.log("Print fora da função" + escopoFuncao);
        }
    }

    printConst(): void{
        if(true){
            const ESCOPOFUNCAO  ="const";
            console.log("Print dentro da função" + ESCOPOFUNCAO);
        }
        //console.log("Print dentro da função" + ESCOPOFUNCAO);
    }

    printAtributoClasse():void{
        console.log(this.atributoClasse);
    }
}