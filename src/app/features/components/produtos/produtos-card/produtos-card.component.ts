import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from 'src/app/features/models/produtos.model';
import { ProdutosService } from 'src/app/features/service/produtos/produtos.service';

@Component({
  selector: 'app-produtos-card',
  templateUrl: './produtos-card.component.html',
  styleUrls: ['./produtos-card.component.css']
})
export class ProdutosCardComponent implements OnInit {


  produtos: Array<Produtos> = []
  filteredProdutos: Array<Produtos> = [];

  constructor(private produtosService: ProdutosService,
  private router: Router) { }

  ngOnInit(): void {

    this.produtos = this.produtosService.getProdutos()
    this.filteredProdutos = this.produtos

  }

  getProdutosByNome(event: any) {
    const value = event.target.value;

    this.filteredProdutos = this.produtos.filter(
        (product) => product.nome.toUpperCase().search(value.toUpperCase()) > -1);
    if(value.length === 0) {
        this.filteredProdutos = this.produtos;
    }
}

transformPrice(preco: number) {
    return `R$${preco},00`;
}

}
