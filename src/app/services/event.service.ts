import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private apiService: ApiService) { }

  getEvents() {
      return new Promise((resolve, reject) => {
         this.apiService.get('events').then((res) => {
             resolve(res);
         } , (err) => {
             reject(err);
         });
      });

  }

  getEvent(id) {
    return new Promise((resolve, reject) => {
       this.apiService.get(`events/${id}`).then((res) => {
           resolve(res);
       } , (err) => {
          reject(err);
       });
    });
  }

  postEvent(data) {
      return new Promise((resolve, reject) => {
         this.apiService.post('event' , data).then((res) => {
             resolve(res);
         } , (err) => {
             reject(err);
         });
      });
  }
}
