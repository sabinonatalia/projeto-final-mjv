import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from 'src/app/features/models/produtos.model';

import { ProdutosService } from 'src/app/features/service/produtos/produtos.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    
  ) { }

  ngOnInit(): void {
  window.scroll(0,0)
  }

}
