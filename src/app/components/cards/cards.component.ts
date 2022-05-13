import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/Models/product_data';  

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }
  cards = productData;
  ngOnInit(): void {
  }

}
