import { TipoAnuncio } from './../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Imagem } from './../../../models/imagem.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AnuncioService } from './../../../services/anuncio.service';
import { Anuncio } from './../../../models/anuncio.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anuncio-visualizar',
  templateUrl: './anuncio-visualizar.component.html',
  styleUrls: ['./anuncio-visualizar.component.css']
})
export class AnuncioVisualizarComponent implements OnInit {

  @Input("anuncio") anuncio: Anuncio;

  tipos: Observable<TipoAnuncio[]>;
  formulario: FormGroup;
  imagem: Imagem;
  id: any;

  constructor(
     private router: Router,
     private anuncioService: AnuncioService,
     private activeRoute:  ActivatedRoute
    ) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(parametrosURl => {
      //console.log(parametrosURl);
      //console.log(parametrosURl['id']);
      this.id = parametrosURl['id'];
      if (this.id != undefined){
        this.anuncioService.findById(this.id).subscribe(data=>{
          //console.log(data);
          this.anuncio = data[0];
          this.imagem = this.anuncio.imagem;
          console.log(this.anuncio);
          //this.updateValuesFormControl();
        });
      }

    })
  }

}
