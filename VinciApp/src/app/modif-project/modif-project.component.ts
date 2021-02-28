import { componentFactoryName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { GlobalStorageService } from '../services/globalStorage.service'
import { BackendService } from '../services/backend.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-modif-project',
  templateUrl: './modif-project.component.html',
  styleUrls: ['./modif-project.component.css']
})
export class ModifProjectComponent implements OnInit {

  nomsolution: string;
  
  //à récupérer dans la BDD (à voir comment gérer pour l'attribut modif qui indique que la question est en cours de modification):
  cadran = "Actifs techniques";
  offre = "Sécurité";
  questions = [
    {"id_question":1,"modif":false,"type":"number","partie":0,"question":"Combien de détecteurs de fumée ?","reponses": [
      {"text":"", "question_suivante":2}]
    },
    {"id_question":3,"modif":false,"type":"QCM","partie":1,"question":"Quelle application souhaitez-vous utiliser ?","reponses": [
      {"text":"IoThink", "question_suivante":2},
      {"text": "Autre", "question_suivante":2}]
    },
    {"id_question":5,"modif":false,"type":"QCM","partie":2,"question":"Souhaitez-vous internaliser ou externaliser l installation des IoT ?","reponses": [
      {"text":"Internaliser", "question_suivante":2},
      {"text": "Externaliser", "question_suivante":2}]
    },
    {"id_question":2,"modif":false,"type":"text","partie":0,"question": "Ajouter un commentaire","reponses": [
      {"text":"", "question_suivante":2}]
    }
  ]



  constructor(private router: Router, private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){
  }

  ngOnInit(): void {
    this.nomsolution = this.getNomSolution();
    //for (let i = 0; i < this.questions.length; i++) {
    //  this.questions[i].push("");
    //  }
  }

  getNomSolution(){
    var nom = this.router.url.split('/').pop();
    nom = nom.replace(/-/gi, " "); // Remplace - par espace
    nom = nom.replace(/_/gi, "'"); // Remplace _ par '
    nom = nom.charAt(0).toUpperCase() + nom.slice(1); // Majuscule pour 1er mot
    nom = nom.replace(/%C3%A9/gi, "é");
    return nom;
  }

  onModif(q){
    q.modif = true
  }

  onValide(q){
    //modifier le contenu de la bdd
    q.modif = false
  }

  onTermine(){
    // Get selected solution and redirect to solution's page
    var solution = this.nomsolution;
    solution = solution.replace(/ /gi, "-"); // Remplace - par espace
    solution = solution.replace(/'/gi, "_"); // Remplace _ par '
    solution = solution.toLowerCase()
    this.router.navigate(["project/",solution]);
  }

}