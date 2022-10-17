import { Component, destroyPlatform, Input } from '@angular/core';
import { elementos } from '../interfaces/inventario.interface';
import { InventarioService } from '../services/inventario.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent {

  inventario1: elementos[] = []

  inventario: elementos = {
    objeto: "",
    cantidad: 0,
    img: ""
  }

  base: number = 1

  acumular(valor:number){
    this.inventario.cantidad += valor
  }

  constructor(public InventarioService: InventarioService) {
    this.inventario1 = this.InventarioService.elementosinv 
   }
    
}

