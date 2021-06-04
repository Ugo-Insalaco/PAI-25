import { Component,Inject, OnInit,ViewChild,ElementRef  } from '@angular/core';
import {EmailService} from '../services/email.service'
import  jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BackendService} from '../services/backend.service';
import { GlobalStorageService } from '../services/globalStorage.service';

@Component({
  selector: 'app-project-resume',
  templateUrl: './project-resume.component.html',
  styleUrls: ['./project-resume.component.css']
})
export class ProjectResumeComponent implements OnInit {

  nom_sec1: string //nom de la première section
  nom_sec2: string;
  nom_sec3: string;
  nom_sec4: string;
  iots = []; //refs, nombres des iot
  reseau //type de reseau

  dictFR = {
    'title': 'Votre projet IoT',
    'download': 'Télécharger le PDF',
    'submit': 'Soumettre le projet à Vinci Facilities',
    'project': 'Projet',
    'network': 'Type de réseau'
  }
  dictEN = {
    'title': 'Your IoT project',
    'download': 'Download PDF',
    'submit': 'Submit to Vinci Facilities',
    'project': 'Project',
    'network': 'Network'
  }
  dictTexts = {};

  constructor(@Inject(MAT_DIALOG_DATA)
    public data: any,
    private backend: BackendService,
    private email: EmailService,
    private globalstorage: GlobalStorageService
  ){ }

  ngOnInit(): void {
    this.dictTexts = this.globalstorage.get('langage')=='"FRA"'? this.dictFR : this.dictEN;
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


    //Calcul des références et nombres des IoT & du type de réseau
    var project = JSON.parse(this.globalstorage.get("projet"))
    for (let i = 0; i < project.length; i++) {
      if (project[i].info == "sous_solution") {
        var sous_solution = project[i].id_reponse
      }
      if (project[i].info == "nb_iot") {
        this.backend.GET(`/api/nombre_refs`, e=>{
          for (let j = 0; j < e.data.length; j++) {
            if (e.data[j].fields.id_question == project[i].id_question) { //on récupère les données qui correspondent à la question
              if (e.data[j].fields.sous_solution == sous_solution) { //on récupère les données qui correspondent à la sous-solution sélectionnée
                var id_product = e.data[j].fields.product
                var nombre = e.data[j].fields.nombre_iot*project[i].reponse
                this.backend.GET(`/api/products/${id_product}`, e2=>{      
                  var produit = `${e2.data[0].fields.brand} - ${e2.data[0].fields.name} (ref: ${e2.data[0].fields.ref_dataprint})`
                  this.iots.push({"produit": produit, "nombre": nombre})
                })
              }
              if (e.data[j].fields.sous_solution == null) {
                //questions où l'utilisateur a sélectionné lui-même les iot à utiliser
                //on retrouve l'iot concerné dans la réponse précédente
                for (let k = 0; k < project.length; k++) {
                  if (project[k].partie==project[i].partie && project[k].niveau==project[i].niveau-1) {
                    var id_product=project[k].data
                    this.backend.GET(`/api/products/${id_product}`, e2=>{  
                      var nombre = e.data[j].fields.nombre_iot*project[i].reponse    
                      var produit = `${e2.data[0].fields.brand} - ${e2.data[0].fields.name} (ref: ${e2.data[0].fields.ref_dataprint})`
                      this.iots.push({"produit": produit, "nombre": nombre})
                    })
                  }                
                }
              }                                 
            }
          }
        })
      }
      if (project[i].info == "reseau") {
        this.reseau = project[i].data
      }
    }
  }

  public openPDF():void {
    //génération pdf
    let DATA = document.getElementById('htmlData') as HTMLDataElement;

    html2canvas(DATA).then(canvas => {

        let fileWidth = 500;
        let fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'pt', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position,fileWidth, fileHeight)

        PDF.save('Projet_IoT.pdf');
      })
  }


  sendEmail(){
    // this.email.sendEmail(this.data,
    //   res=>{
    //     console.log(res)}
    //   )
    var data = [{"reseau": this.reseau, "iots": this.iots}].concat(JSON.parse(this.globalstorage.get("projet")))
    console.log(data)
            this.email.sendEmail(data,
               res=>{
                 console.log(res)}
            )
  }


}
