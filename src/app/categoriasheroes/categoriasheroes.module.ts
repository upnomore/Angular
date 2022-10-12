import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategComponent } from './categ/categ.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { categoriasheroesService } from './services/categoriasheroes.service';
import { ListarcardsComponent } from './listarcards/listarcards.component';



@NgModule({
  declarations: [
    CategComponent,
    MainpageComponent,
    ListarcardsComponent
  ],
  exports: [
    MainpageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    categoriasheroesService
  ]
})
export class CategoriasheroesModule { }
