import { Component,Inject, OnInit,ViewChild,ElementRef, ɵConsole  } from '@angular/core';
import {EmailService} from '../services/email.service'
 import  jsPDF from 'jspdf';
 import html2canvas from 'html2canvas';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-contact-resume',
  templateUrl: './contact-resume.component.html',
  styleUrls: ['./contact-resume.component.css']
})
export class ContactResumeComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any   ,     private email: EmailService,
  ){ }
  @ViewChild('htmlData',{static: true}) htmlData:ElementRef;

  ngOnInit(): void {

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
