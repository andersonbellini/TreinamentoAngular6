import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PIC Angular';

  pessoas: any[] = [
    {
      "nome":'Anderson Bellini',
      "idade": 30
    },
    {
      "nome":"Odair Viol",
      "idade": 32
    },
    {
      "nome":"Roberto Bob",
      "idade": 38
    }
    ,{
      "nome":"João Silva",
      "idade": 40
    }
  ]
}
