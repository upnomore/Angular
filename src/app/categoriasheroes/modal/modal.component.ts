import { Component } from '@angular/core';
import { superheroe } from '../interfaces/interface';
import { categoriasheroesService } from '../services/categoriasheroes.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {

    modalsuperh: superheroe[] = [] 

    constructor(public CategoriasHeroesService: categoriasheroesService) { 
      this.modalsuperh = this.CategoriasHeroesService.superheroes
    }

  mostrar: superheroe = {
    nombre: "",
    bio: "",
    img: "",
    aparicion: "",
    casa: ""
  }

  datos(superheroe: superheroe){
    this.mostrar = superheroe
  }

}
