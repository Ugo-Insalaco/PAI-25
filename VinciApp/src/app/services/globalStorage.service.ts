import { Injectable } from '@angular/core';
import defaultStorage from './defaultStorage.json';

@Injectable()
export class GlobalStorageService{
    
    default = defaultStorage
    constructor(){
        // localStorage.setItem('Test', 'test')
        // console.log(localStorage.getItem('Bonjour')==undefined)
        Object.keys(this.default)
        .forEach(key=>{
            let value = JSON.stringify(this.default[key])
            if(localStorage.getItem(key)===null){
                localStorage.setItem(key, value)
            }
        })
    }

    public get(key: string){
        let value = localStorage.getItem(key)
        if(value===null){
            return "Valeur non trouvée"
        }
        else{
            return value;
        }
    }

    public set(key: string, value: any)
    {
        if(localStorage.getItem(key)===null){
            return "La valeur n'existe pas par défault"
        }
        else{
            localStorage.setItem(key, JSON.stringify(value))
        }
    }

    public reset(){
        Object.keys(this.default)
        .forEach(key=>{
            let value = JSON.stringify(this.default[key])
            if(localStorage.getItem(key)===null){
                localStorage.setItem(key, value)
            }
        })
    }
}