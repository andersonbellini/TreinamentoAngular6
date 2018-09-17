import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnuncioConsultaComponent } from './components/anuncios/anuncio-consulta/anuncio-consulta.component';
import { AnuncioCadastroComponent } from './components/anuncios/anuncio-cadastro/anuncio-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    AnuncioConsultaComponent,
    AnuncioCadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
