import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit, AfterViewInit{
    @Input() admin: boolean;
    @Input() id: int;
    @Input() photooffre: string = "url(${photooffre1})";
    @Input() couleur: string = "";
    @Input() texteoffre: string = "";
    @Input() nomoffre: string = "";
    @Input() offresolutions : string[] = [""];
    @Input() configgauche : boolean = false;

    contentEditable : boolean = false;
    modif : boolean = false;

    visualizationActivated : boolean = false;

    @ViewChild('listesolutions') selectView: ElementRef;
    @ViewChild('divtext') textView: ElementRef;
    @ViewChild('divimage') imageView: ElementRef;
    @ViewChild('input') input: ElementRef;
    @ViewChild('commimg') commimageView: ElementRef;
    @ViewChild('buttonvalidersolution') buttonvalidersolutionView: ElementRef;

    // To get the selected option in the select
    selectedOption: string = "";

    constructor(private router: Router, private backend: BackendService) {
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
    }

    onValiderSolution(){
      // Get selected solution and redirect to solution's page
      var solution = this.selectedOption;
      var button = this.buttonvalidersolutionView.nativeElement;
      if(solution!=""){
        this.router.navigate([this.router.url,solution]);
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
      var preview = this.imageView.nativeElement;
      var file    = this.input.nativeElement.files[0];
      var reader  = new FileReader();

      reader.onloadend = function () {
        preview.style.backgroundImage = "url("+reader.result+")";
      }

      if (file) {
        this.visualizationActivated=true;
        reader.readAsDataURL(file);
      }
    }

    updateAssets(): void {
      var file = this.input.nativeElement.files[0];
      var nomcadran = this.router.url.split('/').pop().replace(/-/gi, "");
      var fileName = nomcadran+"-offre"+this.id+(file.type=="image/jpeg"? ".jpg":".png");
      var renamedFile = new File([file],fileName,{type:file.type});
      console.log(file);
      console.log(renamedFile);

      let formData = new FormData();
      formData.append("file",renamedFile);
      this.backend.POST('/api/upload',formData, res=>{
          console.log('response received is : ',res)
      });
    }
}
