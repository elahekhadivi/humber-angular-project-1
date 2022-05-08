import { Component, OnInit } from '@angular/core';
export interface RawProductData
{
  id: number;
  item_name: string;
  item_description: string;
  storage_location: string;
  inventory_level: number;
  image: string;
}

class ProductData
{
  
}

@Component({
  selector: 'cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss']
})

export class CardsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
