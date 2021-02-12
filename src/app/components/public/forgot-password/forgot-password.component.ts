import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {

    emailSent: boolean;
    email: string;

    constructor( private elementRef: ElementRef , private userService: UserService) { }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        console.log(this.elementRef.nativeElement);
        window.document.body.style.backgroundColor = 'green';
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f9f9f9';
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        
    }

    forgotPassword() {
        this.userService.postForgotPassword(this.email).then((res) => console.log(res));
        console.log(this.email);
     
    }

}
