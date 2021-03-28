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
    dateFilter: Date;
    sortFilter: string;
    selected = 'newest';
    filters: string;
    constructor(private eventService: EventService , private snackBar: MatSnackBar, private dialog: MatDialog) {}

    ngOnInit(): void {
        this.filters = '?desc=1';
        this.loadData(this.filters);
    }

    loadData(filters) {
        this.eventService.getEvents(filters).then((res) => {
            this.events = res;
        });
    }

    applyFilters(sortFilter) {
        console.log(sortFilter);
        if (sortFilter === 'older') {
           this.filters =  '?desc=1';
        } else {
            this.filters =  '?desc=-1';
        }
        this.loadData(this.filters + '&ticket=greaterThanZero');
    }

    filterDate(ev) {
        console.log(this.dateFilter);
        console.log('you call me');
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
