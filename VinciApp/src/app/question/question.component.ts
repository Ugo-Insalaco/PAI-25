import { Component, OnInit, Input } from '@angular/core';

import { ConfigService } from '../services/config.service';
import { GlobalStorageService } from '../services/globalStorage.service';
import { BackendService } from '../services/backend.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private router: Router, private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){}
  @Input() tab; //numero de la page (donc de la section)
  @Input() id_question; //numero de la question

  //Requêtes au serveur à partir de tab et question, pour récupérer le type et le contenu
  @Input() type;
  @Input() question;
  @Input() rep1;
  @Input() rep2;

  answer: string;
  nomsolution: string;

  test = this.globalStorage.get('projet')
  

  ngOnInit(): void {
    this.nomsolution = this.getNomSolution();
    // this.globalStorage.set('langage', 'ENG')
    // this.globalStorage.set('projet', )
  }

  getNomSolution(){
    var nom = this.router.url.split('/').pop();
    nom = nom.replace(/-/gi, " "); // Remplace - par espace
    nom = nom.charAt(0).toUpperCase() + nom.slice(1); // Majuscule pour 1er mot
    nom = nom.replace(/%C3%A9/gi, "é");
    return nom;
  }

  onAnswer(){
    this.globalStorage.set('projet_2', this.answer)
  }

}
