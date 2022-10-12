import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
// Input es el decorador de padre a hijo, pasa los datos de un lado a otro
  // @Input() personajes: Personaje[] = []

  get personajes() {
    return this.dbzService.personajes
  }

  constructor (private dbzService: DbzService) {}

}
