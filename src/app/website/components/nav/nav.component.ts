import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { StoreService } from '../../../services/store.service'
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null;
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private roter: Router
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
    this.getAllCategories();
    this.authService.user$
    .subscribe( userdata => {
      this.profile = userdata;
    })
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.authService.loginAndGet('isac@mail.com', 'isactes')
    .subscribe(() => {
      this.roter.navigate(['/profile'])
  });
  }

  getAllCategories() {
    this.categoriesService.getAll()
    .subscribe((data) => {
      this.categories = data
    })
  }

  logout(){
    this.authService.logout();
    this.profile = null;
    this.roter.navigate(['/home']);
  }

}
