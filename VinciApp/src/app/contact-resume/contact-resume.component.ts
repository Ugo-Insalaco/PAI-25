import { Component,Inject, OnInit,ViewChild,ElementRef, ɵConsole  } from '@angular/core';
import {EmailService} from '../services/email.service'
import  jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { GlobalStorageService } from '../services/globalStorage.service';


import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-contact-resume',
  templateUrl: './contact-resume.component.html',
  styleUrls: ['./contact-resume.component.css']
})
export class ContactResumeComponent implements OnInit {

  @ViewChild('htmlData',{static: true}) htmlData:ElementRef;

  dictFR = {
    'title': 'Résumé de demande',
    'title2': 'Information personnelles',
    'title3': 'Détails de la demande',
    'titlecivility': 'Civilité',
    'name': 'Nom',
    'firstname': 'Prénom',
    'company': 'Entreprise',
    'phone': 'Téléphone',
    'mail': 'Email',
    'address': 'Adresse',
    'city': 'Ville',
    'postcode': 'Code Postal',
    'object': 'Objet de la demande',
    'business': "Mon segment d’activité",
    'info': 'Je souhaite des informations sur',
    'message': 'Message',
    'reset': 'Réinitialiser',
    'send': 'Envoyer',
    'download': 'Télécharger le PDF',
    'confirm': 'Confirmer la demande'
  }
  dictEN = {
    'title': 'Summary of the request',
    'title2': 'Personal details',
    'title3': 'Request details',
    'titlecivility': 'Title',
    'name': 'Name',
    'firstname': 'First Name',
    'company': 'Company',
    'phone': 'Phone',
    'mail': 'E-mail',
    'address': 'Address',
    'city': 'City',
    'postcode': 'Postcode',
    'object': 'Object of the request',
    'business': "My business activity",
    'info': 'I want information on',
    'message': 'Message',
    'reset': 'Reset',
    'send': 'Send',
    'download': 'Download PDF',
    'confirm': 'Confirm the request'
  }
  dictTexts = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private email: EmailService,
              private globalstorage: GlobalStorageService){ }

  ngOnInit(): void {
    this.dictTexts = this.globalstorage.get('langage')=='"FRA"'? this.dictFR : this.dictEN;
  }

  public openPDF():void {
    //génération pdf pour lathh partie front end
    let DATA = document.getElementById('htmlData') as HTMLDataElement;

    html2canvas(DATA).then(canvas => {
        let fileWidth = 500;
        let fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'pt', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position,fileWidth, fileHeight)

        PDF.save('Demande.pdf');
      })
  }

  sendEmail(){
    this.email.sendEmail(this.data,
      res=>{
        console.log(res)}

    )
  }
}
