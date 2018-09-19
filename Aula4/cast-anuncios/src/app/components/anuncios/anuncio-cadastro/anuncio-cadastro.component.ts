
import { Observable } from 'rxjs';
import { TipoAnuncioService } from './../../../services/tipo-anuncio.service';
import { AnuncioService } from './../../../services/anuncio.service';
import { Component, OnInit } from '@angular/core';
import { tipoAnuncio } from '../../../models/tipo-anuncio.model';
import { anuncio } from '../../../models/anuncio.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-anuncio-cadastro',
  templateUrl: './anuncio-cadastro.component.html',
  styleUrls: ['./anuncio-cadastro.component.css']
})
export class AnuncioCadastroComponent implements OnInit {

  formulario: FormGroup;

  tiposAnuncio: Observable<tipoAnuncio[]>;
  anuncio: anuncio;

  constructor(private tipoAnuncioService: TipoAnuncioService, private formBuilder: FormBuilder, private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      tipo: [null, Validators.required],
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      valor: [null, Validators.required],
      contato: [null, Validators.required]
    })
    this.tiposAnuncio = this.tipoAnuncioService.findAll();
  }

  public salvar(): void {
    console.log(this.formulario);
    console.log(this.formulario.value);
    console.log(this.anuncio);

    this.anuncioService.insert(this.anuncio).subscribe(resultado =>{
      this.anuncio = JSON.parse(JSON.stringify(this.formulario.value));
      alert("Anúncio Salvo " + resultado); //.body.id);
     }
    //,
    // (err: HttpErrorResponse) => {
    //   console.log(err);
    //   if (err!= null){
    //     if(err.status >= 400 && err.status <= 499 )
    //     {
    //       alert("Erro no cliente! Verifique API");
    //     }
    //     else if (err.status >= 500 && err.status <= 505 )
    //     {
    //       alert("Erro no lado do servidor");
    //     }
    //     else{
    //       alert("Erro não identificado");
    //     }
    //   }

    // });



}
