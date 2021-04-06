import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

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
  @Input() id_question;
  @Input() modif //pour savoir si on est en mode modif ou pas

  admin = true;
  type: string;
  question: string; //contenu de la question
  info: string;
  reponses = [] //id et contenu des réponses à afficher
  id_answer: number; //id de la réponse de l'utilisateur
  answer: string; //contenu de la réponse de l'utilisateur 
  next = ""; //id de la question suivante
  all_iot: any;
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("question reçue d'id "+this.id_question)
    this.reponses=[];
    this.backend.GET(`/api/questions/${this.id_question}?include=reponse`, e=>{
      this.question = e.data[0].included["text"][0].content;
      this.info = e.data[0].fields.info;
      this.type = e.data[0].fields.type;
      for (let i = 0; i < e.data[0].included["reponse"].length; i++) {
        const id_rep = e.data[0].included["reponse"][i].id_reponse;
        this.backend.GET(`/api/reponses/${id_rep}`, e2=>{
          const rep = e2.data[0].included["text"][0].content;
          this.reponses = this.reponses.concat([{"id": id_rep, "reponse": rep}])
          console.log(this.reponses)
        });
      }
    });

      // //NE FONCTIONNE PAS
      // this.backend.GET(`/api/products`, e=>{
      //   this.all_iot = e.data[0]
      //   console.log("ici")
      // })
    
    if (changes.id_question.currentValue && changes.id_question.previousValue) {
      if (changes.id_question.currentValue != changes.id_question.previousValue) {
        this.answer = "";
        this.next="";
      }
    }
  }

  onAnswer(){
    if (this.type == "radio") {
      // this.backend.GET(`/api/reponses/${this.id_answer}`, e=>{
      //   this.answer = e.data[0].included["text"][0].content;
      // })
      for (let i = 0; i < this.reponses.length; i++) {
        if (this.reponses[i].id == this.id_answer) {
          this.answer = this.reponses[i].reponse
        }        
      }
    }
    if (this.type == "number" || this.type == "text" || this.type=="select_all_iot") {
      for (let i = 0; i < this.reponses.length; i++) {
        if (this.reponses[i].reponse == this.answer) {
          this.id_answer = this.reponses[i].id
        }
      }
    }
    if (this.type == "select") { //gestion des cas où il peut y avoir plusieurs réponses -> on prend l'id de la première
      for (let i = 0; i < this.reponses.length; i++) {
        if (this.reponses[i].reponse == this.answer[0]) {
          this.id_answer = this.reponses[i].id
        }
      }
    }

    var projectJSON = this.globalStorage.get("projet");
    var project = JSON.parse(projectJSON);
    var exists = false;
    for(var i= 0; i < project.length; i++){
      if (project[i].id_question == this.id_question) {
        exists = true;
        project[i].id_reponse = this.id_answer
        project[i].reponse = this.answer
      }
    }
    if (exists == false) {
      var reponse = {
        "partie": this.tab,
        "id_question": this.id_question, 
        "question": this.question,
        "id_reponse": this.id_answer, 
        "reponse": this.answer
      };
      project.push(reponse);
    }
  this.globalStorage.set("projet", project) //mise à jour de la variable globale projet

  this.backend.GET(`/api/reponses/${this.id_answer}`, e=>{
    this.next = e.data[0].fields.question_suivante;
    console.log(this.next)
    })
  }

  // this.backend.GET(`/api/reponses/${this.id_answer}`, e=>{
  //   this.next = e.data[0].included["question_suivante"][0].id[0];
  //   console.log(e.data[0])
  //   console.log("next:"+this.next)
  //   })
  // }

}