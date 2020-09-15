import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllProdutos(){
    return this.http.get('http://localhost:9000/produtos', this.token)
  }

  getByIdProdutos(id: number) {
    return this.http.get(`http://localhost:9000/produtos/${id}`, this.token)
  }

  postProduto(produto: Produto) {
    return this.http.post('http://localhost:9000/produtos', produto, this.token)
  }

  putProduto(produto: Produto) {
    return this.http.put('http://localhost:9000/produtos', produto, this.token)
  }

  deleteProduto(id: number){
    return this.http.delete(`http://localhost:9000/produtos/${id}`, this.token)
  }


}
