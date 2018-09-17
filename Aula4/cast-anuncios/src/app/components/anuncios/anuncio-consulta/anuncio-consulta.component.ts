import { TipoAnuncioService } from './../../../services/tipo-anuncio.service';
import { Component, OnInit } from '@angular/core';
import { tipoAnuncio } from '../../../models/tipo-anuncio.model';

@Component({
  selector: 'app-anuncio-consulta',
  templateUrl: './anuncio-consulta.component.html',
  styleUrls: ['./anuncio-consulta.component.css'],
  providers: [TipoAnuncioService]
})
export class AnuncioConsultaComponent implements OnInit {

    tiposAnuncio: tipoAnuncio[] = [];

  constructor(private tipoAnuncioService: TipoAnuncioService) { }

  ngOnInit() {
    this.tipoAnuncioService.findAll().subscribe(resultado => {
      this.tiposAnuncio = resultado;
      console.log(resultado);
    });
  }

}



