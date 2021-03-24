import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-cadran',
  templateUrl: './cadran.component.html',
  styleUrls: ['./cadran.component.css']
})
export class CadranComponent implements OnInit {

  // A récupérer dans variables globales
  admin: boolean = true;

  offerList: any[] = [];
  couleur!: string;
  idcadran!: number;
  nomcadran!: string;
  nboffre: number = 0;

  // Paramètres pour banner
  databanner: { [key: string]: string;} = {};

  constructor(private backend: BackendService,
              private titleService: Title,
              private router: Router,
              private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.nomcadran = this.getNomCadran();
    this.idcadran = this.getIdCadran();
    this.titleService.setTitle(`${this.nomcadran} - Vinci Facilities`);

    // Récupération des données de la BDD
    // Récupération des données du cadran
    this.backend.GET('/api/cadrans/'+this.idcadran, e=>{
      // Texts Banner
      this.databanner["name"] = e.data[0].included["text"][0].name;
      this.databanner["circles"] = e.data[0].included["text"][0].circles;
      this.databanner["problem"] = e.data[0].included["text"][0].problem;

      // Images Banner
      this.databanner["logo"] = e.data[0].fields.logo;
      this.couleur = e.data[0].fields.color;
      this.databanner["picture_back"] = "url("+e.data[0].fields.picture_back+")";

      // Récupération des données pour les offres
      this.backend.GET('/api/offres?include=cadran', e=>{
        for(var i=0; i<e.data.length; i++){
          if(e.data[i].included.cadran[0].id_cadran == this.idcadran){
            var data = {
              "id": e.data[i].id,
              "picture": "url("+e.data[i].fields.picture+")",
              "name": e.data[i].included["text"][0].name,
              "text": e.data[i].included["text"][0].text,
              "solutions": []
            };
            this.nboffre += 1;
            this.offerList.push(data);
          }
        }

        // Récupération des solutions pour chaque offre
        this.backend.GET('/api/offres?include=solution', e=>{
          for(var i=0; i<e.data.length; i++){
            for(var j=0; j<this.offerList.length; j++){
              if(e.data[i].id == this.offerList[j]["id"]){
                for(var s=0; s<e.data[i].included["solution"].length; s++){
                  var sol = {
                    "id": e.data[i].included["solution"][s].id_solution,
                    "name": e.data[i].included["solution"][s].subincluded["text"].name
                  }
                  this.offerList[j]["solutions"].push(sol);
                }
              }
            }
          }
        });
      });
      this.cd.detectChanges();
    });
  }

  getNomCadran(){
    var nom = this.router.url.split('/').pop();
    nom = nom.split('&').pop();
    nom = nom.replace(/-/gi, " ");
    nom = nom.replace(/%C3%A9/gi, "é");
    nom = nom.replace(/%C3%AA/gi, "ê");
    nom = nom.split(' ')
             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
             .join(' ');
    return nom;
  }

  getIdCadran(){
    var id = this.router.url.split('/').pop();
    id = id.split('&')[0];
    return Number(id);
  }
}
