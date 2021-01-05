import { Injectable } from '@angular/core';
import defaultconfig from './config.json';

@Injectable()
export class ConfigService{
    // config: Object
    // public backend: Object
    config = defaultconfig;
    backend = this.config.backend;
    langage = this.config.langage;
    constructor(){
    }
}