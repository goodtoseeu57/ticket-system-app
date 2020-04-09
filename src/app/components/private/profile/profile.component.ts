import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    public user: User;
    firstLetter: string;
    enableEditing = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
     this.getCurrentUser();
  }

    async getCurrentUser() {
        const id = localStorage.getItem('id');
        this.user = await this.userService.getCurrentUser(id);
        this.firstLetter = this.user.first_name.substring(0, 1).toUpperCase();
    }

    enableEdit() {
      this.enableEditing = !this.enableEditing;
    }

  editProfile() {

      const user = new User(this.user._id ,  this.user.first_name , this.user.last_name , this.user.email , this.user.role);
      console.log(user);
      this.userService.updateUser(user).then((res) => {
          console.log(res);
      });
  }



}
