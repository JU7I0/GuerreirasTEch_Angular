import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { environment } from "src/environments/environment.prod"
import { Categoria } from "../model/Categoria"
import { Postagem } from "../model/Postagem"
import { Usuario } from "../model/Usuario"
import { AuthService } from "../service/auth.service"
import { PostagemService } from "../service/postagem.service"
import { CategoriaService } from "../service/categoria.service"


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[] = []
  tituloPost: string

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[] = []
  idCategoria: number
  nomeCategoria: string

  Usuario: Usuario = new Usuario()
  idUsuario = environment.id

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private CategoriaService: CategoriaService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.authService.refreshToken()
    this.getAllCategorias()
    this.getAllPostagens()

    
  }

  getAllCategorias(){
    this.CategoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria(){
    this.CategoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.Usuario = resp
    })
  }

  publicar(){
    this.categoria.id = this.idCategoria
    this.postagem.categoria = this.categoria

    this.Usuario.id = this.idUsuario
    this.postagem.usuario = this.Usuario

    console.log(this.postagem)

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

  findByTituloPostagem(){
    if(this.tituloPost == ''){
      this.getAllPostagens()
    } else {
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  findByNomeCategoria(){
    if(this.nomeCategoria == ''){
      this.getAllCategorias()
    } else {
      this.CategoriaService.getByNomeCategoria(this.nomeCategoria).subscribe((resp: Categoria[]) => {
        this.listaCategorias = resp
      })
    }
  }

}


