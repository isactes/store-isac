import { Component, OnInit, Input, Output } from '@angular/core';
import { ImageNav } from 'src/app/models/products.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  activeMenu = false;

  @Input() imgNav: ImageNav = {
    logom: 'assets/svg/bt_add_to_cart.svg',
    logocart1: 'assets/svg/bt_added_to_cart.svg',
    logocart2: 'assets/svg/icon_menu .svg',
    logocart3: 'assets/svg/icon_menu.svg',
    logocart4: 'assets/svg/icon_shopping_cart_notification.svg',
    logocart5: 'assets/icon_shopping_cart.svg',
    logocart6: 'assets/svg/icon_shopping_cart.svg',
    logocart7: 'assets/svg/logo_yard_sale.svg',
  }
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu (){
    this.activeMenu = !this.activeMenu
  }

}
