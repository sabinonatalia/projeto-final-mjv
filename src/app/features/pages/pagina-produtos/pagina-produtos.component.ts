import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from '../../models/produtos.model';
import { ProdutosService } from '../../service/produtos/produtos.service';

@Component({
  templateUrl: './pagina-produtos.component.html',
  styleUrls: ['./pagina-produtos.component.css']
})
export class PaginaProdutosComponent implements OnInit {

  
  @Input()
  produtos?: Produtos;

  constructor(private router: Router,
    private produtosService: ProdutosService) { }

  ngOnInit(): void {

  }



}
