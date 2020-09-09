import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    window.scroll(0,0)
    
    let id:number = this.route.snapshot.params["id"];
    console.log(id)
    this.findByIdCategoria(id)
  }

  findByIdCategoria(id:number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
      this.categoria = resp
    });
  }

  btnSim(){
    this.categoriaService.deleteByIdCategoria(this.categoria.id).subscribe(() =>{
      this.router.navigate(['/admin'])
      alert('Categoria apagada com sucesso!')
    })
  }

  btnNao(){
    this.router.navigate(['/admin'])
  }

}
