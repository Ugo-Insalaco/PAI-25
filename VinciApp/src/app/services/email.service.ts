import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BackendService } from './backend.service';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient,private backend: BackendService,) {}

  httpGet(url) {
    return this.http.get(url);
  }

 /* httpPost(url, user) {
    return this.http.post(url,user);
  }*/
  
  // public sendEmail(data, success: Function, error: Function=null){
  //   this.backend.POST(
  //       '/sendEmail',
  //       data,
  //       res=>{
  //           console.log("sucess")
  //       },
  //       err=>{
           
  //           error(err)
  //       } )
  // }

    public sendEmail(data, success: Function, error: Function=null){
    this.backend.POST(
        '/sendEmail',
        data,
        res=>{
          
        })
  }

  
}
