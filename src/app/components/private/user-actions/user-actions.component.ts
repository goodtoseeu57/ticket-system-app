import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, DialogRole, MatDialogRef} from '@angular/material/dialog';
import { User } from '../../../models/User';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
    selector: 'app-user-actions',
    templateUrl: './user-actions.component.html',
    styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent implements OnInit {


    constructor(public dialogRef: MatDialogRef<UserActionsComponent>,
                @Inject(MAT_DIALOG_DATA) public data: User  ,  private userService: UserService , private snackBar: MatSnackBar) { }

    ngOnInit(): void {
        console.log(this.data);
    }

    closeDialog() {
        this.dialogRef.close();
    }

    editUser() {
        // tslint:disable-next-line: max-line-length
        const user = new User(this.data._id, this.data.first_name, this.data.last_name, this.data.email, this.data.role, this.data.tickets);
        console.log(user);
        this.userService.updateUser(user).then((res: any) => {
            console.log(res);
            this.openSnackBar(res.errorMessage , 'successCssSnackBar');
        }, (err) => {
            console.log(err);
            this.openSnackBar(err.error.errorMessage , 'failureCssSnackBar');
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


