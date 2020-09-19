import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  constructor(
    private categoria: CategoriaService,
    private produto: ProdutoService
  ) { }

  ngOnInit(){

  }

}
