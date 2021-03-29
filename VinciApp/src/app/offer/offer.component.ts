import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit, AfterViewInit{
    // Paramètres en input et initialisation des paramètres par défaut
    @Input() admin!: boolean;
    @Input() num!: number;
    @Input() couleur!: string;
    @Input() solutions!: string[];
    @Input() dataoffer!: { [key: string]: any;};
    @Input() configgauche!: boolean;

    contentEditableText1 : boolean = false;
    contentEditableText2 : boolean = false;

    @ViewChild('listesolutions') selectView: ElementRef;
    @ViewChild('sidetext') sideView: ElementRef;
    @ViewChild('text') textView: ElementRef;
    @ViewChild('divimage') imageView: ElementRef;
    @ViewChild('input') input: ElementRef;
    @ViewChild('commimg') commimageView: ElementRef;

    // To get the selected option in the select
    selectedOption!: string;
    selectedText!: string;

    constructor(private backend: BackendService,
                private cd: ChangeDetectorRef,
                private router: Router) {
      this.admin = false;
    }

    ngOnInit(): void {
      this.num += 1;
    }

    ngAfterViewInit(){
      if(this.configgauche){
        var text = this.sideView.nativeElement;
        text.style.right=0;
        var img = this.imageView.nativeElement;
        img.style.left=0;
        var commimg = this.commimageView.nativeElement;
        commimg.style.right=0;
      }
      else{
        var text = this.sideView.nativeElement;
        text.style.left=0;
        var img = this.imageView.nativeElement;
        img.style.right=0;
      }
      this.cd.detectChanges();
    }

    getSelectedOptionText(event: Event) {
       let options = event.target['options'];
       let selectedIndex = options.selectedIndex;
       let selectElementText = options[selectedIndex].text;
       this.selectedText = selectElementText;
    }

    onValiderSolution(){
      // Récupération de l'option sélectionnée et redirection vers page solution
      var idsolution = this.selectedOption;
      var textsolution = this.selectedText;
      if(textsolution!=""){
        textsolution = textsolution.replace(/ /gi, "-");
        textsolution = textsolution.replace(/'/gi, "_").toLowerCase();
        this.router.navigate([this.router.url,idsolution+"&"+textsolution]);
      }
    }

    onDeleteOffer(){
      var input = confirm("Voulez-vous vraiment supprimer cette offre ? \n(Les solutions associées seront également supprimées) \n\nATTENTION : Opération irréversible");
      if(input){
        this.backend.DELETE('/api/offres/'+this.dataoffer["idoffre"], e=>{
          // Suppression des solutions associées
          for(let solution in this.solutions){
            var idsol = this.solutions[solution]["id"];
            if(idsol != null){
              console.log(idsol);
              this.backend.DELETE('/api/solutionContents/'+idsol, e=>{
                console.log("Solution supprimée");
              });
            }
          }
          console.log("Offre supprimée");
          window.location.reload();
        });
      }
    }

    onDeleteSolution(){
      var idsolution = this.selectedOption;
      var textsolution = this.selectedText;
      if(textsolution!=undefined){
        var input = confirm('Voulez-vous vraiment supprimer la solution : "'+textsolution+'" ? \n\nATTENTION : Opération irréversible');
        if(input){
          this.backend.DELETE('/api/solutionContents/'+idsolution, e=>{
            console.log("Solution supprimée");
            window.location.reload();
          });
        }
      }
    }
}
