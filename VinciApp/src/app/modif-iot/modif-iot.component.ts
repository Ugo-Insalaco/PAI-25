import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';

import { ConfigService } from '../services/config.service';
import { GlobalStorageService } from '../services/globalStorage.service';
import { BackendService } from '../services/backend.service';
import { ProjectComponent } from '../project/project.component';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modif-iot',
  templateUrl: './modif-iot.component.html',
  styleUrls: ['./modif-iot.component.css']
})
export class ModifIotComponent implements OnInit {

  admin: any;
  nomsolution: string;
  id_question_0: number; //id de la question qui détermine la sous-solution
  sous_solutions=[] //liste des id des sous-solutions correspondantes à la solution
  sous_solutions_names =[] //id + nom explicite des sous-solutions
  associations=[] //liste des associations nombre/ref/product correspondantes à la solution
  add_regle =0

  // variables pour la création d'une nouvelle règle
  all_iot = []
  all_questions = []
  new_sous_solution: number //id de la sous solution
  new_number_iot : number //coeff multiplicatif
  new_question: number //id de la question de type "nombre"
  new_product: number //id de l'iot


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
    this.nomsolution = this.getNomSolution()
    this.id_question_0 = this.getQuestion0()

    this.backend.GET(`/api/products`, e=>{
      for (let i = 0; i < e.data.length; i++) {
        this.all_iot.push(e.data[i])
      }
    })

    //Récupération des sous-solutions associées à la question 0
    this.backend.GET(`/api/questions/${this.id_question_0}?include=reponse`, e=>{
      this.sous_solutions=[]
      for (let i = 0; i < e.data[0].included.reponse.length; i++) {
        this.sous_solutions.push(e.data[0].included.reponse[i].id_reponse)
        this.sous_solutions_names.push([e.data[0].included.reponse[i].id_reponse, e.data[0].included.reponse[i].subIncluded.text.content])
      }
      //Récupération des associations
      this.backend.GET(`/api/nombre_refs`, e2=>{
        for (let j = 0; j < e2.data.length; j++) {
          if (this.sous_solutions.indexOf(e2.data[j].fields.sous_solution)!=-1) {
            this.associations.push(e2.data[j])
          }
        }
      })
    })

    //Récupération de toutes les question
    this.backend.GET(`/api/questions`, e=>{
      this.all_questions = e.data
    })
  }

  getNomSolution(){
    var nom = this.router.url.split('/').pop();
    nom = nom.split('$').pop();
    nom = nom.replace(/%20/gi, " "); // Remplace - par espace
    nom = nom.replace(/_/gi, "'"); // Remplace _ par '
    nom = nom.replace(/%2528/gi, "(")
    nom = nom.replace(/%2529/gi, ")")
    nom = nom.charAt(0).toUpperCase() + nom.slice(1); // Majuscule pour 1er mot
    nom = nom.replace(/%C3%A9/gi, "é");
    return nom;
}

getQuestion0(){
  var id = this.router.url.split('/').pop();
  id = id.split('$')[0];
  return Number(id);
}

AddRegle(){
  this.add_regle = 1
}

onSubmit(){
  var update_info={
    "info": "nb_iot"
  };
  this.backend.PATCH(`/api/questions/${this.new_question}`, update_info, res=>{
    console.log(res)
  })

  var body_nombre_ref = {
    "id_question": this.new_question,
    "sous_solution": this.new_sous_solution,
    "nombre_iot": this.new_number_iot,
    "product": this.new_product
  }

  this.backend.POST(`/api/nombre_refs`, body_nombre_ref, res=>{
    console.log(res)
    location.reload()
    alert("Règle créée avec succès.")
  })
  this.add_regle = 0
}

onDelete(id_association){
  var input = confirm("Etes-vous sûr de vouloir supprimer cette règle ?")
    if (input) {
      this.backend.DELETE(`/api/nombre_refs/${id_association}`, e=>{
        console.log("Règle supprimée")
        location.reload()
        alert("Règle supprimée avec succès.")
      })  
    }
}


}
