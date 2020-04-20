import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../../services/event.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EventModel} from '../../../models/Event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    event: EventModel;
    rating = 20;
    availableEvent = false;

  constructor(private activatedRoute: ActivatedRoute , private eventService: EventService , private snackBar: MatSnackBar) { }

    formatLabel(value: number) {
        if (value >= 10) {
            return Math.round(value / 10) + `🍕`;
        }

        return value;
    }

  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe((response) => {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getEvent(id);
     });
  }

  getEvent(id) {
      this.eventService.getEvent(id).then((res: any) => {
          this.event = res;
          this.availableEvent = true;
      });
  }

    buyTicket(event) {
        this.eventService.buyTicketEvent(event).then((res: any) => {
            console.log(res.errorMessage);
            this.openSnackBar(res.errorMessage , 'successCssSnackBar');
        } , (err) => {
            console.log(err.error);
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
