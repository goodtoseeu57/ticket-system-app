import {Component, OnInit} from '@angular/core';
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
    hide = true;
    commonErrors = false;
    registerForm = new FormGroup({
        first_name: new FormControl('', Validators.required),
        last_name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        role: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private formBuilder: FormBuilder, private apiService: ApiService,
                private router: Router, private snackBar: MatSnackBar) {
    }

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
        if (this.validateEmail() && this.validatePassword()) {
            console.log(this.registerForm.value);
            this.apiService.post('register', this.registerForm.value).then((res: any) => {
                console.log(res);
                this.router.navigateByUrl('/public/login');
                this.openSnackBar(res.data, 'successCssSnackBar');
            }, (error) => {
                this.openSnackBar(error.error.errorMessage, 'failureCssSnackBar');
            });
        } else  {
            console.log('validate works');
            this.commonErrors = true;
        }


    }

    openSnackBar(message, cssClass) {
        this.snackBar.open(message, '', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: [cssClass]
            }
        );
    }

    validateEmail() {
        const email = this.registerForm.value.email;
        console.log(new RegExp('^\\S+@\\S+$').test(email));
        if (!new RegExp('^\\S+@\\S+$').test(email)) {
            return false;
        }
        return true;
    }

    validatePassword() {
        const password = this.registerForm.value.password;
        console.log(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})').test(password));
        if (!new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})').test(password)) {
            return false;
        }
        return true;

    }

}
