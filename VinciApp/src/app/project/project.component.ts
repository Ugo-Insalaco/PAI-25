import { componentFactoryName } from '@angular/compiler';
import { OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { BackendService } from '../backend.service';


@Component({
    selector: 'project',
    templateUrl: './project.component.html'  ,
    styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit{
    complete: boolean
    selectedTab: any
    constructor(private backend: BackendService){

    }

    ngOnInit(){
        this.complete=true
        this.selectedTab=0
    }

    changeHandler(e){
        this.selectedTab=e.selectedIndex
    }


}