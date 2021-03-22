import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {}

  httpGet(url) {
    return this.http.get(url);
  }

 /* httpPost(url, user) {
    return this.http.post(url,user);
  }*/

  sendEmail(url, data) {
    return this.http.post(url, data);
  }
}
