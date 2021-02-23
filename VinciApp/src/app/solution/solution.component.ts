import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  @ViewChild('buttonproject') buttonprojectView: ElementRef;

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

    // Paramètes pour tests à récup dans la BDD plus tard
      // Banner
      if(this.nomcadran == "Actifs Techniques"){
        this.couleur = "#062C6B";
        this.urlphotofond = "url(/assets/images/actifstechniques/exImageFond.png)";
        this.urllogo = "/assets/images/actifstechniques/logo.png";
        this.urlcercles = "/assets/images/actifstechniques/cerclesBandeau.png";
        this.problematiquecadran = "Problématique du cadran Actifs Techniques";
      }
      else if(this.nomcadran == "Bien Etre"){
        this.couleur = "#CC2871";
        this.urlphotofond = "url(/assets/images/bienetre/exImageFond.jpg)";
        this.urllogo = "/assets/images/bienetre/logo.png";
        this.urlcercles = "/assets/images/bienetre/cerclesBandeau.png";
        this.problematiquecadran = "Problématique du cadran Bien-Être";
      }
      else if(this.nomcadran == "Confort Energie Environnement"){
        this.couleur = "#03B0B4";
        this.urlphotofond = "url(/assets/images/confortenergieenvironnement/exImageFond.jpg)";
        this.urllogo = "/assets/images/confortenergieenvironnement/logo.png";
        this.urlcercles = "/assets/images/confortenergieenvironnement/cerclesBandeau.png";
        this.problematiquecadran = "Problématique du cadran Confort Energie Environnement";
      }
      else if(this.nomcadran == "Espaces"){
        this.couleur = "#0CAAEB";
        this.urlphotofond = "url(/assets/images/espaces/exImageFond.jpg)";
        this.urllogo = "/assets/images/espaces/logo.png";
        this.urlcercles = "/assets/images/espaces/cerclesBandeau.png";
        this.problematiquecadran = "Problématique du cadran Espaces";
      }

    // Paramètres à récupérer dans les paramètres de la solution
      this.problematiquessolution = "Problématique de la solution";
      this.argumentscommerciaux = "Arguments commerciaux de qualité";
      this.textedashboard = "Texte pour le Dashboard";
      this.photodashboard = "url(/assets/images/bienetre/exImageFond.jpg)";
  }

  getNomSolution(){
    var nom = this.router.url.split('/').pop();
    nom = nom.replace(/-/gi, " "); // Remplace - par espace
    nom = nom.replace(/_/gi, "'"); // Remplace _ par '
    nom = nom.charAt(0).toUpperCase() + nom.slice(1); // Majuscule pour 1er mot
    nom = nom.replace(/%C3%A9/gi, "é");
    nom = nom.replace(/%C3%A0/gi, "à");
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

  onSimulerProjet(){
    // Get selected solution and redirect to solution's page
    var solution = this.nomsolution;
    solution = solution.replace(/ /gi, "-"); // Remplace - par espace
    solution = solution.replace(/'/gi, "_"); // Remplace _ par '
    solution = solution.toLowerCase()
    var button = this.buttonprojectView.nativeElement;
    this.router.navigate(["project/",solution]);
  }
}
