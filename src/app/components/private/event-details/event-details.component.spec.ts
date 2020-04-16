import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsComponent } from './event-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {EventService} from '../../../services/event.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let fixture: ComponentFixture<EventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsComponent ] ,
        imports: [RouterTestingModule , MatSnackBarModule] ,
        providers: [
            {provide: EventService , useClass: EventServiceStub}
            ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


class EventServiceStub {
    getEvent() {
        return new Promise((resolve, reject) => {});
    }
}
