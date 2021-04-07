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
  //reponses = [] //id, contenu et question suivante des réponses à afficher
  id_reponses =[];
  reponses = [];
  next = []

  constructor(private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService) { }
  
  ngOnInit(): void {
    //this.all_next = [];
    this.backend.GET(`/api/questions/${this.id_question}?include=reponse`, e=>{
      this.question = e.data[0].included["text"][0].content;
      this.type = e.data[0].fields.type;
      for (let i = 0; i < e.data[0].included["reponse"].length; i++) {
        const id_rep = e.data[0].included["reponse"][i].id_reponse;
        this.backend.GET(`/api/reponses/${id_rep}?include=question_suivante`, e2=>{
          const rep = e2.data[0].included["text"][0].content;
          const next = e2.data[0].fields.question_suivante;
          this.reponses = this.reponses.concat([rep])
          this.id_reponses = this.id_reponses.concat([id_rep]);
          this.next = this.next.concat([next])
        });
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
      this.backend.GET(`/api/reponses/${id_rep}`, e=>{
        id_rep = e.data[0].id;
        var data = {
          "question_suivante": this.next[i]
        }
        this.backend.PATCH(`/api/reponses/${id_rep}`, data, res=>{
          console.log(res)
        })
      })
    }


    // console.log(this.text)
    // var data={
    //   "text": this.text
    // };
    
    // this.backend.PATCH(`/api/texts/${this.content}`, data, res=>{
    //   console.log(res);
    // });
    
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
