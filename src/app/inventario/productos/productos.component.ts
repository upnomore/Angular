import { Component, Input } from '@angular/core';
import { elementos } from '../interfaces/inventario.interface';
import { InventarioService } from '../services/inventario.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent {

  constructor() { 
  }

  producto: elementos[] = []

  @Input() productos: elementos[] = []

  lista(){
    this.producto = this.productos
  }





}
