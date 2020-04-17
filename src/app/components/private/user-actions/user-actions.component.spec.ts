import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserActionsComponent} from './user-actions.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {UserService} from '../../../services/user.service';

describe('UserActionsComponent', () => {
    let component: UserActionsComponent;
    let fixture: ComponentFixture<UserActionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserActionsComponent],
            imports: [MatSnackBarModule, MatDialogModule, MatSnackBarModule, MatDividerModule],
            providers: [{provide: MatDialogRef, useValue: {}},
                {provide: MAT_DIALOG_DATA, useValue: []},
                {provide: UserService, useClass: UserServiceStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

class UserServiceStub {

}
