import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-presentation-landing-page',
  templateUrl: './presentation-landing-page.component.html',
  styleUrls: ['./presentation-landing-page.component.scss']
})
export class PresentationLandingPageComponent implements OnInit {

    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 50.3755;
    lng = -4.14384;

  constructor() { }

  ngOnInit(): void {
      // @ts-ignore
      mapboxgl.accessToken = environment.mapToken;
      this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: 13,
          center: [this.lng, this.lat]
      });
  }

}
