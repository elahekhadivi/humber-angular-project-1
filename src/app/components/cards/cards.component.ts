import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/Models/product_data';  

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards = productData;
  showModal = false;
  constructor() { }

  ngOnInit(): void {
  }
  onCardClick() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
}

}
