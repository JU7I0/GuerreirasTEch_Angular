import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  nome: string
  foto: string

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  
  }
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    }
  }



  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
      return this.http.post<UsuarioLogin>('https://guerreirastech.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://guerreirastech.herokuapp.com/usuarios/cadastrar', usuario)
  }

  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://guerreirastech.herokuapp.com/usuarios/${id}`, this.token)
  }


  logado() {
    let ok = false
    if(environment.token != '') {
      ok = true
    }
    return ok
  }
}
