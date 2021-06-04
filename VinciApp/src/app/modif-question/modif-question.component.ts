import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ConfigService } from '../services/config.service';
import { GlobalStorageService } from '../services/globalStorage.service';
import { BackendService } from '../services/backend.service';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-modif-question',
  templateUrl: './modif-question.component.html',
  styleUrls: ['./modif-question.component.css']
})
export class ModifQuestionComponent implements OnInit {

  @Input() id_question;
  type: string; //type dans la bdd (par exemple : 'radio')
  type_explicite: string; //type pour l'utilisateur (par exemple : QCM)
  question: string; //contenu de la question
  id_text_info: any //id du contenu de l'info dans la table cont_fra
  info: string //contenu du commentaire (attribut info)
  id_reponses =[];
  reponses = [];
  next = [];
  questions_existantes: any //toutes les questions existantes pour le choix de la question suivante

  constructor(private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService) { }
  
  ngOnInit(): void {
    //Récupération de toutes les questions existantes
    this.backend.GET(`/api/questions`, e=>{
      this.questions_existantes=e.data
    })

    //Récupération de toutes les données de la question
    this.backend.GET(`/api/questions/${this.id_question}?include=reponse`, e=>{
      this.question = e.data[0].included["text"][0].content;
      this.type = e.data[0].fields.type;
      for (let i = 0; i < e.data[0].included["reponse"].length; i++) {
        const id_rep = e.data[0].included["reponse"][i].id_reponse;
        this.backend.GET(`/api/reponses/${id_rep}`, e2=>{
          const rep = e2.data[0].included["text"][0].content;
          const next = e2.data[0].fields.question_suivante;
          this.reponses = this.reponses.concat([rep])
          this.id_reponses = this.id_reponses.concat([id_rep]);
          this.next = this.next.concat([next])
        });
      }
      this.id_text_info = e.data[0].fields.info;
      if (this.id_text_info) {
        this.backend.GET(`/api/texts/${this.id_text_info}`, e=>{
          this.info=e.data[0].fields.text
        })
      }
      
      //Définition du type explicite (à afficher pour l'utilisateur)
      if (this.type=='radio') {
        this.type_explicite = 'QCM avec une seule réponse possible'
      }
      if (this.type=='select'){
        this.type_explicite = 'QCM avec plusieurs réponses possibles'
      }
      if (this.type=='text') {
        this.type_explicite = 'Texte'        
      }
      if (this.type=='number') {
        this.type_explicite = 'Nombre'
      }
      if (this.type=='select_all_iot') {
        this.type_explicite = 'Sélection parmi tous les IoT disponibles'
      }
      if (this.type=='reseau') {
        this.type_explicite = "QCM avec une seule réponse possible (ne s'affiche  que si IoT>6, sinon réponse automatique)"
      }
    });
  }


  onValiderModif(){
    //Modification du contenu de la question
    this.backend.GET(`/api/questions/${this.id_question}`, e=>{
      var idtext = e.data[0].fields.content;
      this.ModifTexte(idtext, this.question)
    });

    //Modification du contenu des réponses
    for (let i = 0; i < this.reponses.length; i++) {      
      var id_rep = this.id_reponses[i]
      this.backend.GET(`/api/reponses/${id_rep}`, e=>{
        var contenu_reponse = this.reponses[i]
        var idtext = e.data[0].fields.content;
        this.ModifTexte(idtext, contenu_reponse)
      })
    }

    //Modification de la question suivante
    for (let i = 0; i < this.id_reponses.length; i++) {
      var id_rep = this.id_reponses[i]
      if (this.next[i]=="null") {
        this.next[i]="NULL"        
      }
      //var data:any;
      // if (this.next[i] != "null") {
      //   console.log("question suivante != null")
      //   data = {
      //     "question_suivante": this.next[i]
      //   }
      // } else {
      //   console.log("question suivante = null")
      //   data = {
      //     "question_suivante": "NULL"
      //   }
      // }
      var data = {
        "question_suivante": this.next[i]
      }
      //this.backend.GET(`/api/reponses/${id_rep}`, e=>{
        //id_rep = e.data[0].id;
        
        this.backend.PATCH(`/api/reponses/${id_rep}`, data, res=>{
          console.log(res)
        })
      //})
    }

    //Modification du commentaire -> laissé de côté pour le moment

    // this.ModifTexte(this.id_text_info, this.info)
    // //si la question n'a pas d'info, il faut créer un texte dans la table des contenus ect, ce n'est pas si simple.
    // // => pour l'instant, juste modification d'infos déjà existantes

    alert(`Question d'id ${this.id_question} bien modifiée`)
  }


  ModifTexte(idtext, contenu){
    var contenu_json={
      "text": contenu
    };
    this.backend.PATCH(`/api/texts/${idtext}`, contenu_json, res=>{
      console.log(res)
    })
  }


  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
