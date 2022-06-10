import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { TemaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  categoria: Categoria = new Categoria

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    this.temaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
      this.categoria = resp 
    })
  }

  atualizar(){
    this.temaService.putCategoria(this.categoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
      alert('Tema atualizado com sucesso!')
      this.router.navigate(['/tema'])
    })  }

}
