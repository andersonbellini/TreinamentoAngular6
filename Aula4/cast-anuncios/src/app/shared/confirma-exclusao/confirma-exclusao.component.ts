import { Anuncio } from './../../models/anuncio.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirma-exclusao',
  templateUrl: './confirma-exclusao.component.html',
  styleUrls: ['./confirma-exclusao.component.css']
})
export class ConfirmaExclusaoComponent implements OnInit {

  @Input("objetoExclusao") objetivoExclusao:Anuncio;

  constructor() { }

  ngOnInit() {
  }

}
