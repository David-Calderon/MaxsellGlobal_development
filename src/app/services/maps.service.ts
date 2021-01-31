import { Injectable } from '@angular/core';
import { azurekey } from 'src/environments/environment';
import { GeolocationService } from './geolocation.service';
declare var atlas
@Injectable({
  providedIn: 'root'
})
export class MapsService {
  lat
  lng
  map:any
  key: string = azurekey.key;
  constructor(private geolocation:GeolocationService) { }


  initializeMap(){
    this.geolocation.devolverLatitud().getCurrentPosition(s=>{
      this.lat=s.coords.latitude
      this.lng=s.coords.longitude
       //Initialize a map instance.
  this.map = new atlas.Map('myMap', {
    center: [this.lng,this.lat],
    zoom: 20,
    authOptions: {
      authType: 'subscriptionKey',
      subscriptionKey: this.key
    }
  });

  //Wait until the map resources are ready.
  this.map.events.add('ready', () => {
    //Create a HTML marker and add it to the map.
    this.map.markers.add(new atlas.HtmlMarker({
      htmlContent:'<image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1717245/ylw-pushpin.png" style="pointer-events: none;" />',
      position:[ this.lng , this.lat],
      pixelOffset: [6, -15]
    }));
  });
  })
  }
}
