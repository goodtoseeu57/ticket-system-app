import {Component, Input, OnInit} from '@angular/core';
import {EventService} from '../../../services/event.service';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-book-ticket',
    templateUrl: './book-ticket.component.html',
    styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
    events: any;
    constructor(private eventService: EventService , private snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this.eventService.getEvents().then((res) => {
            this.events = res;
        });
    }


    buyTicket(event) {
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
