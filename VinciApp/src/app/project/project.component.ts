import { componentFactoryName } from '@angular/compiler';
import { Input, OnInit, ChangeDetectorRef } from '@angular/core';

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
    questions = [];
    modif = false;
    admin = true;
    id_solution = 14; // voir comment récupérer cet id !
    id_question_0: number //1ere question de la première section
    id_question_1: number //1ere question de la deuxième section
    id_question_2: number //1ere question de la troisième section
    id_question_3: number //1ere question de la quatrième section (ajouter un commentaire)

    constructor(private router: Router, private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService, private cd: ChangeDetectorRef){
    }


    ngOnInit(){
        this.complete=true
        this.selectedTab=0
        // let body={
        //     username: "le dieu",
        //     password:'je suis intelligent',
        // }

        this.globalStorage.set("projet", []) //initialisation de la variable globale projet
        this.globalStorage.set("iot", []) //initialisation de la variable globale iot (quantité et ref des iot)

        // this.backend.GET('/api/text/1', e=>{
        //     this.backendMessage = JSON.stringify(e)
        // })

        this.nomsolution = this.getNomSolution();

        // this.backend.POST('/auth/login', body, res=>{
        //     console.log(res)
        // })

        // this.backend.GET(`/api/solutions/${this.id_solution}?include=section_question`, e=>{
        //     e.data[0].included["section_question"][0].id_question
        // });

        //Récupération des premières questions de chaque section :
        this.backend.GET(`/api/solutions/${this.id_solution}?include=section_question`, e=>{
            for (let i = 0; i < e.data[0].included["section_question"].length; i++) {
                const id_section = e.data[0].included["section_question"][i].id_section;
                this.backend.GET(`/api/sections/${id_section}`, e2=>{
                    if (e2.data[0].fields.position==0) {
                        this.id_question_0 = e.data[0].included["section_question"][i].id_question
                        console.log(this.id_question_0)                
                    }
                    if (e2.data[0].fields.position==1) {
                        this.id_question_1 = e.data[0].included["section_question"][i].id_question 
                        console.log(this.id_question_1)               
                    }
                    if (e2.data[0].fields.position==2) {
                        this.id_question_2 = e.data[0].included["section_question"][i].id_question
                        console.log(this.id_question_2)                
                    }
                    if (e2.data[0].fields.position==3) {
                        this.id_question_3 = e.data[0].included["section_question"][i].id_question  
                        console.log(this.id_question_3)              
                    }
                })
            }
            
        })

        this.cd.detectChanges()
    }

    changeHandler(e){
        this.selectedTab=e.selectedIndex
        if (this.selectedTab == 3) {
            var questions_string = this.globalStorage.get("projet")
            this.questions = JSON.parse(questions_string)
        }
        this.modif=false
    }

    getNomSolution(){
        var nom = this.router.url.split('/').pop();
        nom = nom.replace(/-/gi, " "); // Remplace - par espace
        nom = nom.replace(/_/gi, "'"); // Remplace _ par '
        nom = nom.charAt(0).toUpperCase() + nom.slice(1); // Majuscule pour 1er mot
        nom = nom.replace(/%C3%A9/gi, "é");
        return nom;
    }

    //onModifProjet(){
        // Get selected solution and redirect to solution's page
        //var solution = this.nomsolution;
        //solution = solution.replace(/ /gi, "-"); // Remplace - par espace
        //solution = solution.replace(/'/gi, "_"); // Remplace _ par '
        //solution = solution.toLowerCase()
        //this.router.navigate(["modif-project/",solution]);
      //}
    
    onModifier(){
        this.modif = true;
    }

    onValiderModif(){
        this.modif = false;
    }

}