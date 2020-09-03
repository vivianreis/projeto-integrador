import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { Router } from '@angular/router';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  key = 'data'
  reverse = false

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number


  constructor(

    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router

  ) { }

  ngOnInit() {
    this.findAllCategorias()
    this.findAllProdutos()
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findByIdProduto() {
    this.produtoService.getByIdProdutos(this.produto.id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
  }

  cadastrarProduto() {
//    this.produto = new Produto()
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria
    console.log(this.produto)

    if(this.produto.nome == null || this.produto.preco == null || this.produto.quantidade == null) {
      alert('Preencha os campos corretamente para cadastrar um novo produto.')
    } else {
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        
        alert('Produto cadastrado com sucesso!')
        this.findAllProdutos()
      })
    }
  }

  cadastrarCategoria() {
    if (this.categoria.nome == null) {
      alert('Preencha o campo de nome do tema corretamente')
     } else {
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
        this.categoria = resp
        this.router.navigate(['/feed'])
        alert('Categoria cadastrada com sucesso!')
        this.findAllCategorias()
      })
     }
   }
  }
