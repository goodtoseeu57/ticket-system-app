import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../../services/event.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.scss']
})
export class BookEventComponent implements OnInit {
    selected = 'Rock';

    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 37.75;
    lng = -122.41;

    eventForm = new FormGroup({
       location: new FormControl('' , Validators.required),
       concertType: new FormControl('' , Validators.required),
        tickets: new FormControl('' , Validators.required),
       date: new FormControl('' , Validators.required),
    });
  constructor(private formBuilder: FormBuilder , private eventService: EventService , private snackBar: MatSnackBar) { }

  ngOnInit(): void {
      this.eventForm = this.formBuilder.group({
              location: [''],
              concertType: [''],
              tickets: [''],
              date: [''],
              id: ['']
      });

      // @ts-ignore
      mapboxgl.accessToken = environment.mapToken;
      this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: 13,
          center: [this.lng, this.lat]
      });
  }

    onSubmit() {
      const id = localStorage.getItem('id');
      console.log(id);
      this.eventForm.value.id = id;
      console.log(this.eventForm.value);
      const Date = this.eventForm.value.date;
      this.eventService.postEvent(this.eventForm.value).then((res: any) => {
          console.log(res);
          this.openSnackBar(res.data , 'successCssSnackBar');
      } , (err) => {
          console.log(err);
          this.openSnackBar( err.error.errorMessage , 'failureCssSnackBar');
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
