import { Component, OnInit , ViewChild } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {EventService} from '../../../services/event.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog } from '@angular/material/dialog';
import {UserActionsComponent} from '../user-actions/user-actions.component';
import { User } from 'src/app/models/User';



@Component({
  selector: 'app-creators-and-events',
  templateUrl: './creators-and-events.component.html',
  styleUrls: ['./creators-and-events.component.scss']
})


export class CreatorsAndEventsComponent implements OnInit {
    displayedColumns: string[] = ['first_name', 'last_name', 'email', 'role' , 'actions' , 'settings'];
    filterOptions = [
        {value: 'Admin', viewValue: 'Creator'},
        {value: 'Customer', viewValue: 'Customer'}
    ];

    users: any;
    dataSource = new MatTableDataSource();
    events: any;
    isLoading = true;
    user: User;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserService , private eventService: EventService,
              private snackBar: MatSnackBar , public dialog: MatDialog) { }

  ngOnInit(): void {
      this.getAllUsers();
      this.getAllEvents();
      this.dataSource.paginator = this.paginator;
      this.getCurrentUser();
  }

    getCurrentUser() {
      const id = localStorage.getItem('id');
      this.userService.getCurrentUser(id).then((res: User) => {
          console.log(res);
          this.user = res;
      });

    }

    getAllUsers() {
    this.userService.getAllUsers().then((res: any) => {
        this.dataSource = res;
        this.users = res;
        this.isLoading = false;
    });
}

    getAllEvents() {
      this.eventService.getEvents().then((res: any) => {
         this.events = res;
      });
    }

    delete(user) {
        this.userService.deleteUser(user._id).then((res: any) => {
           console.log(res);
           this.openSnackBar( res.data , 'successCssSnackBar');
        } , (error) => {
            console.log(error.error);
            this.openSnackBar(error.error.errorMessage , 'failureCssSnackBar');
            });
    }

    buyTicket(event) {
      this.eventService.buyTicketEvent(event).then((res: any) => {
         console.log(res.errorMessage);
         this.openSnackBar(res.errorMessage , 'successCssSnackBar');
      } , (err) => {
          console.log(err.error);
          this.openSnackBar(err.error.errorMessage , 'failureCssSnackBar');
      });
    }

    openSnackBar(message , cssClass) {
      this.snackBar.open( message , '' , {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: [cssClass]
          }
      );
    }

    editUser(user) {
      console.log(user);
      this.dialog.open(UserActionsComponent  , {
         width: '650px',
        height: '600px',
          data: user,
      });

    }

      applyFilter(filterValue) {
      console.log(filterValue);
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }



}
