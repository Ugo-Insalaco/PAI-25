import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable()
export class BackendService {
    private message: String
    constructor(private http: HttpClient, private config: ConfigService){
        this.message="Bonjour du Backend";
        this.message= JSON.stringify(config.backend);
        this.config = config
        //this.config.langage = "ENG"
    }

    public getMessage(){
        return this.message
    }

    public GET(url: string, callback: Function) {
        this.http.get(this.config.backend.url_api+url, {
            responseType: 'json'
        }) 
        .subscribe(e=>{
            console.log('requête GET effectuée')
            callback(e)
        })
    }

    public POST(url: string, body: Object, callback: Function){
        this.http.post(this.config.backend.url_api+url, body, {
            responseType:'json'
        })
        .subscribe(e=>{
            console.log('requête POST effectuée')
            callback(e)
        })
    }
}