import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselCustomModule } from 'src/app/carousel/carousel.module';
import { ModalCustomModule } from 'src/app/modal/modal.module';
import { CardModule } from '../../card/card.module';
import { UploadModule } from '../../upload/upload.module';


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
    RouterModule.forChild(routes),
    CarouselCustomModule,
    ModalCustomModule,
    CardModule,
    UploadModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
