import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private apiService: ApiService) { }

  getEvents(applyFilters?: string) {
      return new Promise((resolve, reject) => {
          let route = 'events';
          if (applyFilters) {
              route = route + applyFilters;
          }
          this.apiService.get(route ).then((res) => {
             resolve(res);
         } , (err) => {
             reject(err);
         });
      });

  }

  getPurchasedTicketsOfUser() {
      return new Promise((resolve, reject) => {
          this.apiService.get('event/user').then((res) => {
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

    buyTicketEvent(data) {
        return new Promise((resolve, reject) => {
            this.apiService.post('event/buy-ticket' , data).then((res) => {
                resolve(res);
            } , (err) => {
                reject(err);
            });
        });
    }
}
