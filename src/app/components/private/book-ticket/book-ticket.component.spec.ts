import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTicketComponent } from './book-ticket.component';
import {Test} from 'tslint';
import {ReactiveFormsModule} from '@angular/forms';
import {EventService} from '../../../services/event.service';

describe('BookTicketComponent', () => {
  let component: BookTicketComponent;
  let fixture: ComponentFixture<BookTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTicketComponent ] ,
        imports: [ReactiveFormsModule] ,
        providers: [
            {provide: EventService , useClass: EventServiceStub}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
     // TestBed.get(component);
     expect(component).toBeTruthy();
  });
});

class EventServiceStub {
    getEvents() {
        return new Promise((resolve, reject) => {});
    }
}
