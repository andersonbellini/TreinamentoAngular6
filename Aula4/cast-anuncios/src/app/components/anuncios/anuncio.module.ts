import { ConfirmaExclusaoModule } from './../../shared/confirma-exclusao/confirma-exclusao.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnuncioRoutingModule } from './anuncio-routing.module';
import { AnuncioConsultaComponent } from './anuncio-consulta/anuncio-consulta.component';
import { AnuncioCadastroComponent } from './anuncio-cadastro/anuncio-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    AnuncioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    ConfirmaExclusaoModule
  ],
  declarations: [
    AnuncioConsultaComponent,
    AnuncioCadastroComponent
  ]
})
export class AnuncioModule { }
