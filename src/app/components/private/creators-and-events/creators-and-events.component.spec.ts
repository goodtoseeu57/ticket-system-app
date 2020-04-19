import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsAndEventsComponent } from './creators-and-events.component';
import {EventService} from '../../../services/event.service';
import {UserService} from '../../../services/user.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {User} from '../../../models/User';
import {By} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

describe('CreatorsAndEventsComponent', () => {
  let component: CreatorsAndEventsComponent;
  let fixture: ComponentFixture<CreatorsAndEventsComponent>;
  let nativeElement;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorsAndEventsComponent ] ,
        imports: [ MatSnackBarModule  , MatButtonModule, MatProgressSpinnerModule, MatSelectModule, MatDividerModule
            , MatToolbarModule ,  MatCardModule,   MatDialogModule] ,
        providers: [
            {provide: EventService , useClass: EventServiceStub} ,
            {provide: UserService , useClass: UserServiceStub},
            {provide: User , useClass: User}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorsAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
      TestBed.get(component);
      expect(component).toBeTruthy();
  });

  it('should role be equals to superAdmin' , () => {
      expect(nativeElement.querySelector('mat-spinner')).toBeFalse();
      expect(component.user.role).toEqual('superAdmin');
      fixture.detectChanges();
      expect(nativeElement.querySelector('mat-spinner')).toBeTrue();
  });
});


class EventServiceStub {
    getEvents() {
        return new Promise((resolve, reject) => {});
    }
}


class UserServiceStub {
    getAllUsers(): Promise<User> {
        return new Promise((resolve, reject) => {
            const user = new User('343435' , 'hris' , 'chris' , 'chris@chris' , 'superAdmin' , '45' );
            resolve(user);
        });
    }

    getCurrentUser() {
        return new Promise((resolve, reject) => {});
    }
}
