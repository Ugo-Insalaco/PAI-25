import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import { BackendService } from '../services/backend.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit, AfterViewInit {

  @ViewChild('buttonproject') buttonprojectView: ElementRef;
  @ViewChild('divimage') imageView: ElementRef;

  @ViewChild('problem') problemView: ElementRef;
  @ViewChild('desc') descView: ElementRef;
  @ViewChild('text') textView: ElementRef;

  admin!: boolean;

  // Données récupérées dans l'url
  idcadran!: number;
  idsolution!: number;
  nomcadran!: string;
  nomsolution!: string;

  // Paramètres pour banner
  databanner: { [key: string]: any;} = {};

  // Paramètres pour solution
  datasolution: { [key: string]: string;} = {};

  // Modification des textes
  contentEditableProblem: boolean = false;
  contentEditableDesc: boolean = false;
  contentEditableText: boolean = false;

  constructor(private titleService: Title,
              private auth: AuthService,
              private cd: ChangeDetectorRef,
              private router: Router,
              private backend: BackendService) {
    this.auth.isLoggedIn(res => {
      this.admin = res;
    });
  }

  ngOnInit(): void {
    this.nomcadran = this.getNomCadran();
    this.nomsolution = this.getNomSolution();
    this.idcadran = this.getIdCadran();
    this.idsolution = this.getIdSolution();
    this.titleService.setTitle(`${this.nomsolution} - Vinci Facilities`);
    this.databanner["idcadran"] = this.idcadran;

    // Récupération des données du cadran
    this.backend.GET('/api/cadrans/'+this.idcadran, e=>{
      // Texts Banner
      this.databanner["name"] = e.data[0].included["text"][0].name;
      this.databanner["idname"] = e.data[0].fields.name;
      this.databanner["circles"] = e.data[0].included["text"][0].circles;
      this.databanner["idcircles"] = e.data[0].fields.circles;
      this.databanner["problem"] = e.data[0].included["text"][0].problem;
      this.databanner["idproblem"] = e.data[0].fields.problem;

      // Images Banner
      this.databanner["logo"] = e.data[0].fields.logo;
      this.databanner["color"] = e.data[0].fields.color;
      this.databanner["picture_back"] = "url("+e.data[0].fields.picture_back+")";

      // Récupération des données pour la solution
      this.backend.GET('/api/solutionContents/'+this.idsolution, e=>{
        this.datasolution["name"] = e.data[0].included["text"][0].name;
        this.datasolution["idname"] = e.data[0].fields.name;

        this.datasolution["problem"] = e.data[0].included["text"][0].problem;
        this.datasolution["idproblem"] = e.data[0].fields.problem;

        this.datasolution["desc"] = e.data[0].included["text"][0].arg;
        this.datasolution["iddesc"] = e.data[0].fields.arg;

        this.datasolution["text_db"] = e.data[0].included["text"][0].text_db;
        this.datasolution["idtext"] = e.data[0].fields.text_db;
        this.datasolution["picture_db"] = "url("+e.data[0].fields.picture_db+")";
      });
    });
  }

  ngAfterViewInit(){
    this.cd.detectChanges();
  }

  getNomSolution(){
    var nom = this.router.url.split('/').pop();
    nom = nom.split('&').pop();
    nom = nom.replace(/-/gi, " "); // Remplace - par espace
    nom = nom.replace(/_/gi, "'"); // Remplace _ par '
    nom = nom.charAt(0).toUpperCase() + nom.slice(1); // Majuscule pour 1er mot
    nom = nom.replace(/%C3%A9/gi, "é");
    nom = nom.replace(/%C3%A0/gi, "à");
    return nom;
  }

  getNomCadran(){
    var nom = this.router.url.split('/')[2];
    nom = nom.split('&').pop();
    nom = nom.replace(/-/gi, " "); // Remplace - par espace
    nom = nom.replace(/%C3%A9/gi, "é");
    nom = nom.replace(/%C3%AA/gi, "ê");
    nom = nom.split(' ')  // Majuscule à chaque mot
             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
             .join(' ');
    return nom;
  }

  getIdCadran(){
    var id = this.router.url.split('/')[2];
    id = id.split('&')[0];
    return Number(id);
  }

  getIdSolution(){
    var id = this.router.url.split('/').pop();
    id = id.split('&')[0];
    return Number(id);
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
