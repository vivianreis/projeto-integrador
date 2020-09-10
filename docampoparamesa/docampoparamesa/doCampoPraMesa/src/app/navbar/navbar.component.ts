import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AlertasComponent } from '../alertas/alertas.component';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService,
    public alerta: AlertasService
  ) { }

  ngOnInit() {
  }

  sair(){
    this.router.navigate(['login'])
    localStorage.clear()
  }

  carrinho() {
    this.alerta.showAlertInfo('Seu carrinho está vazio! Adicione produtos na Loja.')
    this.router.navigate(['/loja'])
  }

}
