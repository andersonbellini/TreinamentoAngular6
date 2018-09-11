import { Pessoa } from './pessoa';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PIC Angular';

  pessoas: Pessoa[] = [
    new Pessoa("Anderson Bellini", 30),
    new Pessoa("Odair Viol", 32),
    new Pessoa("Roberto Bob", 38),
    new Pessoa("João Silva", 40)
  ]

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
