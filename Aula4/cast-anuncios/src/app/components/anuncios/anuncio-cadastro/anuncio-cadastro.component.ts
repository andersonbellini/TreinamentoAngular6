import { Imagem } from './../../../models/imagem.model';

import { Observable } from 'rxjs';
import { TipoAnuncioService } from './../../../services/tipo-anuncio.service';
import { AnuncioService } from './../../../services/anuncio.service';
import { Component, OnInit } from '@angular/core';
import { tipoAnuncio } from '../../../models/tipo-anuncio.model';
import { anuncio } from '../../../models/anuncio.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Constants } from '../../../utils/constants';

@Component({
  selector: 'app-anuncio-cadastro',
  templateUrl: './anuncio-cadastro.component.html',
  styleUrls: ['./anuncio-cadastro.component.css']
})
export class AnuncioCadastroComponent implements OnInit {

  formulario: FormGroup;

  tiposAnuncio: Observable<tipoAnuncio[]>;
  anuncio: anuncio;
  imagem: Imagem;

  constructor(private router: Router,private tipoAnuncioService: TipoAnuncioService, private formBuilder: FormBuilder, private anuncioService: AnuncioService) { }

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

  public campoValido(campo: string): boolean{
    let formControl = this.formulario.get(campo);
    if(campo.toLocaleUpperCase()=="TIPO")
    {
      return formControl.value=="null" && (formControl.touched || formControl.dirty);
    }
    else{
      return formControl.invalid && (formControl.touched || formControl.dirty);
    }
  }

  public onSelectFile(event: any): void{
    console.log(event);
    if(event.target.files && event.target.files.length > 0){
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) =>{
          console.log(file.name, reader.result);
          this.imagem = new Imagem(file.name, reader.result);

      }

     }
  }

  public salvar(): void {


    if(this.formulario.valid){
      console.log(this.formulario);
      console.log(this.formulario.value);
      console.log(this.anuncio);

      this.anuncio = JSON.parse(JSON.stringify(this.formulario.value));
      this.anuncio.imagem = this.imagem;

      this.anuncioService.insert(this.anuncio).subscribe(resultado =>{
        this.anuncio = JSON.parse(JSON.stringify(resultado));
        alert("Anúncio Salvo " + this.anuncio.nome); //.body.id);
        this.router.navigate([Constants.PATH_CONSULTA_ANUNCIO]);
      });
    }
    else {
      alert("Formulário inválido, verifique os campos");
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

}
