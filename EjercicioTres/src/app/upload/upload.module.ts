import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from '../form/form.module';
import { UploadComponent } from './upload.component';



@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    FormModule
  ],
  exports:[UploadComponent]
})
export class UploadModule { }
