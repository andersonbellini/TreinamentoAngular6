import { AnuncioVisualizarComponent } from './anuncio-visualizar/anuncio-visualizar.component';
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
              //localhost:4200/anuncios/edit//id
              { path: 'edit/:id', component: AnuncioCadastroComponent },
              //localhost:4200/anuncios/view//id
              { path: 'view/:id', component: AnuncioVisualizarComponent } // alterar aqui para o component novo
          ]

    }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnuncioRoutingModule { }
