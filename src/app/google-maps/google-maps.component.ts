import { Component } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google.maps.component.html',
  styles: [
    `
      agm-map {
        height: 300px;
      }
    `
  ]
})
export class GoogleMapsComponent {
  lat = 52.494341999999996;
  lng = 13.4230088;
  zoom = 10;
}
