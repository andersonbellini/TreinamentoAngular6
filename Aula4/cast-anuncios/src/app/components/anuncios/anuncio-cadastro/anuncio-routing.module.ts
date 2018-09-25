import { AnuncioCadastroComponent } from './anuncio-cadastro/anuncio-cadastro.component';
import { AnuncioConsultaComponent } from './anuncio-consulta/anuncio-consulta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
          children: [
              { path: '', component: AnuncioConsultaComponent },
              //localhost:4200/anuncios/add
              { path: 'add', component: AnuncioCadastroComponent },
              //localhost:4200/anunciosedit//id
              { path: 'edit/:id', component: AnuncioCadastroComponent }
          ]
    }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnuncioRoutingModule { }
