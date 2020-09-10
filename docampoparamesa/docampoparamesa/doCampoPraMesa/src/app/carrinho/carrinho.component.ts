import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { CategoriaService } from '../service/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from '../service/alertas.service';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  quantidade: number = 0
  precoTotal: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number 

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private alerta: AlertasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    
    this.precoTotal = this.produto.preco
                
    let id = this.route.snapshot.params['id']

    this.findByIdProduto(id)
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

  findByIdProduto(id: number) {
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
  }

  menos() {
    this.quantidade--
    let total = this.quantidade * this.produto.preco 
    this.precoTotal = Number(total.toFixed(2))
     
  }

  mais(){
    this.quantidade++
    let total = this.quantidade * this.produto.preco 
    this.precoTotal = Number(total.toFixed(2))
  }

  finalizar() { 
    this.alerta.showAlertSucess('Compra realizada com sucesso!')
    this.router.navigate(['/loja'])
  }

}
