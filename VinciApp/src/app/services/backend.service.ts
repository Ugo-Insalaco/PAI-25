import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { GlobalStorageService } from './globalStorage.service'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable()
export class BackendService {
    private message: String
    constructor(private http: HttpClient, private config: ConfigService, private globalStorage: GlobalStorageService){
        this.config = config
        
    }

    public getMessage(){
        return this.message
    }

    public GET(url: string, callback: Function) {
        this.http.get(this.config.backend.url_api+url, {
            headers: new HttpHeaders({
                langage: this.globalStorage.get('langage')
            }),
            responseType: 'json'
        }) 
        .subscribe(e=>{
            console.log('requête GET effectuée')
            callback(e)
        })
    }

    public POST(url: string, body: Object, callback: Function){
        this.http.post(this.config.backend.url_api+url, body, {
            headers: new HttpHeaders({
                langage: this.globalStorage.get('langage')
            }),
            responseType:'json'
        })
        .subscribe(e=>{
            console.log('requête POST effectuée')
            callback(e)
        })
    }

    public DELETE(url: string, callback: Function){
        this.http.delete(this.config.backend.url_api+url, {
            headers: new HttpHeaders({
                langage: this.globalStorage.get('langage')
            }),
            responseType:'json'
        })
        .subscribe(e=>{
            console.log('requête DELETE effectuée')
            callback(e)
        })
    }

    public PATCH(url: string, body: Object, callback: Function){
        this.http.patch(this.config.backend.url_api+url, body,{
            headers: new HttpHeaders({
                langage: this.globalStorage.get('langage')
            }),
            responseType:'json'
        })
        .subscribe(e=>{
            console.log('requête PATCH effectuée')
            callback(e)
        })
    }
}