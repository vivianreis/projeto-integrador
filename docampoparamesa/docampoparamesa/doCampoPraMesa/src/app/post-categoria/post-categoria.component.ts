import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Router } from '@angular/router';
import { CategoriaService } from '../service/categoria.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-post-categoria',
  templateUrl: './post-categoria.component.html',
  styleUrls: ['./post-categoria.component.css']
})
export class PostCategoriaComponent implements OnInit {


  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number


  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.findAllCategorias()
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
  }

  cadastrarCategoria() {
    if (this.categoria.nome == null || this.categoria.setor == null) {
    this.alerta.showAlertDanger('Preencha o campo de nome do tema corretamente')
    } else {
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
        this.categoria = resp
        this.router.navigate(['/feed'])
        this.alerta.showAlertSucess('Categoria cadastrada com sucesso!')
        this.findAllCategorias()
      })
    }
  }

  btnNao(){
    this.router.navigate(['/admin'])
  }

}
