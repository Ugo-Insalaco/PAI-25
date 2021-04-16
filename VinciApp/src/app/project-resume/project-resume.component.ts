import { Component,Inject, OnInit,ViewChild,ElementRef  } from '@angular/core';
import {EmailService} from '../services/email.service'
import  jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BackendService } from '../services/backend.service';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private backend: BackendService,public http: EmailService) { }
  @ViewChild('htmlData',{static: true}) htmlData:ElementRef;

  ngOnInit(): void {
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

        // //envoi email
        // let contactUser = {
        //   name: this.data.object,
        //   email: this.data.Email,
        //   doc: PDF,
        // }
        // this.http.sendEmail("http://localhost:3000/sendmail", contactUser).subscribe(
        // data => {
        //  let res:any = data;
        //   console.log("mail envoyé correctement");},
        //  err => {
        // console.log(err);
    // });
  })
  }

}
