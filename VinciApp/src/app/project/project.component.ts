import { componentFactoryName } from '@angular/compiler';
import { Input, OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { GlobalStorageService } from '../services/globalStorage.service'
import { BackendService } from '../services/backend.service';
import { AuthService } from '../services/auth.service';
import {EmailService} from '../services/email.service'

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProjectResumeComponent } from '../project-resume/project-resume.component';
import {Title} from '@angular/platform-browser';

import {Router} from '@angular/router';

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit{
    complete: boolean
    selectedTab: any
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

    dictFR = {
      'dim': 'Dimensionnement de votre projet',
      'nextpage': 'Page suivante',
      'previouspage': 'Page précédente',
      'val': 'Valider',
      'info': 'Les informations renseignées vont être envoyées à Vinci Facilities.'
    }
    dictEN = {
      'dim': 'Sizing your project',
      'nextpage': 'Next page',
      'previouspage': 'Previous page',
      'val': 'Validate',
      'info': 'Provided information will be sent to Vinci Facilities.'
    }
    dictTexts = {};

    constructor(private router: Router,
                private backend: BackendService,
                private config: ConfigService,
                public dialog: MatDialog,
                private globalStorage: GlobalStorageService,
                private email: EmailService,
                private auth: AuthService){
        this.auth.isLoggedIn(res => {
            this.admin = res;
        });
    }


    ngOnInit(){
        this.dictTexts = this.globalStorage.get('langage')=='"FRA"'? this.dictFR : this.dictEN;

        this.complete=true
        this.selectedTab=0

        this.globalStorage.set("projet", []) //initialisation de la variable globale projet
        this.globalStorage.set("products", []) //initialisation de la variable globale products (quantité et ref des iot)

        this.nomsolution = this.getNomSolution();
        this.id_solution = this.getIdSolution();

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
            this.questions = JSON.parse(this.globalStorage.get("projet"))
            console.log(this.questions)
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

    onModifIoT(){
        this.router.navigate(["modif-iot/",this.id_question_0+"$"+this.nomsolution]);
    }

    // Boîte de dialogue + téléchargement PDF comme pour le formulaire de contact :
    onSubmit_resume(){
        const dialogRef = this.dialog.open(ProjectResumeComponent,{data:JSON.parse(this.globalStorage.get("projet"))});
    }

    // Juste envoi d'un mail lors de la validation :
    onSubmit_mail(){
        var input = confirm(this.dictTexts['info'])
        if (input) {
            var data = JSON.parse(this.globalStorage.get("projet"))
            this.email.sendEmail(data,
                res=>{
                  console.log(res)}
            )
        }
    }

}
