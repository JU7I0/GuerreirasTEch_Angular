import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http:HttpClient) { }
=======
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  constructor(private http: HttpClient) { }
>>>>>>> 643ce2eaf14abd8246a6c58f3b85106c5b2ca9ac

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

<<<<<<< HEAD
  getAllCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('https://guerreirastech.herokuapp.com/categoria', this.token )
  }

  getByIdCategoria(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://guerreirastech.herokuapp.com/categoria/${id}`, this.token)
  }

  postCategoria(categoria: Categoria): Observable<Categoria>{
=======
  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://guerreirastech.herokuapp.com/categoria', this.token)
  }
getByIdCategoria(id: number): Observable<Categoria>{
  return this.http.get<Categoria>(`https://guerreirastech.herokuapp.com/categoria/${id}`, this.token)

}

  postTema(categoria: Categoria): Observable<Categoria> {
>>>>>>> 643ce2eaf14abd8246a6c58f3b85106c5b2ca9ac
    return this.http.post<Categoria>('https://guerreirastech.herokuapp.com/categoria', categoria, this.token)
  }

  putCategoria(categoria: Categoria): Observable<Categoria>{
<<<<<<< HEAD
    return this.http.put<Categoria>('https://guerreirastech.herokuapp.com/categoria', categoria, this.token)
  }

  deleteCategoria(id:number){
    return this.http.delete(`https://guerreirastech.herokuapp.com/categoria/${id}`, this.token)
=======
    return this.http.put<Categoria>('https://guerreirastech.herokuapp.com/categoria', categoria, this.token )
  }

  deleteCategoria(id:number){
  return this.http.delete(`https://guerreirastech.herokuapp.com/categoria/${id}`, this.token)
>>>>>>> 643ce2eaf14abd8246a6c58f3b85106c5b2ca9ac
  }
}
