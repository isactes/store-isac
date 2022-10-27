import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myonAddToshoCard: Product[] = [];

  constructor() { }

  addProduct(product: Product ){
    this.myonAddToshoCard.push(product);
  }

  getmyonAddToshoCard() {
    return this.myonAddToshoCard;
  }

  getTotal() {
    return this.myonAddToshoCard.reduce((sum, item) => sum + item.price, 0);
  }
}
