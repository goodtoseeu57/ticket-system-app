import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../../models/User';


@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<UserActionsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit(): void {
      console.log(this.data);
  }

    closeDialog() {
      this.dialogRef.close();
    }

    editUser() {
      console.log(this.data);
    }

}
