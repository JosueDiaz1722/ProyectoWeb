import { Component, OnInit } from '@angular/core';
import { AuthService} from '../servicios/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
    public isLogin: boolean;
    public nombreUser: string;
    public emailUser: string;
    navbarOpen = false;
  
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }

    constructor(
      public authService: AuthService
    ){

    }
  
    ngOnInit(){
      this.authService.getAuth().subscribe( auth => {
        if(auth){
          this.isLogin=true;
          this.nombreUser=auth.displayName;
          this.emailUser= auth.email;
          console.log('si');
        }else{
          this.isLogin = false;
        }
      })
    }

    onClickLogout(){
      this.authService.logout();
      this.ngOnInit();
    }

}
