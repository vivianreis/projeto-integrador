import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LojaComponent } from './loja/loja.component';
import { AdminComponent } from './admin/admin.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path:  'cadastro-categoria', component: PostCategoriaComponent},
  { path: 'loja', component: LojaComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'editar-produto/:id', component: PutProdutoComponent },
  { path: 'delete-produto/:id', component: DeleteProdutoComponent },
  { path: 'editar-categoria/:id', component: PutCategoriaComponent },
  { path: 'delete-categoria/:d', component: DeleteCategoriaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }