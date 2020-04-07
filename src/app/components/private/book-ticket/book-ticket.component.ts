import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
    @Input() public user: any;
  constructor() { }

  ngOnInit(): void {
      console.log(this.user);

  }

}
