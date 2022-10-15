import { Component, ViewChild, Input } from '@angular/core';
import { superheroe } from '../interfaces/interface';
import { categoriasheroesService } from '../services/categoriasheroes.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})
export class CasasComponent {


  constructor() { 
  }

  buscarheroe: superheroe[] = []

  @Input() heroes: superheroe[] = []

  lista(casa: string){
    this.buscarheroe = this.heroes.filter((item)=>{
        return item.casa === casa;
    })
  }

}
