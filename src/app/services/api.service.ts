import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
          Authorization: 'Token ' + (localStorage.accessToken ? localStorage.accessToken : ''),
      })
  };

  get() {

  }

  post(route: string  , data?: any) {
      return new Promise((resolve , reject) => {
         this.http.post(this.apiUrl + route , data , this.httpOptions).pipe(take(1)).subscribe((response: any) => {
            console.log(response);
            resolve(response);
         } , (err) => {
             reject(err);
             });
      });

  }

  put() {

  }

  delete() {

  }









}
