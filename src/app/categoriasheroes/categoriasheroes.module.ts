import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategComponent } from './categ/categ.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { categoriasheroesService } from './services/categoriasheroes.service';
import { ModalComponent } from './modal/modal.component';
import { CasasComponent } from './casas/casas.component';

@NgModule({
  declarations: [
    CategComponent,
    MainpageComponent,
    ModalComponent,
    CasasComponent
  ],
  exports: [  
    MainpageComponent,
    CategComponent,
    CasasComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    categoriasheroesService
  ]
})
export class CategoriasheroesModule { }
