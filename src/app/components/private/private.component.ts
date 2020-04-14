import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
    user: any;
    firstLetter: string;
  constructor(private authService: AuthService , private userService: UserService , private apiService: ApiService) { }

    async ngOnInit(): Promise<void> {
        this.getCurrentUser();
        this.getAllUsers();
    }

  async getCurrentUser() {
    const id = localStorage.getItem('id');
    const response = await this.userService.getCurrentUser(id);
    console.log(response);
    this.user = response;
    this.firstLetter = this.user.first_name.substring(0, 1).toUpperCase();

    }

    getAllUsers() {
        this.userService.getAllUsers().then((res) => {
            console.log(res);
        });

    }


  logout() {
      this.authService.logout();
  }



}
