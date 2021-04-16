import { componentFactoryName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { GlobalStorageService } from '../services/globalStorage.service'
import { BackendService } from '../services/backend.service';
import { AuthService } from '../services/auth.service';

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
  admin!: boolean;

  constructor(private router: Router, 
    private backend: BackendService, 
    private config: ConfigService, 
    private globalStorage: GlobalStorageService,
    private auth: AuthService){
      this.auth.isLoggedIn(res => {
          this.admin = res;
      });
  }

  ngOnInit(): void {
    this.backend.GET(`/api/questions`, e=>{
      this.questions_existantes=e.data
    })
  }

  onPost() {  

    // énoncé de la réponse arbitraire pour les questions de type texte, nombre et select_all_iot
    if (this.type == 'number' || this.type =='text' || this.type == 'select_all_iot') {
      this.reponses[0] = String(this.type)   
      this.nb_reponses = 1 
    }

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
      //si on veut en + prendre en compte l'attribut "info", il faut une étape pour créer le texte puis l'utiliser dans body_question
      this.backend.POST(`/api/questions`, body_question, res2=>{
        this.id_question = res2.id

        //creation des réponses
        for (let i = 0; i < this.questions_suivantes.length; i++) {
          let body_text_reponse = {
            text: String(this.reponses[i])
          }
          this.backend.POST('/api/texts', body_text_reponse, res3=>{
            const id_new_text = res3.id
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
                if (i == this.questions_suivantes.length-1) {
                  alert("Question bien créée.")
                  location.reload()
                }
            });
          });
        }        
      });
    });      
  }

}

