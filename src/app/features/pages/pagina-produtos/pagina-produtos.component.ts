import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from '../../models/produtos.model';
import { ProdutosService } from '../../service/produtos/produtos.service';

@Component({
  templateUrl: './pagina-produtos.component.html',
  styleUrls: ['./pagina-produtos.component.css']
})
export class PaginaProdutosComponent implements OnInit {

  
  // @Input()
  // produtos?: Produtos;

  produtos: Array<Produtos> = [];

  filteredProdutos: Array<Produtos> = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    window.scroll(0,0)

    this.produtos = this.produtosService.getProdutos();
    this.filteredProdutos = this.produtos;
  }

  findProdutosByFilter(event: any, type: 'Name' | 'Id') {
    const value = event.target.value;
    const produtos = type === 'Id' ? this.produtosService.getProdutosByFilterId(value) : this.produtosService.getProdutosByFilterName(value);
    if(value.length === 0) {
      return this.filteredProdutos = this.produtos;
    }
    return this.filteredProdutos = produtos;
  }


}
