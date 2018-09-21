
export class anuncioFiltro {

  constructor
  (
    public id: number,
    public nome: string,
    public tipo: number,
    ){}


    public AnuncioService(): void{
      //Fazer chamada a API com base nos filtros;
      //Carregar grid de anúncios com *ngFor.
    }

}
