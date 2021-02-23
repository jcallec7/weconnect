import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapInterface } from 'src/app/interface/map.interface';

@Injectable({
  providedIn: 'root'
})
export class ControlZoneService {

  httpOptions = {
    headers: new HttpHeaders().set(
      'Content-Type',
      'application/json'),
  };

  URL = 'http://34.123.99.236:8080';

  constructor(private httpClient: HttpClient) { }

  concatURL(subURL: string): string {
    return this.URL + subURL;
  }

  makePostRequest(
    URL: string,
    data: any,
    headers = this.httpOptions
  ): Observable<any> {
    return this.httpClient.post(URL, data, headers);
  }

  getMap(MapInterface: MapInterface): Observable<any> {

    const URL = this.concatURL('/api/admin/zoneAdminController/getControlZoneDtoList');

    return this.makePostRequest(URL, MapInterface, this.httpOptions);

  }

  
}
