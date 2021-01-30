import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit, AfterViewInit{
    @Input() admin: boolean;
    @Input() photooffre: string = "url(${photooffre1})";
    @Input() couleur: string = "";
    @Input() texteoffre: string = "";
    @Input() nomoffre: string = "";
    @Input() offresolutions : string[] = [""];
    @Input() configgauche : boolean = false;

    contentEditable : boolean = false;
    modif : boolean = false;

    @ViewChild('listesolutions') selectView: ElementRef;
    @ViewChild('divtext') textView: ElementRef;
    @ViewChild('divimage') imageView: ElementRef;
    @ViewChild('commimg') commimageView: ElementRef;

    constructor() {
      this.admin = false;
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(){
      var index = 0;
      var select = this.selectView.nativeElement;
      for(var solution of this.offresolutions){
        var opt = document.createElement("option");
        opt.value = solution;
        opt.innerHTML = solution;
        select.appendChild(opt);
        index++;
      }
      if(this.configgauche){
        var text = this.textView.nativeElement;
        text.style.right=0;
        var img = this.imageView.nativeElement;
        img.style.left=0;
        var commimg = this.commimageView.nativeElement;
        commimg.style.right=0;
      }
      else{
        var text = this.textView.nativeElement;
        text.style.left=0;
        var img = this.imageView.nativeElement;
        img.style.right=0;
      }
    }

    onModifier(): void {
      this.contentEditable = true;
      this.modif = true;
    }

    onValider(): void {
      this.contentEditable = false;
      this.modif = false;
    }

    updateImageDisplay(): void {
      //console.log(document.getElementById('image').style.backgroundImage);
      console.log(document.getElementById('inputImgSolution'));
    }
}
