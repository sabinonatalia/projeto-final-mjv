import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre.component';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './pages/contato/contato.component';
import { PaginaProdutosComponent } from './pages/pagina-produtos/pagina-produtos.component';




@NgModule({
  declarations: [
    SobreComponent,
    ContatoComponent,
    PaginaProdutosComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class FeaturesModule { }
