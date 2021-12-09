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


  @Input()
  produtos?: Produtos;

  @Input()
  card: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }




}
