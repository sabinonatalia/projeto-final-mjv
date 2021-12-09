import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from '../../models/produtos.model';
import { ProdutosService } from '../../service/produtos/produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  produtos?: Produtos;
  constructor(private produtosService: ProdutosService, 
    private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      console.log(params.id);
      this.produtos = this.produtosService.getProdutosById(params.id);
    });
  }

}
