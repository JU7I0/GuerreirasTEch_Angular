import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { TemaService } from '../service/categoria.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp
    })
  }

  cadastrar(){
    this.temaService.postCategoria(this.categoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.categoria = new Categoria()
    })
  }

}
