import { Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadran',
  templateUrl: './cadran.component.html',
  styleUrls: ['./cadran.component.css']
})
export class CadranComponent implements OnInit {

  // A récupérer dans variables globales
  admin: boolean = false;

  // Paramètres pour cadran
    nomcadran: string = "";
    couleur: string = "";

    // Banner
    urlphotofond: string = "";
    urllogo: string = "";
    urlcercles: string = "";
    problematiquecadran: string = "";

    // Offer 1
    urlphotooffre1: string = "";
    nomoffre1: string = "";
    texteoffre1: string = "";
    offre1solutions : string[] = [""];

    // Offer 2
    urlphotooffre2: string = "";
    nomoffre2: string = "";
    texteoffre2: string = "";
    offre2solutions : string[] = [""];

    // Offer 3
    urlphotooffre3: string = "";
    nomoffre3: string = "";
    texteoffre3: string = "";
    offre3solutions : string[] = [""];

  constructor(private titleService: Title, private router: Router) {}

  ngOnInit(): void {
    this.nomcadran = this.getNomCadran();
    this.titleService.setTitle(`${this.nomcadran} - Vinci Facilities`);

    // Récupération des informations en fonction du nom du CadranComponent
    // Données à récupérer dans la base de données en fonction du nom du cadran
    if(this.nomcadran == "Actifs Techniques"){
      this.couleur = "#062C6B";
      // Banner
      this.urlphotofond = "url(/assets/images/actifstechniques/exImageFond.png)";
      this.urllogo = "/assets/images/actifstechniques/logo.png";
      this.urlcercles = "/assets/images/actifstechniques/cerclesBandeau.png";
      this.problematiquecadran = "Problématique du cadran Actifs Techniques";

      // Offer 1
      this.urlphotooffre1 = "url(/assets/images/actifstechniques/exImageSolution.jpg)";
      this.nomoffre1 = "Offre 1 : Supervision des équipements CVC";
      this.texteoffre1 = 'Ceci est un texte pour la solution Supervision des équipements CVC du cadran actifs techniques.';
      this.offre1solutions = ["Production de froid", "Production de chaud","Traitement de l'air"];

      // Offer 2
      this.urlphotooffre2 = "url(/assets/images/actifstechniques/exImageFond.png)";
      this.nomoffre2 = "Offre 2 : Rondes d'exploitation";
      this.texteoffre2 = "Ceci est un texte pour la solution Rondes d'exploitation du cadran actifs techniques.";
      this.offre2solutions = ["Rondes digitalisées"];
    }
    else if(this.nomcadran == "Bien Etre"){
      this.couleur = "#CC2871";
      // Banner
      this.urlphotofond = "url(/assets/images/bienetre/exImageFond.jpg)";
      this.urllogo = "/assets/images/bienetre/logo.png";
      this.urlcercles = "/assets/images/bienetre/cerclesBandeau.png";
      this.problematiquecadran = "Problématique du cadran Bien-Être";

      // Offer 1
      this.urlphotooffre1 = "url(/assets/images/bienetre/exImageSolution.jpg)";
      this.nomoffre1 = "Offre 1 : Qualité de vie au travail";
      this.texteoffre1 = "Ceci est un texte pour la solution Qualité de vie au travail du cadran bien etre.";
      this.offre1solutions = ["Santé et environnement de travail", "Satisfaction des usagers"];

      // Offer 2
      this.urlphotooffre2 = "url(/assets/images/bienetre/exImageFond.jpg)";
      this.nomoffre2 = "Offre 2 : Sécurité";
      this.texteoffre2 = "Ceci est un texte pour la solution Sécurité du cadran actifs techniques.";
      this.offre2solutions = ["Detection incendie","Inondation"];

      // Offer 3
      this.urlphotooffre3 = "url(/assets/images/bienetre/exImageFond.jpg)";
      this.nomoffre3 = "Offre 3 : Hygiène";
      this.texteoffre3 = "Ceci est un texte pour la solution Hygiène du cadran actifs techniques.";
      this.offre3solutions = ["Legionelle ECS","Nettoyage à l'usage"];
    }
    else if(this.nomcadran == "Confort Energie Environnement"){
      this.couleur = "#03B0B4";
      // Banner
      this.urlphotofond = "url(/assets/images/confortenergieenvironnement/exImageFond.jpg)";
      this.urllogo = "/assets/images/confortenergieenvironnement/logo.png";
      this.urlcercles = "/assets/images/confortenergieenvironnement/cerclesBandeau.png";
      this.problematiquecadran = "Problématique du cadran Confort Energie Environnement";

      // Offer 1
      this.urlphotooffre1 = "url(/assets/images/confortenergieenvironnement/exImageSolution.jpg)";
      this.nomoffre1 = "Offre 1 : Maîtrise des énergies";
      this.texteoffre1 = "Ceci est un texte pour la solution Maîtrise des énergies du cadran Confort Energie Environnement.";
      this.offre1solutions = ["Consommations énergétiques", "Décret tertiaire","CPE","CEE"];

      // Offer 2
      this.urlphotooffre2 = "url(/assets/images/confortenergieenvironnement/exImageFond.jpg)";
      this.nomoffre2 = "Offre 2 : Maîtrise des déchets";
      this.texteoffre2 = "Ceci est un texte pour la solution Maîtrise des déchets du cadran Confort Energie Environnement.";
      this.offre2solutions = ["Ronde digitalisées", "Gestion des collectes"];
    }
    else if(this.nomcadran == "Espaces"){
      this.couleur = "#0CAAEB";
      // Banner
      this.urlphotofond = "url(/assets/images/espaces/exImageFond.jpg)";
      this.urllogo = "/assets/images/espaces/logo.png";
      this.urlcercles = "/assets/images/espaces/cerclesBandeau.png";
      this.problematiquecadran = "Problématique du cadran Espaces";

      // Offer 1
      this.urlphotooffre1 = "url(/assets/images/espaces/exImageSolution.jpg)";
      this.nomoffre1 = "Offre 1 : Gestion des espaces";
      this.texteoffre1 = "Ceci est un texte pour la solution Gestion des espaces du cadran Espaces.";
      this.offre1solutions = ["Disponibilité des espaces collaboratifs", "Disponibilité des places de parking","Fréquentation et affluence"];

      // Offer 2
      this.urlphotooffre2 = "url(/assets/images/espaces/exImageFond.jpg)";
      this.nomoffre2 = "Offre 2 : Optimisation des espaces";
      this.texteoffre2 = "Ceci est un texte pour la solution Optimisation des espaces du cadran Confort Energie Environnement.";
      this.offre2solutions = ["Etude d'occupation"];
    }
  }

  getNomCadran(){
    var nom = this.router.url.split('/').pop();
    nom = nom.replace(/-/gi, " ");
    nom = nom.split(' ')
             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
             .join(' ');
    return nom;
  }
}
