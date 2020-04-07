import { Component, OnInit , ViewChild } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {EventService} from '../../../services/event.service';


@Component({
  selector: 'app-creators-and-events',
  templateUrl: './creators-and-events.component.html',
  styleUrls: ['./creators-and-events.component.scss']
})


export class CreatorsAndEventsComponent implements OnInit {
    displayedColumns: string[] = ['first_name', 'last_name', 'email', 'role'];
    dataSource: any = new MatTableDataSource();
    users: any;
    events: any;
    isLoading = true;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserService , private eventService: EventService) { }

  ngOnInit(): void {
      this.getAllUsers();
      this.dataSource.paginator = this.paginator;
      this.getAllEvent();
  }

    getAllUsers() {
    this.userService.getAllUsers().then((res) => {
        console.log(res);
        this.dataSource = res;
        this.users = res;
        this.isLoading = false;
    });
}

    getAllEvent() {
      this.eventService.getEvents().then((res) => {
         console.log(res);
         this.events = res;
      });
    }

}
