import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/Models/product_data';  
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardsComponentComponent implements OnInit {

  constructor() { }
  data = productData;
  showModal = false;
  OnCardClick(){
this.showModal = true;
  }
  closeModal(){
    this.showModal= false;
  }
  ngOnInit(): void {
  }

}
