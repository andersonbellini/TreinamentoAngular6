import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AnuncioCadastroComponent } from './anuncio-cadastro/anuncio-cadastro.component';
import { AnuncioConsultaComponent } from './anuncio-consulta/anuncio-consulta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnuncioRoutingModule } from '../anuncio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AnuncioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule
  ],
  declarations: [
    AnuncioConsultaComponent,
    AnuncioCadastroComponent
  ]
})
export class AnuncioModule { }
