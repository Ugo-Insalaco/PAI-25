import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { GlobalStorageService } from './globalStorage.service';

@Injectable({
    providedIn: 'root'
  })
export class BackendService {
    private message: String
    constructor(private http: HttpClient, private config: ConfigService, private globalStorage: GlobalStorageService){
        this.config = config
        
    }

    public GET(url: string, success: Function, error: Function=function(e){console.log(e)}) {
        this.http.get(this.config.backend.url_api+url, {
            headers: new HttpHeaders({
                "langage": this.globalStorage.get('langage'),
                "X-Csrf-Token": this.globalStorage.get("vinci_csrf_token").slice(1,-1)
            }),
            responseType: 'json',
            withCredentials: true
        })
        .subscribe(e=>{
            console.log('requête GET effectuée')
            success(e)
        },
        err=>{
            error(err)
        })

    }

    public POST(url: string, body: Object, success: Function, error: Function=function(e){console.log(e)}){
        this.http.post(this.config.backend.url_api+url, body, {
            headers: new HttpHeaders({
                "langage": this.globalStorage.get('langage'),
                "X-Csrf-Token": this.globalStorage.get("vinci_csrf_token").slice(1,-1)
            }),
            responseType:'json',
            withCredentials: true
        })
        .subscribe(e=>{
            console.log('requête POST effectuée')
            console.log(e)
            //callback(e)
            success(e)
        },
        err=>{
            error(err)
        })
    }

    public DELETE(url: string, success: Function, error: Function= function(e){console.log(e)}){
        this.http.delete(this.config.backend.url_api+url,{
            headers: new HttpHeaders({
                "langage": this.globalStorage.get('langage'),
                "X-Csrf-Token": this.globalStorage.get("vinci_csrf_token").slice(1,-1)
            }),
            responseType:'json',
            withCredentials: true
        })
        .subscribe(e=>{
            console.log('requête DELETE effectuée')
            success(e)
        },
        err=>{
            error(err)
        })
    }

    public DELETE_RELATION(url: string,body: Object, success: Function, error: Function= function(e){console.log(e)}){
        this.http.post(this.config.backend.url_api+url+'/delete', body,{
            headers: new HttpHeaders({
                "langage": this.globalStorage.get('langage'),
                "X-Csrf-Token": this.globalStorage.get("vinci_csrf_token").slice(1,-1)
            }),
            responseType:'json',
            withCredentials: true
        })
        .subscribe(e=>{
            console.log('requête DELETE effectuée')
            success(e)
        },
        err=>{
            error(err)
        })
    }

    public PATCH(url: string, body: Object, success: Function, error: Function=function(e){console.log(e)}){
        this.http.patch(this.config.backend.url_api+url, body,{
            headers: new HttpHeaders({
                "langage": this.globalStorage.get('langage'),
                "X-Csrf-Token": this.globalStorage.get("vinci_csrf_token").slice(1,-1)
            }),
            responseType:'json',
            withCredentials: true
        })
        .subscribe(e=>{
            console.log('requête PATCH effectuée')
            success(e)
        },
        err=>{
            error(err)
        })
    }
}
