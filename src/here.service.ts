import { Injectable, ElementRef } from '@angular/core';

declare var H: any;

@Injectable({
  providedIn: 'root',
})
export class HereService {
  public platform: any;
  public geocoder: any;
  public map: any;
  public mapElement: ElementRef;

  public constructor() {
    this.platform = new H.service.Platform({
      app_id: 'APP-ID-HERE',
      app_code: 'APP-CODE-HERE',
    });
    this.geocoder = this.platform.getGeocodingService();
    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(this.mapElement.nativeElement, defaultLayers.normal.map, {
      zoom: '15',
      center: { lat: 'lat', lng: 'lng' },
    });
  }

  public getAddress(query: string) {
    return new Promise((resolve, reject) => {
      this.geocoder.geocode(
        { searchText: query },
        result => {
          if (result.Response.View.length > 0) {
            if (result.Response.View[0].Result.length > 0) {
              resolve(result.Response.View[0].Result);
            } else {
              reject({ message: 'no results found' });
            }
          } else {
            reject({ message: 'no results found' });
          }
        },
        error => {
          reject(error);
        }
      );
    });
  }

  public getAddressFromLatLng(query: string) {
    return new Promise((resolve, reject) => {
      this.geocoder.reverseGeocode(
        { prox: query, mode: 'retrieveAddress' },
        result => {
          if (result.Response.View.length > 0) {
            if (result.Response.View[0].Result.length > 0) {
              resolve(result.Response.View[0].Result);
            } else {
              reject({ message: 'no results found' });
            }
          } else {
            reject({ message: 'no results found' });
          }
        },
        error => {
          reject(error);
        }
      );
    });
  }
}
