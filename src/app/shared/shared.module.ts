import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MenuComponent,
    RodapeComponent

    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    RodapeComponent
  ]
})
export class SharedModule { }
