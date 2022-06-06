import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    private http: HttpClient
  ) { }


  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
      return this.http.post<UsuarioLogin>('https://guerreirastech.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://guerreirastech.herokuapp.com/usuarios/cadastrar', usuario)
  }

  logado() {
    let ok = false
    if(environment.token != '') {
      ok = true
    }
    return ok
  }
}
