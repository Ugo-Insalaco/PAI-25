import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ConfigService } from '../services/config.service';
import { GlobalStorageService } from '../services/globalStorage.service';
import { BackendService } from '../services/backend.service';
import { ProjectComponent } from '../project/project.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-modif-question',
  templateUrl: './modif-question.component.html',
  styleUrls: ['./modif-question.component.css']
})
export class ModifQuestionComponent implements OnInit {

  @Input() id_question;
  type: string;
  question: string; //contenu de la question
  id_text_info: any //id du contenu de l'info dans la table cont_fra
  info: string //contenu du commentaire (attribut info)
  //reponses = [] //id, contenu et question suivante des réponses à afficher
  id_reponses =[];
  reponses = [];
  next = [];
  questions_existantes: any //toutes les questions existantes pour le choix de la question suivante

  constructor(private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService) { }
  
  ngOnInit(): void {
    this.backend.GET(`/api/questions`, e=>{
      this.questions_existantes=e.data
    })

    //this.all_next = [];
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

    //Modification du commentaire
    this.ModifTexte(this.id_text_info, this.info)
    //si la question n'a pas d'info, il faut créer un texte dans la table des contenus ect, ce n'est pas si simple.
    // => pour l'instant, juste modification d'infos déjà existantes

    // console.log(this.text)
    // var data={
    //   "text": this.text
    // };
    
    // this.backend.PATCH(`/api/texts/${this.content}`, data, res=>{
    //   console.log(res);
    // });

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
