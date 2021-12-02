import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  newItemForm = new FormGroup({
    brand: new FormControl('',Validators.required),
    shade: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),

  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.newItemForm.value);
  }
}
