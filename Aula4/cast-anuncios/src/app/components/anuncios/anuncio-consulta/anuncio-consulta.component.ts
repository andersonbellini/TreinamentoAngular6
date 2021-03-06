import { ConfirmaExclusaoComponent } from './../../../shared/confirma-exclusao/confirma-exclusao.component';

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnuncioService } from '../../../services/anuncio.service';
import { AnuncioFiltro } from '../../../models/anuncio-filtro.model';
import { Anuncio } from '../../../models/anuncio.model';

@Component({
  selector: 'app-anuncio-consulta',
  templateUrl: './anuncio-consulta.component.html',
  styleUrls: ['./anuncio-consulta.component.css'],
  providers: [TipoAnuncioService]
})
export class AnuncioConsultaComponent implements OnInit {

  tipos: Observable<TipoAnuncio[]>;
  filtro: AnuncioFiltro;
  anuncios: Anuncio[];
  formulario: FormGroup;
  anuncioSelecionado: Anuncio;
  exibeExclusao: boolean = false;
  exibeVisualizar: boolean = false;
  nomeAnuncio: string;
  idAnuncio: number;

  @ViewChild('componenteExclusao') modalExclusao: ConfirmaExclusaoComponent;

  constructor(private formBuilder: FormBuilder,
    private tipoAnuncioService: TipoAnuncioService,
    private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.tipos = this.tipoAnuncioService.findAll();
    this.anuncioService.findAll().subscribe(resultado => {
      this.anuncios = resultado;
    })
    this.createFormGroup();
  }

  private createFormGroup(): void{
    this.formulario = this.formBuilder.group({
      tipo: [null],
      nome: [null]
    });
  }

  public pesquisar(): void {
    this.filtro = JSON.parse(JSON.stringify(this.formulario.value));
    this.anuncioService.findByFiltros(this.filtro).subscribe(resultado => {
      this.anuncios = resultado;
      console.log(this.anuncios);
    })
  }

  public confirmaExclusao(anuncio: Anuncio): void{
      //this.anuncioSelecionado = anuncio;
      this.nomeAnuncio = anuncio.nome;
      this.idAnuncio = anuncio.id;
     //console.log(this.anuncioSelecionado);
     this.anuncioSelecionado = anuncio;
      this.exibeExclusao = true;

      //@viewChild do componente exclusão
      //console.log(this.modalExclusao);
  }

   public excluirAnuncio(idExclusao : number) : void{
    console.log(idExclusao);
    // this.anuncioService.delete(idExclusao).subscribe(resultado =>{
    //  console.log(resultado);
    //  this.anuncioService.findAll().subscribe(resultado => {
    //   this.anuncios = resultado;
    // });

    this.anuncios.splice(this.anuncios.indexOf(this.anuncioSelecionado),1);
    alert("excluído com sucesso!!");

    //});
   }

   public cancelarAnuncio(mensagem: string): void{
      console.log(mensagem);
   }
}
