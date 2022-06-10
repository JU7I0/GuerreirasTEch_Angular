import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
=======
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
>>>>>>> 643ce2eaf14abd8246a6c58f3b85106c5b2ca9ac

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    InicioComponent,
    SobreComponent,
    RodapeComponent,
    MenuComponent,
    CadastrarComponent,
    EntrarComponent,
<<<<<<< HEAD
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent
=======
    CategoriaComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent
>>>>>>> 643ce2eaf14abd8246a6c58f3b85106c5b2ca9ac
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
