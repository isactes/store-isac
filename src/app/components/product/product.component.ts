import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

@Input()  product: Product = {
  id: '',
  title: ' ',
  price: 0,
  images: [],
  description: ' ',
  category: {
    id: '',
    name: ','
  },
  };

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProductDetail = new EventEmitter<string>();

  constructor() { }

  // ngOnInit(): void {
  // }
  onAddToCard () {
    this.addedProduct.emit(this.product);
  }
  onShowDetail() {
    this.showProductDetail.emit(this.product.id);
  }
}
