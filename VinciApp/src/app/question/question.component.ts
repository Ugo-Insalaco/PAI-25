import { Component, OnInit, Input } from '@angular/core';

import { ConfigService } from '../services/config.service';
import { GlobalStorageService } from '../services/globalStorage.service';
import { BackendService } from '../services/backend.service';
import { ProjectComponent } from '../project/project.component';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){}
  @Input() tab; //numero de la page (donc de la section)
  @Input() id_question; //numero de la question

  //Requêtes au serveur à partir de tab et question, pour récupérer le type et le contenu
  @Input() type;
  @Input() question;
  @Input() rep1;
  @Input() rep2;

  answer: string;
  
  ngOnInit(): void {
  }

  onAnswer(){
    var projectJSON = this.globalStorage.get("projet");
    var project = JSON.parse(projectJSON);
    var exists = false;
    for(var i= 0; i < project.length; i++){
      if (project[i].id_question == this.id_question) {
        exists = true;
        project[i].reponse = this.answer
      }
    }
    if (exists == false) {
      var reponse = {
        "id_question": this.id_question, 
        "partie": this.tab, 
        "question": this.question, 
        "reponse": this.answer
      };
      project.push(reponse);
    }
  this.globalStorage.set("projet", project)
  }

}