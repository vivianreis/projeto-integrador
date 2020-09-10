import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(

    private router: Router
  ) { }

  ngOnInit(){

    window.scroll(0,0)
  }

  btnNao(){
    this.router.navigate(['/home'])
  }

}
