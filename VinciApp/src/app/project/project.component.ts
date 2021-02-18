import { componentFactoryName } from '@angular/compiler';
import { Input, OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { GlobalStorageService } from '../services/globalStorage.service'
import { BackendService } from '../services/backend.service';

import {Router} from '@angular/router';

@Component({
    selector: 'project',
    templateUrl: './project.component.html'  ,
    styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit{
    complete: boolean
    selectedTab: any
    backendMessage: String
    nomsolution: string;
    questions: any;
    constructor(private router: Router, private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){
    }


    ngOnInit(){
        this.complete=true
        this.selectedTab=0
        let body={
            text: 'Salutations'
        }
        this.globalStorage.reset_default("projet")
        this.questions = this.globalStorage.default["projet"]

<<<<<<< HEAD
        // this.backend.GET('/api/text/1', e=>{
        //     this.backendMessage = JSON.stringify(e)
        // })
=======
        this.backend.GET('/api/text/1', e=>{
            this.backendMessage = JSON.stringify(e)
        })
        this.nomsolution = this.getNomSolution();
>>>>>>> 23db89fb417c7656bb4b28275c3623d9ccf02a25
        // this.globalStorage.set('langage', 'ENG')
        // this.backendMessage =this.globalStorage.get('langage')
        this.backend.POST('/api/questions', body, res=>{
            console.log(res)
        })
    }

    changeHandler(e){
        this.selectedTab=e.selectedIndex
        if (this.selectedTab == 3) {
            var questions_string = this.globalStorage.get("projet")
            this.questions = JSON.parse(questions_string)           
        }
    }

    getNomSolution(){
        var nom = this.router.url.split('/').pop();
        nom = nom.replace(/-/gi, " "); // Remplace - par espace
        nom = nom.replace(/_/gi, "'"); // Remplace _ par '
        nom = nom.charAt(0).toUpperCase() + nom.slice(1); // Majuscule pour 1er mot
        nom = nom.replace(/%C3%A9/gi, "é");
        return nom;
    }

}