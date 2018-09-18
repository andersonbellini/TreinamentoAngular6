import { Observable } from 'rxjs';
import { TipoAnuncioService } from './../../../services/tipo-anuncio.service';
import { Component, OnInit } from '@angular/core';
import { tipoAnuncio } from '../../../models/tipo-anuncio.model';

@Component({
  selector: 'app-anuncio-cadastro',
  templateUrl: './anuncio-cadastro.component.html',
  styleUrls: ['./anuncio-cadastro.component.css']
})
export class AnuncioCadastroComponent implements OnInit {

  tiposAnuncio: Observable<tipoAnuncio[]>;

  constructor(private tipoAnuncioService: TipoAnuncioService) { }

  ngOnInit() {
    this.tiposAnuncio = this.tipoAnuncioService.findAll();
  }

}
