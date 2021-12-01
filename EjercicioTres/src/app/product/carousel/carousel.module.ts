import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, CarouselModule.forRoot(),],
  exports: [CarouselComponent],
})
export class CarouselCustomModule {}
