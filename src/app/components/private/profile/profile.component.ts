import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    public user: any;
    firstLetter: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.userInfoSubject.subscribe((res) => {
         console.log(res);
         this.user = res;
         this.firstLetter = this.userService.getUserFirstLetter(this.user.first_name);
       });
  }


}
