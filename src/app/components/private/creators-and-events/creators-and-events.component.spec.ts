import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsAndEventsComponent } from './creators-and-events.component';

describe('CreatorsAndEventsComponent', () => {
  let component: CreatorsAndEventsComponent;
  let fixture: ComponentFixture<CreatorsAndEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorsAndEventsComponent ]
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
