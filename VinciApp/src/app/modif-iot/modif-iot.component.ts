import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

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
  associations=[] //liste des associations nombre/ref/product correspondantes à la solution
  add_regle =0


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

    //Récupération des sous-solutions
    this.backend.GET(`/api/questions/${this.id_question_0}?include=reponse`, e=>{
      this.sous_solutions=[]
      for (let i = 0; i < e.data[0].included.reponse.length; i++) {
        this.sous_solutions.push(e.data[0].included.reponse[i].id_reponse)
      }
      //Récupération des associations
      this.backend.GET(`/api/nombre_refs`, e2=>{
        for (let j = 0; j < e2.data.length; j++) {
          if (this.sous_solutions.indexOf(e2.data[j].fields.sous_solution)!=-1) {
            this.associations.push(e2.data[j])
          }
        }
        console.log(this.associations)
      })
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
  this.add_regle = 0
}

}
