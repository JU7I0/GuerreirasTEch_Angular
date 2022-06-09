import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContatoComponent } from './contato/contato.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';


const routes: Routes = [
  {path : '', redirectTo : 'entrar',pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'contato', component : ContatoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'categoria-edit/:id',component: CategoriaEditComponent},
  {path:'categoria-delete/:id', component: CategoriaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
