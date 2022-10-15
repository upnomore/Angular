import { Component } from '@angular/core';
import { InventarioService } from '../services/inventario.service';

@Component({
  selector: 'app-mainpage2',
  templateUrl: './mainpage2.component.html',
})
export class Mainpage2Component {

  constructor(private inventarioService: InventarioService) { }


}
