import { Component, OnInit } from '@angular/core';
import {Router,  ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

categoria: Categoria = new Categoria()



  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])

    }

    let id =  this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

  apagar(){
    this.categoriaService.deleteCategoria(this.categoria.id).subscribe(()=>{
      alert('Tema apagado com sucesso!')
      this.router.navigate(['/categorias'])
    })
  }


}
