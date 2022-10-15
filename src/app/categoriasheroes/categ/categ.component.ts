import { Component, Input, ViewChild } from '@angular/core';
import { superheroe } from '../interfaces/interface';
import { categoriasheroesService } from '../services/categoriasheroes.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-categ',
  templateUrl: './categ.component.html',
  styleUrls: ['./categ.component.css']
})
export class CategComponent  {


  superheroes: superheroe[] = [];

  @ViewChild(ModalComponent)mostrar!: ModalComponent
  
  constructor (public CategoriasHeroesService: categoriasheroesService) {
    this.superheroes = this.CategoriasHeroesService.superheroes;
  }

  datos(superheroe: superheroe){
    this.mostrar.datos(superheroe)
  }

}
