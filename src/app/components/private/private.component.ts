import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import { EventService } from 'src/app/services/event.service';
import { EventModel } from 'src/app/models/Event';

@Component({
    selector: 'app-private',
    templateUrl: './private.component.html',
    styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
    user: User;
    firstLetter: string;
    events: EventModel;
    stockObj: any;

    constructor(private authService: AuthService, private userService: UserService , private eventService: EventService) {
    }

    ngOnInit(): void {
        this.getCurrentUser();
        this.eventService.getEvents().then((res: EventModel) => {
            this.events = res;
        });
    }

    getCurrentUser() {
        const id = localStorage.getItem('id');
        this.userService.getCurrentUser(id).then((res: User) => {
            this.user = res;
            console.log(this.user);
            this.stockObj = this.user;
            this.firstLetter = this.user.first_name.substring(0, 1).toUpperCase();
        });

    }

    logout() {
        this.authService.logout();
    }

    darkMode() {
        console.log('dark mode');
    }


}
