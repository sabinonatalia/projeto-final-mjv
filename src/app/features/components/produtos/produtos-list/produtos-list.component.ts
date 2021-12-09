import { Component, OnInit, Input} from '@angular/core';
import { Produtos } from 'src/app/features/models/produtos.model';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  @Input()
  produtos: Array<Produtos> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
