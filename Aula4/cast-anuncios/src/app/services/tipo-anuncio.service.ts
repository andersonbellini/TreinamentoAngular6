
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { tipoAnuncio } from '../models/tipo-anuncio.model';

@Injectable({
  providedIn: 'root'
})
export class TipoAnuncioService {

  private tipoAnuncioUrl: string;

  constructor(private http: HttpClient) {
    this.tipoAnuncioUrl = `${environment.apiBaseUrl}/tipos`;
  }

  findAll(): Observable<tipoAnuncio[]>
  {
    return this.http.get<tipoAnuncio[]>(this.tipoAnuncioUrl);
  }


}
