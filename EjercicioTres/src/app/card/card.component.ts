import { Component, OnInit } from '@angular/core';
import { foundations, lipsticks, products } from '../models/products.define'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  lipsticks = lipsticks
  foundations = foundations
  constructor() { }

  ngOnInit(): void {
  }

}
