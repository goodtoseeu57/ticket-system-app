import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEventComponent } from './book-event.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {EventService} from '../../../services/event.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('BookEventComponent', () => {
  let component: BookEventComponent;
  let fixture: ComponentFixture<BookEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEventComponent ] ,
        imports: [RouterTestingModule , ReactiveFormsModule , MatSnackBarModule , MatSelectModule , MatInputModule , MatFormFieldModule , BrowserAnimationsModule] ,
        providers: [
            {provide: EventService , useClass: EventServiceStub}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


class EventServiceStub {
}
