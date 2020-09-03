import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllCategorias(){
    return this.http.get('http://localhost:9000/categoria', this.token)
  }

  getByIdCategoria(id: number) {
    return this.http.get(`http://localhost:9000/categoria/${id}`, this.token)
  }

  postCategoria(categoria: Categoria) {
    return this.http.post('http://localhost:9000/categoria', categoria, this.token)
  }

  putCategoria(categoria: Categoria) {
    return this.http.put('http://localhost:9000/categoria', categoria, this.token)
  }

}
