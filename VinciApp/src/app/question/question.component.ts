import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ConfigService } from '../services/config.service';
import { GlobalStorageService } from '../services/globalStorage.service';
import { BackendService } from '../services/backend.service';
import { ProjectComponent } from '../project/project.component';
import { stringify } from '@angular/compiler/src/util';


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
  @Input() change_nb_iot //pour signaler un changement du nombre d'IoT (lorsque l'utilisateur modifie une réponse)

  admin = true;
  type: string;
  question: string; //contenu de la question
  info: string;
  reponses = [] //id et contenu des réponses à afficher
  id_answer: number; //id de la réponse de l'utilisateur
  answer: any; //contenu de la réponse de l'utilisateur 
  next = ""; //id de la question suivante
  all_iot = [];
  sous_solution: any;
  nb_iot: number //nombre d'IoT (utile pour les questions de type réseau)
  data: any;

  
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

      if (this.type=="reseau") {
        //Calcul du nombre total d'IoT en fonction des réponses précédentes
        this.nb_iot=0
        var project = JSON.parse(this.globalStorage.get("projet"))
        for (let i = 0; i < project.length; i++) {
          if (project[i].info == "sous_solution") {
            var sous_solution = project[i].id_reponse
          }
          if (project[i].info == "nb_iot") {
            this.backend.GET(`/api/nombre_refs`, e=>{
              for (let j = 0; j < e.data.length; j++) {
                if (e.data[j].fields.id_question == project[i].id_question) { //on récupère les données qui correspondent à la question
                  if (e.data[j].fields.sous_solution ==null || e.data[j].fields.sous_solution == sous_solution) { //on récupère les données qui correspondent à la sous-solution sélectionnée
                    this.nb_iot += e.data[j].fields.nombre_iot*project[i].reponse
                  }                                 
                }
              }
            console.log("Nombre d'IoT : "+this.nb_iot)
            //Réponse automatique si le nombre d'IoT est supérieur ou égal à 6
            if (this.nb_iot>=6) {
              console.log("réponse automatique")
              this.updateProject("Réponse automatique : réseau privé (nombre d'IoT supérieur ou égal à 6)", "Type de réseau :", 124, "Privé")
            } 
            })
          }
        }

        
        
      }

    });
    
    if (this.id_question && changes.id_question) {
      if (changes.id_question.currentValue != changes.id_question.previousValue) {
        this.answer = "";
        this.next="";
        this.data="";
      }
    }   

  }

  onAnswer(){

    if (this.info == "nb_iot") {
      this.change_nb_iot += 1 //signale aux questions suivantes un changement dans le nb d'iot
    }
    //Pour les questions type radio, on récupère la réponse correspondant à l'id sélectionné :
    if (this.type == "radio" || this.type == "reseau") {
      for (let i = 0; i < this.reponses.length; i++) {
        if (this.reponses[i].id == this.id_answer) {
          this.answer = this.reponses[i].reponse
        }        
      }
    }

    //Pour les questions type number et text, on récupère l'id de la réponse (une seule réponse pour ce type de question)
    //On ajoute les question de type select si on considère que toutes les réponses qu'on peut sélectionner ont la même question_suivante (donc peu importe de quelle réponse on prend l'id -> on prend arbitrairement la premiere)
    if (this.type == "number" || this.type == "text" || this.type == "select" || this.type == "select_all_iot") { 
      this.id_answer = this.reponses[0].id
    }

    if (this.type == "select_all_iot") {
      //this.answer = String(this.answer)
      this.data = this.answer.split('/')[0]
      var reponse = this.answer.split('/')[1]
      this.updateProject(reponse)
      this.backend.GET(`/api/reponses/${this.id_answer}`, e=>{
        this.next = e.data[0].fields.question_suivante;
        this.updateProject(reponse)
      })
    }
    else {
      this.backend.GET(`/api/reponses/${this.id_answer}`, e=>{
        this.next = e.data[0].fields.question_suivante;
        this.data = e.data[0].fields.data
        this.updateProject()
      })
    }


  }


  updateProject(rep=this.answer, qu=this.question, id_rep = Number(this.id_answer), data=this.data) {

    var project = JSON.parse(this.globalStorage.get("projet"));
    var exists = false //indique si la question a déjà été répondue (donc s'il s'agit d'une modification)

    for(var i= 0; i < project.length; i++){
      if (project[i].id_question == this.id_question && project[i].partie == this.tab && project[i].niveau == this.niveau) {
        //si cette question existe déjà dans "projet" à ce niveau dans la section 
        //Alors il s'agit d'une MODIFICATION de la part de l'utilisateur
        exists = true
        //Donc on met donc à jour les variables project et products
        project[i].id_reponse = id_rep
        project[i].reponse = rep    
        project[i].data = data 
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
        "question": qu,
        "id_reponse": id_rep, 
        "reponse": rep,
        "niveau": this.niveau,
        "solution": this.solution,
        "info": this.info,
        "data": data
      };
      project.push(reponse);
    }

    this.globalStorage.set("projet", project) //mise à jour de la variable globale projet
  }


}