import { Component } from '@angular/core';
import { categoriasheroesService } from '../services/categoriasheroes.service';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent {

  constructor(private CategoriasHeroesService: categoriasheroesService) {}
}
