import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaProdutosComponent } from './features/pages/pagina-produtos/pagina-produtos.component';
import { ProdutoDetalheComponent } from './features/pages/produto-detalhe/produto-detalhe.component';

import { SobreComponent } from './features/pages/sobre/sobre.component';

import { InicioComponent } from './shared/components/inicio/inicio.component';


const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch:'full'},

  {path: 'inicio', component: InicioComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'produtos', component: PaginaProdutosComponent},
  {path: 'produto-detalhe/:id', component: ProdutoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
