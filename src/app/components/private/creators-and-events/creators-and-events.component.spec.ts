import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsAndEventsComponent } from './creators-and-events.component';
import {EventService} from '../../../services/event.service';
import {UserService} from '../../../services/user.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

describe('CreatorsAndEventsComponent', () => {
  let component: CreatorsAndEventsComponent;
  let fixture: ComponentFixture<CreatorsAndEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorsAndEventsComponent ] ,
        imports: [ MatSnackBarModule  , MatDialogModule] ,
        providers: [
            {provide: EventService , useClass: EventServiceStub} ,
            {provide: UserService , useClass: UserServiceStub}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorsAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


class EventServiceStub {
    getEvents() {
        return new Promise((resolve, reject) => {});
    }
}


class UserServiceStub {
    getAllUsers() {
        return new Promise((resolve, reject) => {});
    }

    getCurrentUser() {
        return new Promise((resolve, reject) => {});
    }
}
