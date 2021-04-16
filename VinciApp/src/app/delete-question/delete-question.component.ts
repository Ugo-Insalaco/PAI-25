import { componentFactoryName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { GlobalStorageService } from '../services/globalStorage.service'
import { BackendService } from '../services/backend.service';
import { AuthService } from '../services/auth.service';

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

  onDelete() {
    var input = confirm("Etes-vous sûr de vouloir supprimer cette question ? Cela entraînera aussi la suppression de toutes les réponses associées.")
    if (input) {
      this.backend.GET(`/api/questions/${this.id_question}?include=reponse`, e=>{
        this.reponses = e.data[0].included.reponse
        this.backend.DELETE(`/api/questions/${this.id_question}`, e2=>{
          console.log("Question supprimée")
          for (let i = 0; i < this.reponses.length; i++) {
            this.backend.DELETE(`/api/reponses/${this.reponses[i].id_reponse}`, e=>{
              console.log("réponse '"+this.reponses[i].subIncluded.text.content+"' supprimée")
              if (i == this.reponses.length-1) {
                alert("Question et réponses bien supprimées.")
                location.reload()
              }
            })            
          }
        });
      })
    }
  }

}
