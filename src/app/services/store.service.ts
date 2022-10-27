import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myonAddToshoCard: Product[] = [];
  private mycart = new BehaviorSubject<Product[]>([]);

  mycarts$ = this.mycart.asObservable();

  constructor() { }

  addProduct(product: Product ){
    this.myonAddToshoCard.push(product);
    this.mycart.next(this.myonAddToshoCard);
  }

  getmyonAddToshoCard() {
    return this.myonAddToshoCard;
  }

  getTotal() {
    return this.myonAddToshoCard.reduce((sum, item) => sum + item.price, 0);
  }
}
