import { Anuncio } from './../../models/anuncio.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirma-exclusao',
  templateUrl: './confirma-exclusao.component.html',
  styleUrls: ['./confirma-exclusao.component.css']
})
export class ConfirmaExclusaoComponent implements OnInit {

  @Input("textoModal") textoModal:string;
  @Input("idExclusao") idExclusao:number;

  @Output() eventoModalExcluir: EventEmitter<number> = new EventEmitter();
  @Output() eventoModalCancelar: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public excluir() :void{
    this.eventoModalExcluir.emit(this.idExclusao);
  }

  public cancelar() :void{
    this.eventoModalCancelar.emit("cancelado");
  }

}
