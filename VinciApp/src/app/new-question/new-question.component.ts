import { componentFactoryName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { GlobalStorageService } from '../services/globalStorage.service'
import { BackendService } from '../services/backend.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  question: string; //énoncé de la question
  type: string //type de question
  info: string //contenu du commentaire (attribut 'info') pour la question
  nb_reponses = 1; //nombre de réponses, 1 par défaut
  reponses = Array; //Array type captured in a variable; énoncé des réponses
  questions_suivantes = new Array; //question suivante pour chaque réponse
  id_question: any; //id de la question créée
  questions_existantes: any //toutes les questions existantes, pour le choix des question_suivante


  constructor(private router: Router, private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){
  }

  ngOnInit(): void {
    this.backend.GET(`/api/questions`, e=>{
      this.questions_existantes=e.data
    })


  }

  onPost() {  
    //création de la question
    let body_text_question ={
      text: String(this.question),
    }

    this.backend.POST('/api/texts', body_text_question, res=>{
      var id_new_text = res.id
      let body_question = {
        content: id_new_text,
        type: String(this.type),
      }
      //si on veut en + prendre en compte "info", il faut une étape pour créer le texte puis créer l'objet info ect (contraignant pour pas grand chose ?) (voir un début ci dessous en commentaire)
      this.backend.POST(`/api/questions`, body_question, res2=>{
        this.id_question = res2.id

        //creation des réponses
        for (let i = 0; i < this.questions_suivantes.length; i++) {
          let body_text_reponse = {
            text: String(this.reponses[i])
          }
          this.backend.POST('/api/texts', body_text_reponse, res3=>{
            const id_new_text = res3.id
            // let body_reponse = {
            //   content: id_new_text,
            //   question_suivante: this.questions_suivantes[i]
            // }
            var body_reponse: any;
            if (this.questions_suivantes[i] == "null") {
              body_reponse = {
                content: id_new_text,
              }              
            } else {
              body_reponse = {
                content: id_new_text,
                question_suivante: this.questions_suivantes[i]
              }
            }
            this.backend.POST(`/api/reponses`, body_reponse, res4=>{
              const id_new_reponse = res4.id

              //création du bind question/reponse
              let body_binding ={
                "id_reponse": id_new_reponse,
              }
              this.backend.POST(`/api/questions/${this.id_question}/relationships/reponse`, body_binding, res5=>{
                console.log(res5)})
              
            });
          });
        }
        alert(`Question créée.`)
      });
    });  
    
  }


  //un début pour prendre en compte "info" :

  //     //création de la question
  //     let body_text_question ={
  //       text: String(this.question),
  //     }
  
  //     this.backend.POST('/api/texts', body_text_question, res=>{
  //       var id_text_question = res.id
  
  //       //création du commentaire ('info')
  //       if (typeof this.info == undefined) {
  //         this.info = ""
  //       }
  //       let body_text_info = {
  //         text: String(this.info)
  //       }
  //       this.backend.POST(`/api/texts`, body_text_info, res6=>{
  //         var id_text_info = res6.id
  //         let body_question = {
  //           content: id_text_question,
  //           type: String(this.type),
  //           info: id_text_info,
  //         }
  //         this.backend.POST(`/api/questions`, body_question, res2=>{
  //           this.id_question = res2.id
  
  //           //creation des réponses
  //           for (let i = 0; i < this.questions_suivantes.length; i++) {
  //             let body_text_reponse = {
  //               text: String(this.reponses[i])
  //             }
  //             this.backend.POST('/api/texts', body_text_reponse, res3=>{
  //               const id_new_text = res3.id
  //               // let body_reponse = {
  //               //   content: id_new_text,
  //               //   question_suivante: this.questions_suivantes[i]
  //               // }
  //               var body_reponse: any;
  //              if (this.questions_suivantes[i] == "null") {
  //                 body_reponse = {
  //                   content: id_new_text,
  //                 }              
  //               } else {
  //                 body_reponse = {
  //                   content: id_new_text,
  //                   question_suivante: this.questions_suivantes[i]
  //                 }
  //               }
  //               var message=JSON.stringify(body_reponse)
  //               //console.log("j'essaie de faire une requête reponse ayant pour body :"+message)
  //               this.backend.POST(`/api/reponses`, body_reponse, res4=>{
  //               const id_new_reponse = res4.id
  
  //               //création du bind question/reponse
  //               let body_binding ={
  //                 "id_reponse": id_new_reponse,
  //               }
  //               this.backend.POST(`/api/questions/${this.id_question}/relationships/reponse`, body_binding, res5=>{
  //                 console.log(res5)})
                
  //             });
  //           });
  //         }
  //         alert(`Question bien créée. Identifiant de la question créée : ${this.id_question}`)
  //       });
  //       })
  //     });  


}

