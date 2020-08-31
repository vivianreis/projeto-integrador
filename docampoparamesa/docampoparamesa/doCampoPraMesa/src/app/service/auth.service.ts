import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  logar(UsuarioLogin: UsuarioLogin) {
    return this.http.post('http://localhost:9000/usuarios/logar', UsuarioLogin)
  }

  cadastrar(Usuario: Usuario) {
    return this.http.post('http://localhost:9000/usuarios/cadastrar', Usuario)
  }

}
