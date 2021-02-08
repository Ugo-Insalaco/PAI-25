import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() tab; //numero de la page (donc de la section)
  @Input() id_question; //numero de la question

  //Requêtes au serveur à partir de tab et question, pour récupérer le type et le contenu
  @Input() type;
  @Input() question;
  @Input() rep1;
  @Input() rep2;

  answer: string;
  answers: []; //à mettre plutôt en variable globale ?

  ngOnInit(): void {
  }

}
