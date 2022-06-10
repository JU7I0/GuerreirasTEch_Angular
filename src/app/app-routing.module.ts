import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContatoComponent } from './contato/contato.component';
<<<<<<< HEAD
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
=======
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
>>>>>>> 643ce2eaf14abd8246a6c58f3b85106c5b2ca9ac
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaComponent } from './tema/tema.component';


const routes: Routes = [
  {path : '', redirectTo : 'entrar',pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'contato', component : ContatoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
<<<<<<< HEAD
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent },
  {path: 'tema-delete/:id', component: TemaDeleteComponent}
=======
  {path: 'categorias', component: CategoriaComponent},
  {path: 'categoria-edit/:id',component: CategoriaEditComponent},
  {path:'categoria-delete/:id', component: CategoriaDeleteComponent}
>>>>>>> 643ce2eaf14abd8246a6c58f3b85106c5b2ca9ac
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
