import { componentFactoryName } from '@angular/compiler';
import { Input, OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { GlobalStorageService } from '../services/globalStorage.service'
import { BackendService } from '../services/backend.service';


@Component({
    selector: 'project',
    templateUrl: './project.component.html'  ,
    styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit{
    complete: boolean
    selectedTab: any
    backendMessage: String
    constructor(private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){
    }

    ngOnInit(){
        this.complete=true
        this.selectedTab=0
        let body={
            text: 'Salutations'
        }
        this.backend.GET('/api/text/1', e=>{
            this.backendMessage = JSON.stringify(e)
        })
        // this.globalStorage.set('langage', 'ENG')
        // this.backendMessage =this.globalStorage.get('langage')
    }

    changeHandler(e){
        this.selectedTab=e.selectedIndex
    }


}