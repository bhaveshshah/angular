import { Component, OnInit } from '@angular/core';
import data from './data';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google.maps.component.html',
  styles: [
    `
      agm-map {
        height: 300px;
      }
      .container {
        margin-top: 30px;
      }
    `
  ]
})
export class GoogleMapsComponent implements OnInit {
  lat = 52.529568;
  lng = 13.45678;
  zoom = 12;
  iconUrl = '../assets/rectangle.svg';
  hotels: any;

  constructor() {}
  ngOnInit() {
    this.hotels = data.hotel_options;
  }

  callme(price) {
    return (price as string) + '€';
  }
}
