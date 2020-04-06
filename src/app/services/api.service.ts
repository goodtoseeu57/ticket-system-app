import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient , HttpHeaders , HttpParams } from '@angular/common/http';
import {take} from 'rxjs/operators';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    apiUrl = environment.apiUrl;


  constructor(private http: HttpClient , private router: Router) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + (localStorage.accessToken ? localStorage.accessToken : ''),
        })
    };


  get(route: string , params?: any , retryCount: number = 0) {
      // this.http.get(this.apiUrl + route  , this.httpOptions  ).pipe(take(1)).subscribe((response: any) => {
      //            console.log(response);
      // });

      return new Promise((resolve , reject) => {
         this.http.get(this.apiUrl + route  , this.httpOptions  ).pipe(take(1)).subscribe((response: any) => {
             console.log(response);
             resolve(response);
         } , (err) => {
             if (err.status === 401 && retryCount === 0) {
                 retryCount += 1;
                 this.refresh().then(() => {
                     this.get(route, params, retryCount).then((response) => {
                         console.log(response);
                     }).catch((error) => {
                         this.router.navigate(['public/login']);
                     });
                 });
             } else {
                 reject(err);
             }
         });
      });
  }

  post(route: string  , data?: any , retryCount: number = 0) {
      const options = this.addHeaders(data, 'post');
      return new Promise((resolve , reject) => {
         this.http.post(this.apiUrl + route , data , this.httpOptions).pipe(take(1)).subscribe((response: any) => {
            console.log(response);
            resolve(response);
         } , (err) => {
             if (err.status === 401 && retryCount === 0) {
                 retryCount += 1;
                 this.refresh().then(() => {
                     this.http.post(route, data, retryCount).then((response) => {
                         resolve(response);
                     }).catch((error) => {
                         console.log(err);
                         this.router.navigateByUrl('public/login');
                     });
                 });
             } else {
                 reject(err);
             }
         });
  });
}





  put() {

  }

  delete() {

  }

refresh() {
      return new Promise((resolve , reject ) => {
         const refreshToken  = localStorage.getItem('refreshToken');
         this.http.post(this.apiUrl + 'refresh-token' , {refreshToken}).pipe(take(1)).subscribe((response: any) => {
           localStorage.setItem('accessToken' , response.accessToken);
           localStorage.setItem('refreshToken' , response.refreshToken);
           console.log('successful refresh token');
           resolve(response);
          }, (err) => {
                this.router.navigateByUrl('public/login');
                console.log(err);
                console.log('refresh token has expired');
                reject(err);
          });
  });
  }


    addHeaders(params: any, reqType: string) {
        let httpOptions;

        if (reqType.includes('get') || reqType.includes('delete')) {
            httpOptions = {
                body: params ,
                headers: new HttpHeaders({
                    'Content-Type': params && params.contentType ? params.contentType : 'application/json',
                    Authorization: 'Token ' + (localStorage.accessToken ? localStorage.accessToken : ''),
                }),
                responseType: params && params.responseType ? params.responseType : ''
            };
        } else if (reqType.includes('put') || reqType.includes('post')) {
            httpOptions = {
                body: params,
                headers: new HttpHeaders({
                    'Content-Type': params && params.contentType ? params.contentType : 'application/json',
                    Authorization: 'Token ' + (localStorage.accessToken ? localStorage.accessToken : ''),
                })
            };
        }
        return httpOptions;
    }
}








