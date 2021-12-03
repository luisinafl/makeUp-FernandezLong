import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../product/card/card.module';
import { UploadModule } from '../../components/upload/upload.module';


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
    CardModule,
    UploadModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
