import { Component,Inject, OnInit,ViewChild,ElementRef  } from '@angular/core';
 import  jsPDF from 'jspdf';
 import html2canvas from 'html2canvas';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-contact-resume',
  templateUrl: './contact-resume.component.html',
  styleUrls: ['./contact-resume.component.css']
})
export class ContactResumeComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  @ViewChild('htmlData',{static: true}) htmlData:ElementRef;

  ngOnInit(): void {
  }
  /*public openPDF():void {
   let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    console.log(DATA.innerHTML)
    doc.html(DATA.innerHTML);  
    doc.output('dataurlnewwindow');
  }


  public downloadPDF():void {
    
    
      let DATA = this.htmlData.nativeElement;
      let doc = new jsPDF('p','pt', 'a4');
      let handleElement = {
        '#editor':function(element,renderer){
          return true;
        }
      };
      doc.html(DATA.innerHTML);;

      doc.save('angular-demo.pdf');}*/

      
      public openPDF():void {
        let DATA = document.getElementById('htmlData') as HTMLDataElement;
          
        html2canvas(DATA).then(canvas => {
            
            let fileWidth = 500;
            let fileHeight = canvas.height * fileWidth / canvas.width;
            
            const FILEURI = canvas.toDataURL('image/png')
            let PDF = new jsPDF('p', 'pt', 'a4');
            let position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position,fileWidth, fileHeight)
            
            PDF.save('Demande.pdf');
        });     
      }
   
    
    
    

   

}


  
  
  
  
  


