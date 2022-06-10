import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { TemaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria
  idCategoria: number

  constructor(
    private temaService: TemaService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  findByIdCategoria(id: number){
    this.temaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })
  }

  apagar(){
    this.temaService.deleteCategoria(this.idCategoria).subscribe(() =>{
      alert('Tema apagado com sucesso!');
      this.router.navigate(['/tema'])
    })
  }

}
