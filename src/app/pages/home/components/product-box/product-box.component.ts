import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: `./product-box.component.html`
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Sneackers',
    price: 150,
    category: 'shoes',
    description: 'sneacckers descriptipn',
    image: 'https://via.placeholder.com/200'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {

  }


}
