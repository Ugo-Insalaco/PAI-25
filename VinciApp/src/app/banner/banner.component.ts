import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, ViewChild } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() admin: boolean = false;
  @Input() photo: string = "url(${photo})";
  @Input() logoURL: string = "";
  @Input() cerclesURL: string = "";
  @Input() couleur: string = "";
  @Input() nomcadran: string = "";
  @Input() problematique: string = "";
  @Input() nomsolution: string = "";

  @ViewChild('cercles') cerclesView: ElementRef;
  @ViewChild('logo') logoView: ElementRef;
  @ViewChild('fond') fondView: ElementRef;
  @ViewChild('textcontainer') textView: ElementRef;

  contentEditableText:boolean;

  constructor(private backend: BackendService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.backend.GET('/api/cadrans', e=>{
      if(e.data[0].fields.color==this.couleur){
        // Texts
        this.nomcadran = e.data[0].included["text"][0].name;
        this.cerclesURL = e.data[0].included["text"][0].circles;
        this.problematique = e.data[0].included["text"][0].problem;

        // Images
        this.logoURL = e.data[0].fields.logo;
        this.couleur = e.data[0].fields.color;
        this.photo = "url("+e.data[0].fields.picture_back+")";
      }
      this.cd.detectChanges();
    });
  }


  sendDatatoDB(): void{
    /*var jsoncadran = {
      "id": 4,
      "name": 19,
      "color": this.couleur,
      "picture_back": this.photo,
      "logo": this.logoURL,
      "circles": 20,
      "problem": 22
    };
    var jsontext = {
      "text": "Problématique du cadran Environnement"
    };

    this.backend.POST('/api/cadrans', jsoncadran , e=>{});*/
  }
}
