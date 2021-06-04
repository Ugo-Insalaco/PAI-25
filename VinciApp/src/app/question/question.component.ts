import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ConfigService } from '../services/config.service';
import { GlobalStorageService } from '../services/globalStorage.service';
import { BackendService } from '../services/backend.service';
import { ProjectComponent } from '../project/project.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
        
        // this.nb_iot = 0
        // var products = JSON.parse(this.globalStorage.get("products"))
        // for (let i = 0; i < products.length; i++) {
        //   this.nb_iot += products[i].nombre
        // }

        
        
      }

    });
    
    if (this.id_question && changes.id_question) {
      if (changes.id_question.currentValue != changes.id_question.previousValue) {
        this.answer = "";
        this.next="";
        this.data="";
      }
    }

    // this.sous_solution = this.globalStorage.get("sous-solution");     

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


    // //Pour les questions type select, on récupère l'id de la première réponse (plusieurs réponses possibles pour ce type de question)
    // if (this.type == "select") {
    //   for (let i = 0; i < this.reponses.length; i++) {
    //     if (this.reponses[i].reponse == this.answer[0]) {
    //       this.id_answer = this.reponses[i].id
    //     }
    //   }
    // }


  //this.backend.GET(`/api/reponses/${this.id_answer}`, e=>{

    // //on met à jour la sous-solution si besoin
    // if (e.data[0].fields.data=="sous_solution") {
    //   this.globalStorage.set("sous_solution", this.id_answer)
    // }


    //this.next = e.data[0].fields.question_suivante;
    //this.data = e.data[0].fields.data


    // //si c'est une question nb_iot, on détermine les refs et nombres des iot correspondants
    // if (this.info=="nb_iot") {
    //   this.backend.GET(`/api/nombre_refs/${this.id_question}`, e=>{
    //     for (let i = 0; i < e.data.length; i++) {
    //       var sous_solution = JSON.parse(this.globalStorage.get("sous_solution"))
    //       if (e.data[i].fields.sous_solution == sous_solution) {
    //         var product= {
    //           "id_product": e.data[0].fields.product,
    //           "nombre": e.data[0].fields.nombre_iot*this.answer,
    //           "index": project.length-1 //fait la correspondance avec la variable "project" (utile pour la modification de question)
    //         };
    //         products.push(product);
    //         this.globalStorage.set("products", products)
    //       }
    //     }
    //   })
    // }

  //})

  }

  // Reponse_automatique_reseau(){

  //   this.backend.GET(`/api/reponses/${this.reponses[0]}`, e=>{
  
  //     this.next = e.data[0].fields.question_suivante;
  
  //     var project = JSON.parse(this.globalStorage.get("projet"));
  //     var exists = false //indique si la question a déjà été répondue (donc s'il s'agit d'une modification)
  
  //     for(var i= 0; i < project.length; i++){
  //       if (project[i].id_question == this.id_question && project[i].partie == this.tab && project[i].niveau == this.niveau) {
  //         //si cette question existe déjà dans "projet" à ce niveau dans la section 
  //         //Alors il s'agit d'une MODIFICATION de la part de l'utilisateur
  //         exists = true
  //         //Donc on met donc à jour les variables project et products
  //         project[i].id_reponse = id_answer
  //         project[i].reponse = this.answer        
  //         for (let j = 0; j < project.length; j++) {
  //           if (project[j].partie == this.tab && project[j].niveau == this.niveau+1 && project[j].id_question != this.next) {
  //             //Si la question au niveau d'en dessous n'est pas la même que la nouvelle question suivante
  //             //Alors la question suivante va changer
  //             //Donc toutes les réponses déjà existantes qui suivaient la question modifiée (càd niveau en dessous) doivent être supprimées :
  //             for (let k = 0; k < project.length; k++) {
  //               if (project[k].partie == this.tab && project[k].niveau > this.niveau) {
  //                 project.splice(k)
  //               }     
  //             }            
  //           }
  //         }
  //       } 
  //     }
  //     if (!exists) {
  //       //s'il ne s'agit pas d'une modification, on ajoute la reponse dans "projet"
  //       var reponse = {
  //         "partie": this.tab,
  //         "id_question": Number(this.id_question), 
  //         "question": this.question,
  //         "id_reponse": Number(this.id_answer), 
  //         "reponse": this.answer,
  //         "niveau": this.niveau,
  //         "solution": this.solution,
  //         "info": this.info
  //       };
  //       project.push(reponse);
  
  //     this.globalStorage.set("projet", project) //mise à jour de la variable globale projet
  
  //   })



  // }


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

      //si c'est une question nb_iot, on incrémente le nombre d'IoT
      // if (this.info=="nb_iot") {
      //   this.backend.GET(`/api/nombre_refs/${this.id_question}`, e=>{
      //     for (let i = 0; i < e.data.length; i++) {
      //       //on récupère la donnée qui correspond à la sous-solution sélectionnée
      //       var sous_solution = project[0].id_reponse
      //       if (e.data[i].fields.sous_solution == sous_solution) { 
      //         this.nb_iot += e.data[0].fields.nombre_iot*this.answer 
      //       }
      //     }
      //   })
      // }
    }

    this.globalStorage.set("projet", project) //mise à jour de la variable globale projet
  }


}