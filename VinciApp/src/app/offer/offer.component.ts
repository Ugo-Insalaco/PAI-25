import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit, AfterViewInit{
    @Input() admin: boolean;
    @Input() id: number;
    @Input() photooffre: string = "url(${photooffre1})";
    @Input() couleur: string = "";
    @Input() texteoffre: string = "";
    @Input() nomoffre: string = "";
    @Input() offresolutions : string[] = [""];
    @Input() configgauche : boolean = false;

    contentEditableText1 : boolean = false;
    contentEditableText2 : boolean = false;

    @ViewChild('listesolutions') selectView: ElementRef;
    @ViewChild('divtext') textView: ElementRef;
    @ViewChild('divimage') imageView: ElementRef;
    @ViewChild('input') input: ElementRef;
    @ViewChild('commimg') commimageView: ElementRef;
    @ViewChild('buttonvalidersolution') buttonvalidersolutionView: ElementRef;

    // To get the selected option in the select
    selectedOption: string = "";

    constructor(private cd: ChangeDetectorRef,private router: Router) {
      this.admin = false;
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(){
      var index = 0;
      var select = this.selectView.nativeElement;
      for(var solution of this.offresolutions){
        var opt = document.createElement("option");
        opt.value = solution.replace(/ /gi, "-");
        opt.value = opt.value.replace(/'/gi, "_").toLowerCase();
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
      this.cd.detectChanges();
    }

    onValiderSolution(){
      // Get selected solution and redirect to solution's page
      var solution = this.selectedOption;
      var button = this.buttonvalidersolutionView.nativeElement;
      if(solution!=""){
        this.router.navigate([this.router.url,solution]);
      }
    }
}
