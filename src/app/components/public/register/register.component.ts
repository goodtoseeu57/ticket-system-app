import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../services/api.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm = new FormGroup({
        first_name: new FormControl('' , Validators.required),
        last_name: new FormControl('' , Validators.required),
        email: new FormControl('' , Validators.required),
        role: new FormControl('' , Validators.required),
        password: new FormControl('' , Validators.required),
    });

  constructor(private formBuilder: FormBuilder , private apiService: ApiService ,
              private router: Router , private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            first_name: [''],
            last_name: [''],
            password: [''],
            email: [''],
            role: [''],
        });
  }

    onSubmit() {
        console.log(this.registerForm.value);
        this.apiService.post('register' , this.registerForm.value).then((res: any) => {
           console.log(res);
           this.router.navigateByUrl('/public/login');
           this.openSnackBar( res.data , 'successCssSnackBar');
        } , (error) => {
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
}
