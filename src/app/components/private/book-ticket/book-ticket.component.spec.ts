import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTicketComponent } from './book-ticket.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EventService} from '../../../services/event.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';

describe('BookTicketComponent', () => {
  let component: BookTicketComponent;
  let fixture: ComponentFixture<BookTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTicketComponent ] ,
        imports: [ReactiveFormsModule , MatSnackBarModule , MatFormFieldModule , MatDatepickerModule , MatInputModule , MatSelectModule , MatButtonModule] ,
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
     TestBed.get(component);
     expect(component).toBeTruthy();
  });
});

class EventServiceStub {
    getEvents() {
        return new Promise((resolve, reject) => {});
    }
}
