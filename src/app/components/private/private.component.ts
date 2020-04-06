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

  ngOnInit(): void {
      const id = localStorage.getItem('id');
      this.userService.getCurrentUser(id).then((res) => {
          console.log(res);
          this.user = res;
          this.firstLetter = this.user.first_name.substring(0 , 1).toUpperCase();

      });

  }


  logout() {
      this.authService.logout();
  }

  refreshTokenTest() {
      this.apiService.refresh().then((res) => {
        console.log(res);
      });
  }

}
