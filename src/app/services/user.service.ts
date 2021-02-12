import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user: any;
    public userInfoSubject = new BehaviorSubject<object>(this.user);

    constructor(private apiService: ApiService) {
    }

    getCurrentUser(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`user/${id}`).then((res) => {
                console.log(res);
                this.user = res;
                this.userInfoSubject.next(this.user);
                console.log(this.user);
                resolve(res);
            }, (err) => {
                console.log(err);
                reject(err);
            });
        });
    }

    getUserFirstLetter(name: string) {
        return name.substring(0, 1).toUpperCase();
    }

    getAllUsers() {
        return new Promise((resolve, reject) => {
            this.apiService.get(`users`).then((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });

        });
    }

    updateUser(data) {
        return new Promise((resolve, reject) => {
            this.apiService.put('user/update', data).then((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    updateMeUser(data) {
        return new Promise((resolve, reject) => {
            this.apiService.put('user-personal/update', data).then((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    deleteUser(id) {
        return new Promise((resolve, reject) => {
            this.apiService.delete(`user/delete/${id}`).then((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    postForgotPassword(email) {
        return new Promise((resolve, reject) => {
            this.apiService.login('forgot-password', email).then((res: any) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    postConfirnPassword() {

    }
}
