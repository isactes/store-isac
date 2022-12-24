import { Component, OnInit } from '@angular/core';
import { Product, CreateProductDTO, UpdateProductDTO } from 'src/app/models/products.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import { switchMap } from 'rxjs/operators';
import { zip } from 'rxjs';



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
  limit = 20;
  offset = 0;
  statusDetail: 'loading'| 'success' | 'error' | 'init' = 'init';

  today = new Date();
  date =  new Date(2022, 1, 22);

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myonAddToshoCard = this.storeService.getmyonAddToshoCard();
   }

  // get al the products
  // ngOnInit(): void {
  //   this.productsService.getAllProducts()
  //   .subscribe(data => {  
  //     this.products = data;
  //   })
  // }
  // get products by pages
  ngOnInit(): void {
    this.productsService.getAllProducts(20, 0)
    .subscribe(data => {  
      this.products = data;
      this.offset += this.limit;
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
    this.statusDetail = 'loading';
    this.toggleProductdetail();
    this.productsService.getProduct(id)
    .subscribe(data => {
      this.toggleProductdetail();
      this.productChosen = data;
      this.statusDetail = 'success';
    }, response => {
      console.log(response);
      this.statusDetail = 'error';
      
    })
  }

  readAndUpdate(id : string){
    this.productsService.getProduct(id)
    .pipe(
      switchMap((product) => this.productsService.update(product.id, { title: 'change'})),
    )
    .subscribe(data => {
      console.log('cbh', data);
    });
    this.productsService.fecthReadAndUpdate(id, {title: 'change'})
    .subscribe(response => {
      const read = response[0];
      const update = response [1];
    })
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo productos',
      price: 1212,
      images: ['https://placeimg.com/640/480/any'],
      description: 'Theres a new products create',
      categoryId: 2,
    }
    this.productsService.create(product)
    .subscribe(data => {
      this.products.unshift(data);
    });
  }
  updateProduct(){
    const changes: UpdateProductDTO = {
      title: 'nuevo title',
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes)
    .subscribe(data => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products[productIndex] = data;
    })
  }

  deleteProduct(){
    const id = this.productChosen.id;
    this.productsService.delete(id)
    .subscribe(() => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    })
  }

  loadMorw(){
    this.productsService.getProductByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products = this.products.concat(data);
      this.offset += this.limit; 
    })
  }

}
