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
  type: string;
  question: string; //contenu de la question
  reponses = [] //id, contenu et question suivante des réponses à afficher

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
          this.reponses = this.reponses.concat([{"id": id_rep, "reponse": rep, "question_suivante": next}])
        });
      }
    });
  }

  onValiderModif(){

    //Modification du contenu de la question
    var text_question_json={
      "text": this.question
    };

    this.backend.GET(`/api/questions/${this.id_question}`, e=>{
      var idtext = e.data[0].fields.content;
      this.backend.PATCH(`/api/texts/${idtext}`, text_question_json, res=>{
        console.log(res)
      })
    });

    //Modification du contenu des réponses
    for (let i = 0; i < this.reponses.length; i++) {
      var text_reponse_json={
        "text": this.reponses[i].reponse
      }
      var id_rep = this.reponses[i].id
      this.backend.PATCH(`api/texts/${id_rep}`, text_reponse_json, res=>{
        console.log(res)
      })
      
    }

    //Modification


    // console.log(this.text)
    // var data={
    //   "text": this.text
    // };
    
    // this.backend.PATCH(`/api/texts/${this.content}`, data, res=>{
    //   console.log(res);
    // });
    
  }

}
