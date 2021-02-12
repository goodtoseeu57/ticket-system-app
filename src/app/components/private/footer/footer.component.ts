import { Input , Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() public user: any;
  emailSent = false;
  email: string; 
  constructor() { }

  ngOnInit(): void {
      console.log(this.user);
  }

    newsLetterSubscription() {
        console.log('fuc');
    }

}
