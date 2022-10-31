import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  myonAddToshoCard: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    title: ' ',
    price: 0,
    images: [],
    description: ' ',
    category: {
      id: '',
      name: ','
  },
  }

  today = new Date();
  date =  new Date(2022, 1, 22);

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myonAddToshoCard = this.storeService.getmyonAddToshoCard();
   }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {  
      this.products = data;
    })
  }

  onAddToshoCard (product: Product) {
   this.storeService.addProduct(product);
  this.total = this.storeService.getTotal();
  }

  toggleProductdetail(){
    this.showProductDetail = !this.showProductDetail; 
  }

  onshowDetail(id: string) {
    this.productsService.getProduct(id)
    .subscribe(data => {
      this.toggleProductdetail();
      this.productChosen = data;
    })
  }

}
