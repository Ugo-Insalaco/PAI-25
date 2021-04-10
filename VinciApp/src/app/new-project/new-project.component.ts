import { componentFactoryName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { GlobalStorageService } from '../services/globalStorage.service'
import { BackendService } from '../services/backend.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  id_solution: any;
  id_question_sec1: any; //id de la premiere question de la première section
  id_question_sec2: any;
  id_question_sec3: any;
  id_question_sec4: any;
  solutions_existantes: any;
  questions_existantes: any;
  nom_sec1: string //nom de la première section
  nom_sec2: string;
  nom_sec3: string;
  nom_sec4: string;

  constructor(private router: Router, private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){
  }

  ngOnInit(): void {

    this.backend.GET(`/api/questions`, e=>{
      this.questions_existantes=e.data
    })

    this.backend.GET(`/api/solutions`, e=>{
      this.solutions_existantes=e.data
    })

    //Récupération des noms des parties
    this.backend.GET(`/api/sections/1`, e=>{
      this.nom_sec1 = e.data[0].included.text[0].name
    })
    this.backend.GET(`/api/sections/2`, e=>{
      this.nom_sec2 = e.data[0].included.text[0].name
    })
    this.backend.GET(`/api/sections/3`, e=>{
      this.nom_sec3 = e.data[0].included.text[0].name
    })
    this.backend.GET(`/api/sections/4`, e=>{
      this.nom_sec4 = e.data[0].included.text[0].name
    })

  }

  onPost(){
    let body_1 = {
      id_section: 1,
      id_question: this.id_question_sec1
    }
    this.backend.POST(`/api/solutions/${this.id_solution}/relationships/section_question`, body_1, res=>{})

    let body_2 = {
      id_section: 2,
      id_question: this.id_question_sec2
    }
    this.backend.POST(`/api/solutions/${this.id_solution}/relationships/section_question`, body_2, res=>{})

    let body_3 = {
      id_section: 3,
      id_question: this.id_question_sec3
    }
    this.backend.POST(`/api/solutions/${this.id_solution}/relationships/section_question`, body_3, res=>{})

    let body_4 = {
      id_section: 4,
      id_question: this.id_question_sec4
    }
    this.backend.POST(`/api/solutions/${this.id_solution}/relationships/section_question`, body_4, res=>{})

    alert("Questionnaire créé.")

  } 
}