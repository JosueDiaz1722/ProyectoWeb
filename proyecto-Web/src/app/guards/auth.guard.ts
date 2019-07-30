import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad,Router, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../servicios/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.afAuth.authState
      .take(1)
      .map(authState => !! authState)
      .do( authenticated =>{
        if(!authenticated){
          this.router.navigate(['login']);
        }
      });
  }
  
}