import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../../services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    event: any;

  constructor(private activatedRoute: ActivatedRoute , private eventService: EventService) { }

  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe((response) => {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getEvent(id);
     });
  }

  getEvent(id) {
      console.log(id);
      this.eventService.getEvent(id).then((res) => {
          this.event = res;
      });
  }

}
