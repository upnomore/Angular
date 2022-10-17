import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mainpage2Component } from './mainpage2/mainpage2.component';
import { ProductosComponent } from './productos/productos.component';
import { InventarioService } from './services/inventario.service';



@NgModule({
  declarations: [
    Mainpage2Component,
    ProductosComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Mainpage2Component,
    ProductosComponent
  ],
  providers: [
    InventarioService
  ]
})
export class InventarioModule { }
