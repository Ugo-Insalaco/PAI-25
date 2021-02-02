import { Component, OnInit, Input } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  admin: boolean = false;

  // Données à récupérer dans les paramètres du cadran
    nomcadran: string = "";
    couleur: string = "";

    // Banner
    urlphotofond: string = "";
    urllogo: string = "";
    urlcercles: string = "";
    problematiquecadran: string = "";

  // Paramètres à récupérer dans les paramètres de la solution
    nomsolution: string = "";
    problematiquessolution: string = "";
    argumentscommerciaux: string = "";
    textedashboard: string = "";
    photodashboard: string = "";

  constructor(private titleService: Title, private router: Router) { }

  ngOnInit(): void {
    this.nomcadran = this.getNomCadran();
    this.nomsolution = this.getNomSolution();
    this.titleService.setTitle(`${this.nomsolution} - Vinci Facilities`);

    // Paramètes pour tests à récup dans la BSS plus tard
      this.couleur = "#9b9b9b";

      // Banner
      this.urlphotofond = "url(/assets/images/bienetre/exImageFond.jpg)";
      this.urllogo = "/assets/images/bienetre/logo.png";
      this.urlcercles = "/assets/images/bienetre/cerclesBandeau.png";
      this.problematiquecadran = "Problématique du cadran";

    // Paramètres à récupérer dans les paramètres de la solution
      this.problematiquessolution = "Problématique de la solution";
      this.argumentscommerciaux = "Arguments commerciaux de qualité";
      this.textedashboard = "Texte pour le Dashboard";
      this.photodashboard = "url(/assets/images/bienetre/exImageFond.jpg)";
  }

  getNomSolution(){
    var nom = this.router.url.split('/').pop();
    nom = nom.replace(/-/gi, " "); // Remplace - par espace
    nom = nom.charAt(0).toUpperCase() + nom.slice(1); // Majuscule pour 1er mot
    return nom;
  }

  getNomCadran(){
    var nom = this.router.url.split('/')[2];
    nom = nom.replace(/-/gi, " "); // Remplace - par espace
    nom = nom.split(' ')  // Majuscule à chaque mot
             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
             .join(' ');
    return nom;
  }
}
