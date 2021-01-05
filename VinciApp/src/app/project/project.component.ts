import { componentFactoryName } from '@angular/compiler';
import { OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service'
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
    constructor(private backend: BackendService, private config: ConfigService){
        this.config = config
    }

    ngOnInit(){
        this.complete=true
        this.selectedTab=0
        // let body={
        //     text: 'Salutations'
        // }
        // this.backend.POST('/api/text',body, e=>{
        //     this.backendMessage = JSON.stringify(e)
        // })
        //this.backendMessage =this.config.langage
    }

    changeHandler(e){
        this.selectedTab=e.selectedIndex
    }


}