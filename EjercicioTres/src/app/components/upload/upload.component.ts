import { Component, OnInit } from '@angular/core';
import { foundations, lipsticks, products } from '../../models/products.define'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  lipsticks = lipsticks
  foundations = foundations
  constructor() { }

  ngOnInit(): void {
  }

}
