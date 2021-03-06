import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/card/card.module';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselCustomModule } from 'src/app/carousel/carousel.module';
import { ModalCustomModule } from 'src/app/modal/modal.module';


const routes: Routes = [
  {
    path: 'productos',
    component: HomeComponent
  }
]
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes),
    CarouselCustomModule,
    ModalCustomModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
