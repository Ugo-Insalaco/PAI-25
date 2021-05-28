import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ConfigService } from '../services/config.service';
import { GlobalStorageService } from '../services/globalStorage.service';
import { BackendService } from '../services/backend.service';
import { ProjectComponent } from '../project/project.component';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){}
  @Input() tab; //numero de la page (donc de la section)
  @Input() id_question;
  @Input() niveau //indique de la combientième question il s'agit dans la section (utile pour la gestion des modifications des réponses par l'utilisateur)
  @Input() solution

  admin = true;
  type: string;
  question: string; //contenu de la question
  info: string;
  reponses = [] //id et contenu des réponses à afficher
  id_answer: number; //id de la réponse de l'utilisateur
  answer: string; //contenu de la réponse de l'utilisateur 
  next = ""; //id de la question suivante
  all_iot = [];
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.reponses=[];
    this.backend.GET(`/api/questions/${this.id_question}?include=reponse`, e=>{
      this.question = e.data[0].included.text[0].content;
      this.type = e.data[0].fields.type;
      for (let i = 0; i < e.data[0].included.reponse.length; i++) {
        const id_rep = e.data[0].included.reponse[i].id_reponse;
        const rep = e.data[0].included.reponse[i].subIncluded.text.content
        this.reponses = this.reponses.concat([{"id": id_rep, "reponse": rep}])
      }

      this.info = e.data[0].fields.info
      // if (this.info) {
      //   this.backend.GET(`/api/texts/${this.info}`, e=>{
      //     this.info=e.data[0].fields.text
      //   })        
      // }

      if (this.type == "select_all_iot") {
        this.backend.GET(`/api/products`, e=>{
          for (let i = 0; i < e.data.length; i++) {
            this.all_iot = this.all_iot.concat([e.data[i]])
          }
        })
      }
    });
    
    if (this.id_question && changes.id_question) {
      if (changes.id_question.currentValue != changes.id_question.previousValue) {
        this.answer = "";
        this.next="";
      }
    }


     

  }

  onAnswer(){
    //Pour les questions type radio, on récupère la réponse correspondant à l'id sélectionné :
    if (this.type == "radio") {
      for (let i = 0; i < this.reponses.length; i++) {
        if (this.reponses[i].id == this.id_answer) {
          this.answer = this.reponses[i].reponse
        }        
      }
    }
    // if (this.type == "number" || this.type == "text" || this.type=="select_all_iot") {
    //   console.log("ON EST LA")
    //   for (let i = 0; i < this.reponses.length; i++) {
    //     console.log("on cherche correspondance entre "+this.reponses[i].reponse+" et "+this.answer)
    //     if (this.reponses[i].reponse == this.answer) {
    //       this.id_answer = this.reponses[i].id
    //       console.log("on devrait tenter une requete à la réponse d'id "+this.id_answer)
    //     }
    //   }
    // }

    //Pour les questions type number et text, on récupère l'id de la réponse (une seule réponse pour ce type de question)
    //On ajoute les question de type select si on considère que toutes les réponses qu'on peut sélectionner ont la même question_suivante (donc peu importe de quelle réponse on prend l'id -> on prend arbitrairement la premiere)
    if (this.type == "number" || this.type == "text" || this.type == "select" || this.type == "select_all_iot") { 
      this.id_answer = this.reponses[0].id
    }


    // //Pour les questions type select, on récupère l'id de la première réponse (plusieurs réponses possibles pour ce type de question)
    // if (this.type == "select") {
    //   for (let i = 0; i < this.reponses.length; i++) {
    //     if (this.reponses[i].reponse == this.answer[0]) {
    //       this.id_answer = this.reponses[i].id
    //     }
    //   }
    // }

  this.backend.GET(`/api/reponses/${this.id_answer}`, e=>{
    this.next = e.data[0].fields.question_suivante;

    var projectJSON = this.globalStorage.get("projet");
    var project = JSON.parse(projectJSON);
    var exists = false //indique si la question a déjà été répondue (donc s'il s'agit d'une modification)

    for(var i= 0; i < project.length; i++){
      if (project[i].id_question == this.id_question && project[i].partie == this.tab && project[i].niveau == this.niveau) {
        //si cette question existe déjà dans "projet" à ce niveau dans la section 
        //Alors il s'agit d'une MODIFICATION de la part de l'utilisateur
        exists = true
        //Donc on met donc à jour la réponse :
        project[i].id_reponse = this.id_answer
        project[i].reponse = this.answer
        for (let j = 0; j < project.length; j++) {
          if (project[j].partie == this.tab && project[j].niveau == this.niveau+1 && project[j].id_question != this.next) {
            //Si la question au niveau d'en dessous n'est pas la même que la nouvelle question suivante
            //Alors la question suivante va changer
            //Donc toutes les réponses déjà existantes qui suivaient la question modifiée (càd niveau en dessous) doivent être supprimées :
            for (let k = 0; k < project.length; k++) {
              if (project[k].partie == this.tab && project[k].niveau > this.niveau) {
                project.splice(k)
              }     
            }            
          }
        }
      } 
    }
    if (!exists) {
      //s'il ne s'agit pas d'une modification, on ajoute la reponse dans "projet"
      var reponse = {
        "partie": this.tab,
        "id_question": Number(this.id_question), 
        "question": this.question,
        "id_reponse": Number(this.id_answer), 
        "reponse": this.answer,
        "niveau": this.niveau,
        "solution": this.solution
      };
      project.push(reponse);
    }
    this.globalStorage.set("projet", project) //mise à jour de la variable globale projet
  })

  //si c'est une question nb_iot, on détermine les refs et nombres des iot correspondants
  if (this.info=="nb_iot") {
    console.log("on entre là")
    this.backend.GET(`/api/nombre_refs`, e=>
    console.log(e))
  }

  }


}