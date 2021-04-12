import { componentFactoryName } from '@angular/compiler';
import { Input, OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { GlobalStorageService } from '../services/globalStorage.service'
import { BackendService } from '../services/backend.service';
import { AuthService } from '../services/auth.service';

import {Router} from '@angular/router';

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit{
    complete: boolean
    selectedTab: any
    backendMessage: String
    nomsolution: string;
    questions = [];
    modif = false;
    admin!: boolean;
    id_solution: number;
    id_question_0: number //1ere question de la première section
    id_question_1: number //1ere question de la deuxième section
    id_question_2: number //1ere question de la troisième section
    id_question_3: number //1ere question de la quatrième section (ajouter un commentaire)
    nom_sec1: string //nom de la première section
    nom_sec2: string;
    nom_sec3: string;
    nom_sec4: string;

    constructor(private router: Router,
                private backend: BackendService, 
                private config: ConfigService, 
                private globalStorage: GlobalStorageService,
                private auth: AuthService){
        this.auth.isLoggedIn(res => {
            this.admin = res;
        });
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
        this.id_solution = this.getIdSolution();

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
                        //console.log(this.id_question_0)                
                    }
                    if (e2.data[0].fields.position==1) {
                        this.id_question_1 = e.data[0].included["section_question"][i].id_question 
                        //console.log(this.id_question_1)               
                    }
                    if (e2.data[0].fields.position==2) {
                        this.id_question_2 = e.data[0].included["section_question"][i].id_question
                        //console.log(this.id_question_2)                
                    }
                    if (e2.data[0].fields.position==3) {
                        this.id_question_3 = e.data[0].included["section_question"][i].id_question  
                        //console.log(this.id_question_3)              
                    }
                })
            }
            
        })

        //Récupération des noms des parties
        this.backend.GET(`/api/sections/1`, e=>{
            this.nom_sec1 = e.data[0].included.text[0].name
        })
        this.backend.GET(`/api/sections/2`, e=>{
            this.nom_sec2 = e.data[0].included.text[0].name
        })
        this.backend.GET(`/api/sections/3`, e=>{
            this.nom_sec3 = e.data[0].included.text[0].name
        })
        this.backend.GET(`/api/sections/4`, e=>{
            this.nom_sec4 = e.data[0].included.text[0].name
        })
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
        nom = nom.split('$').pop();
        nom = nom.replace(/-/gi, " "); // Remplace - par espace
        nom = nom.replace(/_/gi, "'"); // Remplace _ par '
        nom = nom.replace(/%2528/gi, "(")
        nom = nom.replace(/%2529/gi, ")")
        nom = nom.charAt(0).toUpperCase() + nom.slice(1); // Majuscule pour 1er mot
        nom = nom.replace(/%C3%A9/gi, "é");
        return nom;
    }

    getIdSolution(){
        var id = this.router.url.split('/').pop();
        id = id.split('$')[0];
        return Number(id);
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

    onQuit(){
        this.modif = false;
        location.reload()
    }

    onCreerQuestion(){
        this.router.navigate(["new-question"]);
    }

    onCreerProjet(){
        this.router.navigate(["new-project"]);
    }

    onSupprimerQuestion(){
        this.router.navigate(["delete-question"]);
    }

}