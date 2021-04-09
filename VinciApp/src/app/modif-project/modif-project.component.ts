import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ConfigService } from '../services/config.service';
import { GlobalStorageService } from '../services/globalStorage.service';
import { BackendService } from '../services/backend.service';
import { ProjectComponent } from '../project/project.component';


@Component({
  selector: 'app-modif-project',
  templateUrl: './modif-project.component.html',
  styleUrls: ['./modif-project.component.css']
})
export class ModifProjectComponent implements OnInit {
  
  constructor(private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){}
  @Input() tab; //numero de la page (donc de la section)
  @Input() id_question;
  @Input() id_solution;

  //type: string;
  //question: string; //contenu de la question
  //reponses = [] //id et contenu des réponses à afficher
  //id_answer: number; //id de la réponse de l'utilisateur
  //answer: string; //contenu de la réponse de l'utilisateur
  all_questions =[]; //id de toutes les questions de la section
  seen = [] //liste des questions qu'on a déjà traité, pour éviter les boucles infines
  questions_existantes: any; //liste de toutes les questions possibles pour le choix de la 1ere question de chaque section
  id_question_0_init: number //1ere question de la première section, valeur initiale (à modifier)
  id_question_1_init: number
  id_question_2_init: number 
  id_question_3_init: number
  id_question_0: number //1ere question de la première section après modif
  id_question_1: number 
  id_question_2: number 
  id_question_3: number 

  ngOnInit(): void {
    //Récupération de toutes les questions de la section
    this.all_questions = [this.id_question];
    this.addQuestionsAfter(this.id_question)

    //Récupération de toutes les questions existantes dans la bdd
    this.backend.GET(`/api/questions`, e=>{
      this.questions_existantes=e.data
    })

    //Récupération des premières questions de chaque section :
    this.backend.GET(`/api/solutions/${this.id_solution}?include=section_question`, e=>{
      for (let i = 0; i < e.data[0].included["section_question"].length; i++) {
        const id_section = e.data[0].included["section_question"][i].id_section;
        this.backend.GET(`/api/sections/${id_section}`, e2=>{
            if (e2.data[0].fields.position==0) {
              this.id_question_0 = e.data[0].included["section_question"][i].id_question
              this.id_question_0_init = this.id_question_0
              //console.log(this.id_question_0)                
            }
            if (e2.data[0].fields.position==1) {
              this.id_question_1 = e.data[0].included["section_question"][i].id_question 
              this.id_question_1_init = this.id_question_1
              //console.log(this.id_question_1)               
            }
            if (e2.data[0].fields.position==2) {
              this.id_question_2 = e.data[0].included["section_question"][i].id_question
              this.id_question_2_init = this.id_question_2
              //console.log(this.id_question_2)                
            }
            if (e2.data[0].fields.position==3) {
              this.id_question_3 = e.data[0].included["section_question"][i].id_question  
              this.id_question_3_init = this.id_question_3
              //console.log(this.id_question_3)              
            }
          })
      }
      
  })


  }

  addQuestionsAfter(id) { 
    // fonction récursive pour récupérer toutes les "questions_suivantes" possibles à partir d'une question
    
    this.seen = this.seen.concat([id])
    this.backend.GET(`/api/questions/${id}?include=reponse`, e=>{
      for (let i = 0; i < e.data[0].included["reponse"].length; i++) {
        var next = JSON.stringify(e.data[0].included["reponse"][i].question_suivante)
        //const id_rep = e.data[0].included["reponse"][i].id_reponse;
        //this.backend.GET(`/api/reponses/${id_rep}`, e2=>{
          //const next = e2.data[0].fields.question_suivante;
        if (next != 'null' && this.all_questions.indexOf(next)==-1) {
          this.all_questions = this.all_questions.concat([next]);
          if (this.seen.indexOf(next) == -1) { //on traite la question uniquement si elle n'a pas déjà été traitée
            this.addQuestionsAfter(next)
          }
        }
        //});
      }
    });
  }

  onModifProject() { //modification de la première question de la section 
    
    if (this.tab==0) {
      if (this.id_question_0_init != this.id_question_0) {
        var id_question_init = this.id_question_0_init
        var new_id_question = this.id_question_0        
      }
    }

    if (this.tab==1) {
      if (this.id_question_1_init != this.id_question_1) {
        var id_question_init = this.id_question_1_init
        var new_id_question = this.id_question_1      
      }
    }

    if (this.tab==2) {
      if (this.id_question_2_init != this.id_question_2) {
        var id_question_init = this.id_question_2_init
        var new_id_question = this.id_question_2       
      }
    }

    if (this.tab==3) {
      if (this.id_question_3_init != this.id_question_3) {
        var id_question_init = this.id_question_3_init
        var new_id_question = this.id_question_3     
      }
    }

    if (typeof new_id_question != undefined) {
      console.log(new_id_question)

      //suppression de l'ancienne relation
      let body_delete = {
        id_question: id_question_init,
        id_section: this.tab+1
      }
      console.log(body_delete)
      console.log(this.id_solution)
      this.backend.DELETE_RELATION(`/api/solutions/${this.id_solution}/relationships/section_question`, body_delete, res=>{
        console.log(res)
      })

      //création de la nouvelle relation
      // let body_new = {
      //   id_question: new_id_question,
      //   id_section: this.tab+1
      // }
      // this.backend.POST(`/api/solutions/${this.id_solution}/relationships/section_question`, body_new, res=>{})

    }

  }

  // onAnswer(){
  //   if (this.type == "radio") {
  //     // this.backend.GET(`/api/reponses/${this.id_answer}`, e=>{
  //     //   this.answer = e.data[0].included["text"][0].content;
  //     // })
  //     for (let i = 0; i < this.reponses.length; i++) {
  //       if (this.reponses[i].id == this.id_answer) {
  //         this.answer = this.reponses[i].reponse
  //       }        
  //     }
  //   }
  //   if (this.type == "number" || this.type == "text" || this.type=="select_all_iot") {
  //     for (let i = 0; i < this.reponses.length; i++) {
  //       if (this.reponses[i].reponse == this.answer) {
  //         this.id_answer = this.reponses[i].id
  //       }
  //     }
  //   }
  //   if (this.type == "select") { //gestion des cas où il peut y avoir plusieurs réponses -> on prend l'id de la première
  //     for (let i = 0; i < this.reponses.length; i++) {
  //       if (this.reponses[i].reponse == this.answer[0]) {
  //         this.id_answer = this.reponses[i].id
  //       }
  //     }
  //   }

  //   var projectJSON = this.globalStorage.get("projet");
  //   var project = JSON.parse(projectJSON);
  //   var exists = false;
  //   for(var i= 0; i < project.length; i++){
  //     if (project[i].id_question == this.id_question) {
  //       exists = true;
  //       project[i].id_reponse = this.id_answer
  //       project[i].reponse = this.answer
  //     }
  //   }
  //   if (exists == false) {
  //     var reponse = {
  //       "partie": this.tab,
  //       "id_question": this.id_question, 
  //       "question": this.question,
  //       "id_reponse": this.id_answer, 
  //       "reponse": this.answer
  //     };
  //     project.push(reponse);
  //   }
  // this.globalStorage.set("projet", project) //mise à jour de la variable globale projet

  // //renvoie une erreur si il y a pas de question suivante, mais c'est pas grave
  // this.backend.GET(`/api/reponses/${this.id_answer}?include=question_suivante`, e=>{
  //   this.next = e.data[0].fields.question_suivante;
  //   console.log(this.next)
  //   })
  // }

 }