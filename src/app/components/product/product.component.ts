import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

@Input()  product: Product = {
    id: 1,
    name: '',
    image: '',
    price: 0,
    describe: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
