import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';
import {EventService} from '../../../services/event.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    public user: User;
    firstLetter: string;
    enableEditing = false;
    tickets: any;
    noTicketsAvailable: boolean;

  constructor(private userService: UserService , private eventService: EventService , private snackBar: MatSnackBar) { }

  ngOnInit(): void {
      this.getTicketsOfUser();
      this.getCurrentUser();
  }

     getCurrentUser() {
        const id = localStorage.getItem('id');
        this.userService.getCurrentUser(id).then((res: User) => {
           console.log(res);
           this.user = res;
        });
        this.firstLetter = this.user.first_name.substring(0, 1).toUpperCase();
    }

    enableEdit() {
      this.enableEditing = !this.enableEditing;
    }

  editProfile() {
      const user = new User(this.user._id ,  this.user.first_name , this.user.last_name , this.user.email , this.user.role , this.user.tickets);
      console.log(user);
      this.userService.updateUser(user).then((res) => {
          console.log(res);
      });
  }

  getTicketsOfUser() {
      this.eventService.getPurchasedTicketsOfUser().then((res) => {
        console.log(res);
        this.tickets = res;
        if (this.tickets.length > 0) {
            this.noTicketsAvailable = false;
        } else {
            this.noTicketsAvailable = true;
        }
      } , (err) => {
         this.noTicketsAvailable =  true;
          });

  }

  openSnackBar(message: string , data: string) {
      // this.snackBar.open({});

  }




}
