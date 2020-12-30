import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinicafront';
  lat = -12.05338809579491;
  lng = -77.08527221737053;
  zoom = 15;
  zoomOnClick = true;

   onChooseLocation(event){
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}
