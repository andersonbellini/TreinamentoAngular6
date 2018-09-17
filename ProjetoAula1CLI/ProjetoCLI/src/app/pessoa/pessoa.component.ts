import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  constructor() { }

  nomeX: string = "InicialFilho";

  title = 'PIC Angular';
  nome : string;
  idade: number;
  pessoa:Pessoa;
 // pessoas: Pessoa[] = [];
  pessoas: Array<Pessoa> = [];

  ngOnInit() {
    this.pessoa = new Pessoa("",null);
  }

  adicionar(){
    this.pessoas.push(this.pessoa);
    this.ngOnInit();
    console.log(this.pessoa);
  }

  excluirObjeto(pessoa: Pessoa) : void{
    let index = this.pessoas.indexOf(pessoa);
    this.pessoas.splice(index,1);
    console.log("Removido: "+ pessoa.nome);

  }

  exlcuirPorIndex(index: number)
  {
    console.log(index)
    this.pessoas.splice(index,1);
  }

}



// // Foi removido para usar classe e objetos
// pessoas: any[] = [
//   {
//     "nome":'Anderson Bellini',
//     "idade": 30
//   },
//   {
//     "nome":"Odair Viol",
//     "idade": 32
//   },
//   {
//     "nome":"Roberto Bob",
//     "idade": 38
//   }
//   ,{
//     "nome":"João Silva",
//     "idade": 40
//   }
// ]
