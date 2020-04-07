import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

   constructor(private router: Router , private authService: AuthService ) {}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       const url: string = state.url;
       return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
      if (this.authService.isLoggedIn) {
          return true;
          console.log('true is logged in');
      } else {
          this.router.navigateByUrl('/public/login');
          return  false;
      }
  }

}
