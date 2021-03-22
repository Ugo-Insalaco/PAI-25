import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ConfigService } from './config.service';



@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient, private config: ConfigService) {}

  httpGet(url) {
    return this.http.get(this.config.backend.url_api+url);
  }

 /* httpPost(url, user) {
    return this.http.post(url,user);
  }*/

  sendEmail(url,data) {
    return this.http.post(this.config.backend.url_api+url, data);
  }
}
