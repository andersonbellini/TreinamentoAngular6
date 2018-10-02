import { Anuncio } from './../../models/anuncio.model';

import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public anuncios: Observable<Anuncio[]>;
  private subjectPequisa: Subject<string> = new Subject<string>();

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.subjectPequisa.pipe(  //1-Pipe concatena operadores a serem executados
      debounceTime(1000),      // 2 - Pausa a execução da ação em X segundos
      distinctUntilChanged(),  //3 - Faz pesquisas distintas
      map((texto: string) => { //4 - Fazer validações no texto digitado
        if(texto.trim() === ''){
          return new Observable<Anuncio[]>();
        }
        //5 - Executa a pesquisa com o termo digitado
        //console.log(texto);
        return this.anuncioService.findbyNome(texto);
      })
    ).subscribe(resultado => {
      console.log(resultado);
      this.anuncios = resultado;
    })
  }

  public pesquisa(termoBusca: string): void{
     //console.log(termoBusca);

     this.subjectPequisa.next(termoBusca);

  }

  public limparPesquisa(): void{
    this.subjectPequisa.next('');

  }

}
