import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor() { }

  title = 'PIC Angular';

  pessoas: Pessoa[] = [
    new Pessoa("Anderson Bellini", 30),
    new Pessoa("Odair Viol", 32),
    new Pessoa("Roberto Bob", 38),
    new Pessoa("João Silva", 40)
  ]

  ngOnInit() {
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
