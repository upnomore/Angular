import { Component } from '@angular/core';
import { categoriasheroesService } from '../services/categoriasheroes.service';
import { superheroe } from '../interfaces/interface';

@Component({
  selector: 'app-categ',
  templateUrl: './categ.component.html',
  styleUrls: ['./categ.component.css']
})
export class CategComponent  {

  get superheroes(){
    return this.CategoriasHeroesService.superheroes
  }

  constructor (public CategoriasHeroesService: categoriasheroesService) {}

}
