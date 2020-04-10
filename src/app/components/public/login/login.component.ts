import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy {
    loginForm = new FormGroup({
        email: new FormControl('' , Validators.required) ,
        password: new FormControl('' , Validators.required)
    });
    hide = true;
  constructor(private formBuilder: FormBuilder , private router: Router , private authService: AuthService ,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
         email: [''],
         password: [''],
      });
  }

  onSubmit() {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).then((res: any) => {
          console.log(res);
          this.router.navigateByUrl('/private/book-ticket');
      } , (error) => {
          console.log(error);
          this.openSnackBar(error.error.errorMessage , 'failureCssSnackBar');
      });

  }


    openSnackBar(message , cssClass) {
        this.snackBar.open( message , '' , {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: [cssClass]
            }
        );
    }

  ngOnDestroy() {

  }

}
