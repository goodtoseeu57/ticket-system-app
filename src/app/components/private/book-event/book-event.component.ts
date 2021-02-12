import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../../services/event.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@github/markdown-toolbar-element';

@Component({
    selector: 'app-book-event',
    templateUrl: './book-event.component.html',
    styleUrls: ['./book-event.component.scss']
})
export class BookEventComponent implements OnInit {
    selected = 'Rock';
    Editor = ClassicEditor;
    editorData : any;
    editorDataMarkDown: any;
    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 50.3755;
    lng = -4.14384;
    isTrackingUser = false;


    eventForm = new FormGroup({
        location: new FormControl('', Validators.required),
        concertType: new FormControl('', Validators.required),
        tickets: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
    });
    constructor(private formBuilder: FormBuilder, private eventService: EventService, private snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.eventForm = this.formBuilder.group({
            location: [''],
            concertType: [''],
            tickets: [''],
            date: ['']
        });

        console.log(this.eventForm.valid);

        // @ts-ignore
        mapboxgl.accessToken = environment.mapToken;
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: 13,
            center: [this.lng, this.lat]
        });

        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.addControl(new mapboxgl.FullscreenControl());
        new mapboxgl.Marker().setLngLat([this.lng, this.lat]).addTo(this.map);

    }

    onSubmit() {
        this.eventService.postEvent(this.eventForm.value).then((res: any) => {
            console.log(res);
            this.openSnackBar(res.data, 'successCssSnackBar');
        }, (err) => {
            console.log(err);
            this.openSnackBar(err.error.errorMessage, 'failureCssSnackBar');
        });
    }

    showCkeditor() {
        console.log(this.editorData);
    }


    openSnackBar(message, cssClass) {
        this.snackBar.open(message, '', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: [cssClass]
        }
        );
    }

    trackUser() {
        this.isTrackingUser = !this.isTrackingUser;
        this.map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            })
        );
    }

}




