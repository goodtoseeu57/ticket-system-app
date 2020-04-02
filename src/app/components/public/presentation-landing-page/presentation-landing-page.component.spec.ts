import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationLandingPageComponent } from './presentation-landing-page.component';

describe('PresentationLandingPageComponent', () => {
  let component: PresentationLandingPageComponent;
  let fixture: ComponentFixture<PresentationLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
