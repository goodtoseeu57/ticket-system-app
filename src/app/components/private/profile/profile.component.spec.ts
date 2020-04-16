import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from '../../../services/user.service';
import {EventService} from '../../../services/event.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileComponent],
            imports: [RouterTestingModule , MatSnackBarModule],
            providers: [
                {provide: UserService, useClass: UserServiceStub},
                {provide: EventService, useClass: EventServiceStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});


class UserServiceStub {
    getCurrentUser() {
        return new Promise((resolve, reject) => {});
    }
}

class EventServiceStub {
    getPurchasedTicketsOfUser() {
        return new Promise((resolve, reject) => {});
    }
}
