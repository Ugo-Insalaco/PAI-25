import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit, AfterViewInit{
    // Paramètres en input et initialisation des paramètres par défaut
    @Input() admin!: boolean;
    @Input() num!: number;
    @Input() idBDD!: number;
    @Input() photooffre!: string;
    @Input() couleur!: string;
    @Input() texteoffre!: string;
    @Input() nomoffre!: string;
    @Input() solutions!: string[];
    @Input() configgauche!: boolean;

    contentEditableText1 : boolean = false;
    contentEditableText2 : boolean = false;

    @ViewChild('listesolutions') selectView: ElementRef;
    @ViewChild('divtext') textView: ElementRef;
    @ViewChild('divimage') imageView: ElementRef;
    @ViewChild('input') input: ElementRef;
    @ViewChild('commimg') commimageView: ElementRef;
    @ViewChild('buttonvalidersolution') buttonvalidersolutionView: ElementRef;

    // To get the selected option in the select
    selectedOption!: string;
    selectedText!: string;

    constructor(private cd: ChangeDetectorRef,private router: Router) {
      this.admin = false;
    }

    ngOnInit(): void {
      this.num += 1;
    }

    ngAfterViewInit(){
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
      var button = this.buttonvalidersolutionView.nativeElement;
      if(textsolution!=""){
        textsolution = textsolution.replace(/ /gi, "-");
        textsolution = textsolution.replace(/'/gi, "_").toLowerCase();
        this.router.navigate([this.router.url,idsolution+"&"+textsolution]);
      }
    }
}
