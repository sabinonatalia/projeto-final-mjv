import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre.component';
import { FormsModule } from '@angular/forms';
import { PaginaProdutosComponent } from './pages/pagina-produtos/pagina-produtos.component';
import { ProdutosCardComponent } from './components/produtos/produtos-card/produtos-card.component';
import { ProdutosListComponent } from './components/produtos/produtos-list/produtos-list.component';
import { ProdutoDetalheComponent } from './pages/produto-detalhe/produto-detalhe.component';




@NgModule({
  declarations: [
    SobreComponent,
    PaginaProdutosComponent,
    ProdutosCardComponent,
    ProdutosListComponent,
    ProdutoDetalheComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class FeaturesModule { }
