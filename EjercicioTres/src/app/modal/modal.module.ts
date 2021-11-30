import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [ModalModule.forRoot(), CommonModule],
  exports: [ModalComponent],
})
export class ModalCustomModule {}
