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
  
  // nomsolution: string;
  // question: any;
  // reponse: any;
  // reponses = [];
  // type: any;
  // solutions: any;
  // section_question = [];
  // id_question = 1;
  // next: number;
  // test = "";
  // id_solution = 2;
  // test_1: any;
  // test_2: any;
  // test_3: any;
  // test_4: any;
  // id_answer: number;
  // answer: string;
  // id_test = 3;
  // topics = [
  //   { value: 'game', rep: 'Gaming' },
  //   { value: 'tech', rep: 'Technology' },
  //   { value: 'life', rep: 'Lifestyle' },
  // ];
  // tada: any;
  // text = "le texte"
  // content: any
  // next2 = "2";


  constructor(private router: Router, private backend: BackendService, private config: ConfigService, private globalStorage: GlobalStorageService){
  }

  ngOnInit(): void {

    this.backend.GET(`/api/questions`, e=>{
      this.questions_existantes=e.data
      console.log(this.questions_existantes)
    })

    this.backend.GET(`/api/solutions`, e=>{
      this.solutions_existantes=e.data
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

    alert("Le questionnaire a bien été créé")

  } 
}