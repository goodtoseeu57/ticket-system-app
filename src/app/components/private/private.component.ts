import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
    selector: 'app-private',
    templateUrl: './private.component.html',
    styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
    user: User;
    firstLetter: string;

    constructor(private authService: AuthService, private userService: UserService) {
    }

    ngOnInit(): void {
        this.getCurrentUser();
    }

    getCurrentUser() {
        const id = localStorage.getItem('id');
        this.userService.getCurrentUser(id).then((res: User) => {
            this.user = res;
            console.log(this.user);
            this.firstLetter = this.user.first_name.substring(0, 1).toUpperCase();
        });

    }

    logout() {
        this.authService.logout();
    }


}
