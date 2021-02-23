import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInterface } from 'src/app/interface/login.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': 'Basic ' + btoa("parking_frontend:Edison_We_Connect_2021")}),
      
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

  postLogin(LoginInterface: LoginInterface): Observable<any> {

    const URL = this.concatURL('/oauth/token');
    console.log(LoginInterface)
    return this.makePostRequest(URL, LoginInterface, this.httpOptions);

  }


}
