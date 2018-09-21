import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { anuncio } from '../models/anuncio.model';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private anuncioUrl: string;

  constructor(private http: HttpClient) {
    this.anuncioUrl = `${environment.apiBaseUrl}/anuncios`;
  }

  //Insert de anúncios com método POST
  // public insert(anuncio: anuncio): Observable<HttpResponse<anuncio>>{
  //   console.log("Anuncio service: " + anuncio.nome);
  //   let body = JSON.stringify(anuncio);
  //   let httpReaders =
  //        new HttpHeaders({'Content-Type': 'application/json'});
  //   return this.http.post<anuncio>(
  //     this.anuncioUrl,
  //     body, {headers: httpReaders, observe: 'response'});
  // }

  public insert(anuncio: anuncio): Observable<Object>{
    console.log("Anuncio service: " + anuncio);
    return this.http.post(this.anuncioUrl,anuncio);
  }

  // public listarAnuncio(anuncio: anuncio): Observable<Object>{

  //   return this.http.post(this.anuncioUrl,anuncio);
  // }

  public listarAnuncio(): Observable<anuncio[]>
  {
    return this.http.get<anuncio[]>(this.anuncioUrl);
  }

}
