import { Injectable } from '@angular/core';
import config from './config.json';

@Injectable()
export class ConfigService{
    // config: Object
    // public backend: Object
    config = config;
    backend = this.config.backend;
    constructor(){
        // localStorage.setItem('Test', 'test')
        // console.log(localStorage.getItem('Bonjour')==undefined)
    }
}