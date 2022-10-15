import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { CategoriasheroesModule } from './categoriasheroes/categoriasheroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DbzModule,
    CategoriasheroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
