import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean;

  constructor(private apiService: ApiService , private router: Router) {
      if (localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')) {
          this.isLoggedIn = true;
      }
  }


  login(credentials) {
      return new Promise((resolve , reject) => {
         this.apiService.login('login' , credentials).then((res: any) => {
            console.log(res);
            localStorage.setItem('accessToken' , res.accessToken);
            localStorage.setItem('refreshToken' , res.refreshToken);
            localStorage.setItem('id' , res.id);
            this.isLoggedIn = true;
            resolve(res);
         }).catch((err) => {
             reject(err);
         });
      });
  }


  logout() {
     return new Promise((resolve , reject) => {
         const refreshToken = localStorage.getItem('refreshToken');
         this.apiService.post('logout' , {refreshToken}).then((res) => {
             resolve(res);
             localStorage.clear();
             console.log(res);
             this.router.navigateByUrl('public/login');
         }).catch((err) => {
            reject(err);
         });
     });

  }
}
