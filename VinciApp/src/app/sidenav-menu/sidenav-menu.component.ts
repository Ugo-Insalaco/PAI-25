import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css']
})
export class SidenavMenuComponent implements OnInit {

  cadranList: any[] = [];
  offreList: any[] = [];

  @Output() public sidenavClose = new EventEmitter();

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    // Récupération du nom, de l'url et des offres des cadrans
    this.backend.GET('/api/cadrans', e=>{
      for(var i=0; i<e.data.length; i++){
        var name = e.data[i].included["text"][0].name.replace(/ /gi, "-").toLowerCase();
        var id = e.data[i].id;
        var datacadran = {
          "id": id,
          "name": e.data[i].included["text"][0].name,
          "url": "/cadran/"+id+"&"+name,
          "color": e.data[i].fields.color,
          "offres": []
        };
        this.cadranList.push(datacadran);
      }

      // Remplissage liste des offres avec caractéristiques des offres et solutions
      this.backend.GET('/api/offres?include=solution', e=>{
        for(var i=0; i<e.data.length; i++){
          // Récupération des données de l'offre
          var name = e.data[i].included["text"][0].name.replace(/ /gi, "-").toLowerCase();
          var idoffre = e.data[i].id;
          var dataoffre = {
            "id": idoffre,
            "name": e.data[i].included["text"][0].name,
            "solutions": []
          };

          // Récupération des données des solutions de l'offre
          for(var s=0; s<e.data[i].included["solution"].length; s++){
            var idsol = e.data[i].included["solution"][s].id_solution;
            var name = e.data[i].included["solution"][s].subincluded["text"].name;
            if(name !== null){
              var datasol = {
                "id": idsol,
                "name": name,
                "url": "/"+idsol+"&"+name.replace(/ /gi, "-").toLowerCase()
              };
              dataoffre.solutions.push(datasol);
            }
          }
          this.offreList.push(dataoffre);
        }

        // Remplissage des offres pour chaque cadran
        this.backend.GET('/api/offres?include=cadran', e=>{
          for(var i=0; i<e.data.length; i++){
            var idcadran = e.data[i].included.cadran[0].id_cadran;
            var idoffre = e.data[i].id;
            var indexoffre = 0; var indexcadran = 0;
            for(var j=0; j<this.offreList.length; j++){
              if(this.offreList[j].id == idoffre){
                indexoffre = j;
              }
            }
            for(var j=0; j<this.cadranList.length; j++){
              if(this.cadranList[j].id == idcadran){
                indexcadran = j;
              }
            }
            this.cadranList[indexcadran].offres.push(this.offreList[indexoffre]);
          }
        });
      });
    });
  }

  public onCloseSidenav(){
    this.sidenavClose.emit();
  }
}
