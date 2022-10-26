import { Component } from '@angular/core';
import { Product } from './models/products.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-isac';
  imgParet = '';
  showImg = true;

  onLoaded(img: string) {
    console.log('loaded padre', img); 
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

}
