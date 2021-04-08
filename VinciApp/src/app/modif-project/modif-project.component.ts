import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ConfigService } from '../services/config.service';
import { GlobalStorageService } from '../services/globalStorage.service';
import { BackendService } from '../services/backend.service';
import { ProjectComponent } from '../project/project.component';


@Component({
  selector: 'app-modif-project',
  templateUrl: './modif-project.component.html',
  styleUrls: ['./modif-project.component.css']
})
export class ModifProjectComponent implements OnInit {
  
  constructor(private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){}
  @Input() tab; //numero de la page (donc de la section)
  @Input() id_question;

  //type: string;
  //question: string; //contenu de la question
  //reponses = [] //id et contenu des réponses à afficher
  //id_answer: number; //id de la réponse de l'utilisateur
  //answer: string; //contenu de la réponse de l'utilisateur
  all_questions =[]; //id de toutes les questions possibles de la section
  seen = [] //liste des questions qu'on a déjà traité, pour éviter les boucles infines
  
  ngOnInit(): void {
    this.all_questions = [this.id_question];
    this.addQuestionsAfter(this.id_question)
  }

  addQuestionsAfter(id) {
    //console.log("on traire pour id "+id)
    this.seen = this.seen.concat([id])
    //console.log("on l'a donc rajouté à "+this.seen)

    this.backend.GET(`/api/questions/${id}?include=reponse`, e=>{
      //console.log("Juste après la requête, la liste des quetsions à afficher est :"+this.all_questions)
      for (let i = 0; i < e.data[0].included["reponse"].length; i++) {
        var next = JSON.stringify(e.data[0].included["reponse"][i].question_suivante)
        //console.log("On trouve la question : "+next)
        //const id_rep = e.data[0].included["reponse"][i].id_reponse;
        //this.backend.GET(`/api/reponses/${id_rep}`, e2=>{
          //const next = e2.data[0].fields.question_suivante;
        if (next != 'null' && this.all_questions.indexOf(next)==-1) {
          ///console.log("on ajoute la question d'id "+next+", qui n'y est pas déjà")
          this.all_questions = this.all_questions.concat([next]);
          //this.all_questions = Array.from(new Set(this.all_questions)); //suppression des redondances
          //console.log("au final, on veut afficher : "+this.all_questions)
          //console.log("On regarde si "+next+" est dans "+this.seen+", aka a deja été traitée")
          if (this.seen.indexOf(next) == -1) {
            //console.log("La réponse est non")
            this.addQuestionsAfter(next)
            //console.log("on lance une nouvelle requete pour la question "+next+", actuellement la liste est "+this.all_questions)
          }
        }
        //});
      }
    });
  }

  // onAnswer(){
  //   if (this.type == "radio") {
  //     // this.backend.GET(`/api/reponses/${this.id_answer}`, e=>{
  //     //   this.answer = e.data[0].included["text"][0].content;
  //     // })
  //     for (let i = 0; i < this.reponses.length; i++) {
  //       if (this.reponses[i].id == this.id_answer) {
  //         this.answer = this.reponses[i].reponse
  //       }        
  //     }
  //   }
  //   if (this.type == "number" || this.type == "text" || this.type=="select_all_iot") {
  //     for (let i = 0; i < this.reponses.length; i++) {
  //       if (this.reponses[i].reponse == this.answer) {
  //         this.id_answer = this.reponses[i].id
  //       }
  //     }
  //   }
  //   if (this.type == "select") { //gestion des cas où il peut y avoir plusieurs réponses -> on prend l'id de la première
  //     for (let i = 0; i < this.reponses.length; i++) {
  //       if (this.reponses[i].reponse == this.answer[0]) {
  //         this.id_answer = this.reponses[i].id
  //       }
  //     }
  //   }

  //   var projectJSON = this.globalStorage.get("projet");
  //   var project = JSON.parse(projectJSON);
  //   var exists = false;
  //   for(var i= 0; i < project.length; i++){
  //     if (project[i].id_question == this.id_question) {
  //       exists = true;
  //       project[i].id_reponse = this.id_answer
  //       project[i].reponse = this.answer
  //     }
  //   }
  //   if (exists == false) {
  //     var reponse = {
  //       "partie": this.tab,
  //       "id_question": this.id_question, 
  //       "question": this.question,
  //       "id_reponse": this.id_answer, 
  //       "reponse": this.answer
  //     };
  //     project.push(reponse);
  //   }
  // this.globalStorage.set("projet", project) //mise à jour de la variable globale projet

  // //renvoie une erreur si il y a pas de question suivante, mais c'est pas grave
  // this.backend.GET(`/api/reponses/${this.id_answer}?include=question_suivante`, e=>{
  //   this.next = e.data[0].fields.question_suivante;
  //   console.log(this.next)
  //   })
  // }

 }