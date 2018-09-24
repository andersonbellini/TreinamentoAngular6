import { FilhoComponent } from './../../../../../../../Aula3/ciclo-vida/src/app/filho/filho.component';
import { anuncioFiltro } from './../../../models/anuncio-filtro.model';
import { AnuncioService } from './../../../services/anuncio.service';
import { FormGroup, FormBuilder } from '@angular/forms';
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
    filtro: anuncioFiltro;

  constructor(private formBuilder: FormBuilder,
    private tipoAnuncioService: TipoAnuncioService,
    private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.tiposAnuncio = this.tipoAnuncioService.findAll();
    // this.tipoAnuncioService.findAll().subscribe(resultado => {
    //   this.tiposAnuncio = resultado;
    //   console.log(resultado);
    // });

    this.anuncioService.listarAnuncio().subscribe(resultado =>{
      this.anuncio = JSON.parse(JSON.stringify(resultado));
      //alert("Foram encontrados  " + resultado.length + " anúncios");

    });

    this.createFormGroup();

  }
  createFormGroup(): void {
    this.formulario = this.formBuilder.group({
        tipo: [null],
        nome: [null]
    });
  }

  public pesquisar(): void {
    this.filtro = JSON.parse(JSON.stringify(this.formulario.value));
    this.anuncioService.findbyFiltros(this.filtro);
  }



}



