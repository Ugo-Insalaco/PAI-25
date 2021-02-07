import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() tab; //numero de la page
  @Input() id_question; //numero de la question

  //Requêtes au serveur à partir de tab et question, pour récupérer le type et le contenu
  @Input() type;
  question="Voulez-vous personnaliser votre solution en ajoutant d'autres IoT ?"
  rep1='Oui';
  rep2='Non';

  ngOnInit(): void {
  }

}
