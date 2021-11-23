import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/card/card.module';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'productos',
    component: ProductsComponent
  }
]
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes),
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
