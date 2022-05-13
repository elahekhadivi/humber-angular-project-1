import { Component } from '@angular/core';
import { ProductData, productData } from 'src/app/Models/product_data';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humber-assignment-1';
  showModal = false;
  data = productData;
  onCardClick() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
