import {Component, Input, OnInit} from '@angular/core';
import {EventService} from '../../../services/event.service';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
    selector: 'app-book-ticket',
    templateUrl: './book-ticket.component.html',
    styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
    events: any;
    constructor(private eventService: EventService , private snackBar: MatSnackBar, private dialog: MatDialog) {}

    ngOnInit(): void {
        this.eventService.getEvents().then((res) => {
            this.events = res;
        });
    }


    buyTicket(event) {
        this.dialog.open( CheckoutComponent, {
            width: '800px',
            height: '600px',
            data: event
        });
        // this.eventService.buyTicketEvent(event).then((res: any) => {
        //     console.log(res.errorMessage);
        //     this.openSnackBar(res.errorMessage , 'successCssSnackBar');
        // } , (err) => {
        //     console.log(err.error);
        //     this.openSnackBar(err.error.errorMessage , 'failureCssSnackBar');
        // });
        console.log(event);
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
