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
export interface ProductData{
  item_name: string;
  item_description: string;
  image: string;
}

function ProductData(rawProductData: RawProductData): ProductData
{
  const ProductData ={
    rawProductData.item_name,
    
    rawProductData.item_description,
    rawProductData.image,
  }
  return ProductData;
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
