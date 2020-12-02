import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {
    private message: String
    constructor(){
        this.message="Bonjour du Backend"
    }

    public getMessage(){
        return this.message
    }
}