import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-isac';
  imgParet = '';
  showImg = true;
  token = ''; 

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {

  }

  onLoaded(img: string) {
    console.log('loaded padre', img); 
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser(){
    this.usersService.create({
      name: 'isac',
      email: 'isac@gmail.com', 
      password: 'isactes'
  })
  .subscribe(rta => {
    console.log(rta)
  });
  }
  login(){
    this.authService.login('isac@gmail.com', 'isactes')
    .subscribe(rta => {
    this.token = rta.acces_token;
  });
  }

  getProfile(){
    this.authService.profile(this.token)
    .subscribe(profile => {
      console.log(profile);
    })
  }



}
