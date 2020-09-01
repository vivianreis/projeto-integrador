import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { Categoria } from '../model/Categoria';
import { ProdutoService } from '../service/produto.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {

    this.findAllProdutos()
    this.findAllCategorias()
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp
      console.log("listaProdutos"+this.listaProdutos)
    })
  }

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp
    })
  }

}
