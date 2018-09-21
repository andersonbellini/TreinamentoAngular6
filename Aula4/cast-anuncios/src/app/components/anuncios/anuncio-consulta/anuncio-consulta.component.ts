import { AnuncioService } from './../../../services/anuncio.service';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TipoAnuncioService } from './../../../services/tipo-anuncio.service';
import { Component, OnInit } from '@angular/core';
import { tipoAnuncio } from '../../../models/tipo-anuncio.model';
import { anuncio } from '../../../models/anuncio.model';

@Component({
  selector: 'app-anuncio-consulta',
  templateUrl: './anuncio-consulta.component.html',
  styleUrls: ['./anuncio-consulta.component.css'],
  providers: [TipoAnuncioService,AnuncioService]
})
export class AnuncioConsultaComponent implements OnInit {
    formulario: FormGroup;

    tiposAnuncio: Observable<tipoAnuncio[]>;
    anuncio: Observable<anuncio>;

  constructor(private tipoAnuncioService: TipoAnuncioService,private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.tiposAnuncio = this.tipoAnuncioService.findAll();
    // this.tipoAnuncioService.findAll().subscribe(resultado => {
    //   this.tiposAnuncio = resultado;
    //   console.log(resultado);
    // });

    this.anuncioService.listarAnuncio().subscribe(resultado =>{
      this.anuncio = JSON.parse(JSON.stringify(resultado));
      alert("Foram encontrados  " + resultado.length + " anúncios");

    });

  }



}



