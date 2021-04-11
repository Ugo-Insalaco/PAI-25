import { componentFactoryName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { GlobalStorageService } from '../services/globalStorage.service'
import { BackendService } from '../services/backend.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  questions_existantes: any;
  id_question: number; //id de la question à supprimer
  reponses = []; //réponses associées, à supprimer aussi

  constructor(private router: Router, private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){
  }

  ngOnInit(): void {
    this.backend.GET(`/api/questions`, e=>{
      this.questions_existantes=e.data
    })
  }

  onDelete() {
    console.log("yo")
    var input = confirm("Etes vous sûr de vouloir supprimer cette question ? Cela entraînera la suppression de toutes les réponses et relation avec un questionnaire.")
    if (input) {

      console.log(this.id_question)
      this.backend.GET(`/api/questions/${this.id_question}?include=reponse`, e=>{
        this.reponses = e.data[0].included.reponse
        console.log(e)
        console.log(e.data[0].included.reponse)
        console.log(e.data[0].included.reponse[0].id_reponse)
        //this.id_reponses = this.id_reponses.concat([e])
        this.backend.DELETE(`/api/questions/${this.id_question}`, e2=>{
          console.log("Question supprimée, d'id"+this.id_question);
          for (let i = 0; i < this.reponses.length; i++) {
            this.backend.DELETE(`/api/reponses/${this.reponses[i].id_reponse}`, e=>{
              console.log("réponse"+this.reponses[i].subIncluded.text.content+"supprimée, d'id"+this.reponses[i].id_reponse)
            })
            
          }
        });
      })
    }
  }

}
