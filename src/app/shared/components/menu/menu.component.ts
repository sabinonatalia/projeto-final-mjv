import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/features/models/user.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  user?: User
  constructor(
    private router: Router,
  
  ) { }

  ngOnInit(): void {
  window.scroll(0,0)
  const userStorage = sessionStorage.getItem('user')
  if(userStorage){
    this.user = JSON.parse(userStorage)
  }
  }


  sair(){
    sessionStorage.clear()
    this.router.navigateByUrl('/')
  }

}
