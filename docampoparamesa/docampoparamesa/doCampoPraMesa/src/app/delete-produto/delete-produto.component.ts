import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produto: Produto = new Produto()

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    let id: number = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produto) =>{
      this.produto=resp
    })
  }

  btnSim(){
    this.produtoService.deleteProduto(this.produto.id).subscribe(() =>{
      this.router.navigate(['/admin'])
      this.alerta.showAlertSucess('Produto apagado com sucesso!')
    })
  }

  btnNao(){
    this.router.navigate(['/admin'])
  }

}
