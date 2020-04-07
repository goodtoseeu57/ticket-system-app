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
            Authorization: 'Token' + localStorage.accessToken,
        })
    };


  get(route: string , params?: any , retryCount: number = 0) {
      const options = this.addHeaders(params, 'get');
      return new Promise((resolve , reject) => {
         this.http.get(this.apiUrl + route  , options  ).pipe(take(1)).subscribe((response: any) => {
             console.log(response);
             resolve(response);
         } , (err) => {
             if (err.status === 401 && retryCount === 0) {
                 retryCount += 1;
                 this.refresh().then(() => {
                     this.get(route , params , retryCount).then((response) => {
                         console.log(response);
                         resolve(response);
                     }).catch((error) => {
                         localStorage.clear();
                         this.router.navigate(['public/login']);
                         console.log(error);
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
         this.http.post(this.apiUrl + route , data , options).pipe(take(1)).subscribe((response: any) => {
            console.log(response);
            resolve(response);
         } , (err) => {
             if (err.status === 401 && retryCount === 0) {
                 retryCount += 1;
                 this.refresh().then(() => {
                     this.post(route, data , retryCount).then((response) => {
                         resolve(response);
                     }).catch((error) => {
                         console.log(error);
                         localStorage.clear();
                         this.router.navigateByUrl('public/login');
                     });
                 });
             } else {
                 reject(err);
             }
         });
  });
}

    login(route: string, data: any) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + route, data ).pipe(take(1)).subscribe((response: any) => {
                console.log(response);
                resolve(response);
            }, (err) => {
                reject(err);
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
         console.log(refreshToken);
         this.http.post(this.apiUrl + 'refresh-token' , {refreshToken}).pipe(take(1)).subscribe((response: any) => {
           localStorage.setItem('accessToken' , response.accessToken);
           localStorage.setItem('refreshToken' , response.refreshToken);
           console.log('successful refresh token');
           console.log(response);
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
                params: params ,
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








