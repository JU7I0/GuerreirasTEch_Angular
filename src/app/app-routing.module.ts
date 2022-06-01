import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path : '', redirectTo : 'inicio',pathMatch:'full'},
  {path: 'contato', component : ContatoComponent},
  {path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
