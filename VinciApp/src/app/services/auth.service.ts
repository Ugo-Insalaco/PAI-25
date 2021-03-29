import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { GlobalStorageService } from './globalStorage.service';

@Injectable()
export class AuthService {
    private logged = false
    constructor(private backend: BackendService, private globalStorage: GlobalStorageService){
        
    }
    public isLoggedIn(){
        return this.logged
    }

    public login(username: string, password: string, success: Function, error: Function=null){     
        this.backend.POST(
            '/auth/login',
            {username: username, password:password},
            res=>{
                this.logged = true;
                console.log(res.csrf)
                this.globalStorage.set('vinci_csrf_token', res.csrf)
                success(res)
            },
            err=>{
                this.logged = false;
                this.globalStorage.reset_default('vinci_csrf_token')
                error(err)
            } )
    }

    public logout(){
        this.logged = false;
        this.globalStorage.reset_default('vinci_csrf_token')
    }
}