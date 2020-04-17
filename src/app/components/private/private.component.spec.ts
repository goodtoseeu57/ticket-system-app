import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivateComponent } from './private.component';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

describe('PrivateComponent', () => {
  let component: PrivateComponent;
  let fixture: ComponentFixture<PrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateComponent ] ,
        imports: [ MatMenuModule , MatSelectModule , MatFormFieldModule , MatInputModule] ,
        providers: [
            {provide: AuthService , useClass: AuthServiceStub},
            {provide: UserService , useClass: UserServiceStub}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


class AuthServiceStub {

}

class UserServiceStub {
    getCurrentUser(id) {
        return new Promise((resolve, reject) => {});
    }
}
