import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './features/pages/contato/contato.component';
import { PaginaProdutosComponent } from './features/pages/pagina-produtos/pagina-produtos.component';

import { SobreComponent } from './features/pages/sobre/sobre.component';

import { InicioComponent } from './shared/components/inicio/inicio.component';


const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch:'full'},

  {path: 'inicio', component: InicioComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'produtos', component: PaginaProdutosComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
