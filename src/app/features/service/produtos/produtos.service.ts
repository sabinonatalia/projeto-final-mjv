import { Injectable } from '@angular/core';
import { Produtos } from '../../models/produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Array<Produtos> =[
    {
      id: 1,
      nome: "Uva",
      preco: "5.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062422748495902/1.png",
      categoria: "Frutas",
      dataDisponivel: '2021-12-04'
    },
    {
      id: 2,
      nome: "Laranja",
      preco: "4.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062419296592012/5.png",
      categoria: "Frutas",
      dataDisponivel: '2021-12-04'
    },
    {
      id: 3,
      nome: "Abacaxi",
      preco: "5.00",
      img: "https://cdn.discordapp.com/attachments/814843784529313795/916062418751336498/4.png",
      categoria: "Frutas",
      dataDisponivel: '2021-12-04'
    },
    {
      id: 4,
      nome: "Limão",
      preco: "3.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062466180517948/6.png",
      categoria: "Frutas",
      dataDisponivel: '2021-12-04'

    },{
      id: 5,
      nome: "Mamão",
      preco: "5.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062467329777714/3.png",
      categoria: "Frutas",
      dataDisponivel: '2021-12-04'
    },{
      id: 6,
      nome: "Banana",
      preco: "5.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062423222480966/2.png",
      categoria: "Frutas",
      dataDisponivel: '2021-12-04'
    },{
      id: 7,
      nome: "Cebola",
      preco: "5.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062468411908107/13.png",
      categoria: "Legumes",
      dataDisponivel: '2021-12-04'
    },{
      id: 8,
      nome: "Batata",
      preco: "5.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062468093128744/17.png",
      categoria: "Legumes",
      dataDisponivel: '2021-12-04'
    },{
      id: 9,
      nome: "Abóbora",
      preco: "9.50",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062469854740540/18.png",
      categoria: "Legumes",
      dataDisponivel: '2021-12-04'
    },{
      id: 10,
      nome: "Cenoura",
      preco: "3.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062467698880522/16.png",
      categoria: "Legumes",
      dataDisponivel: '2021-12-04'
    },{
      id: 11,
      nome: "Mandioca",
      preco: "5.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062419787341884/14.png",
      categoria: "Legumes",
      dataDisponivel: '2021-12-04'
    },{
      id: 12,
      nome: "Pimenta",
      preco: "8.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062420420673558/15.png",
      categoria: "Legumes",
      dataDisponivel: '2021-12-04'
    },{
      id: 13,
      nome: "Acelga",
      preco: "5.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062421225992192/Acelga.png",
      categoria: "Verduras",
      dataDisponivel: '2021-12-04'
    },{
      id: 14,
      nome: "Alface",
      preco: "5.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062422337486908/Alface.png",
      categoria: "Verduras",
      dataDisponivel: '2021-12-04'
    },{
      id: 15,
      nome: "Brocólis",
      preco: "6.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062466847408208/11.png",
      categoria: "Verduras",
      dataDisponivel: '2021-12-04'
    },{
      id: 16,
      nome: "Rucúla",
      preco: "5.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062468747456562/Rucula.png",
      categoria: "Verduras",
      dataDisponivel: '2021-12-04'
    },{
      id: 17,
      nome: "Salsa",
      preco: "2.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062469418549288/Salsa.png",
      categoria: "Verduras",
      dataDisponivel: '2021-12-04'
    },{
      id: 18,
      nome: "Repolho",
      preco: "5.00",
      img: "https://media.discordapp.net/attachments/814843784529313795/916062488531988520/Repolho.png",
      categoria: "Verduras",
      dataDisponivel: '2021-12-04'
    },
  ]
  constructor() { }

  getProdutos(){
    return this.produtos;

  }

  getProdutosById(id: number){
    return this.produtos.find((produtos) => produtos.id === Number(id));
  }

  getProdutodByFilterName(name: string){
    return this.produtos.filter((produtos) => produtos.nome.toUpperCase().search(name.toUpperCase()) > -1);
  }
  
  getProdutosByName(name: string) {
    return this.produtos.find((produtos) => produtos.nome === name);
  }

  getProdutosByFilterId(id: number) {
    const produtos = this.getProdutosById(Number(id));
    if(!produtos) {
      return [];
    }
    return [produtos];
  }

  getProdutosByFilterName(name: string) {
    return this.produtos.filter((produtos) => produtos.nome.toUpperCase().search(name.toUpperCase()) > -1);
  }
}

