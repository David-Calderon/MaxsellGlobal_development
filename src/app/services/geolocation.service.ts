import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }


  devolverLatitud(){

  return window.navigator.geolocation
  }
}
