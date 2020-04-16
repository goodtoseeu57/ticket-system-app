import {Component, Input, OnInit} from '@angular/core';
import {EventService} from '../../../services/event.service';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-book-ticket',
    templateUrl: './book-ticket.component.html',
    styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
    events: any;
    constructor(private eventService: EventService) {}

    ngOnInit(): void {
        this.eventService.getEvents().then((res) => {
            console.log(res);
            this.events = res;
        });
    }

    buyTicket(event) {
        console.log(event);
        this.eventService.buyTicketEvent(event).then((res) => {
            console.log(res);
        });
    }


}
