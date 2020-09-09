import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { Categoria } from '../model/Categoria';
import { ProdutoService } from '../service/produto.service';
import { CategoriaService } from '../service/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-put-categoria',
  templateUrl: './put-categoria.component.html',
  styleUrls: ['./put-categoria.component.css']
})
export class PutCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()

  constructor(

    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
    
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    let id: number = this.route.snapshot.params["id"];
    this.findByIdCategoria(id);
    
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
      this.categoria = resp;
    })
  }

  salvar(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
      this.router.navigate(['/cadastro-categoria'])
      this.alerta.showAlertSucess ('Categoria atualizada com sucesso!')
    })
  }

  cancelar(){
    this.router.navigate(['/admin'])
  }


}
