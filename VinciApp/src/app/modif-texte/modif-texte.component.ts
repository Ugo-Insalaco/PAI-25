import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-modif-texte',
  templateUrl: './modif-texte.component.html',
  styleUrls: ['./modif-texte.component.css']
})
export class ModifTexteComponent implements OnInit {

  @Input() admin: boolean;

  @Input() textView : ElementRef;
  @Input() idtext : number;
  @Input() buttonName !: string;
  @Input() allowNewParagraph: boolean;

  @Input() editAllowed: boolean;
  @Output() editAllowedChange = new EventEmitter<boolean>();

  initialText: string = "";
  modifAllowed: boolean = false;

  constructor(private backend: BackendService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  allowModifText(): void {
    // Conservation du texte si annulation de la modification
    this.initialText = this.getTextContent();

    this.textView.nativeElement.style.border = 'solid 1px red';

    this.editAllowed = true;
    this.modifAllowed = true;
    this.editAllowedChange.emit(this.editAllowed);
  }

  confirmText(): void {
    this.textView.nativeElement.style.border = 'none';

    var data = {
      "text": this.getTextContent()
    };
    this.backend.PATCH('/api/texts/'+this.idtext, data, res=>{
      window.location.reload();
    });
  }

  closeTextModifPanel(): void {
    // Reprise du texte initial
    var paragraphs = this.textView.nativeElement.querySelectorAll("p");
    for(var i=0; i<paragraphs.length;i++){
      paragraphs[i].textContent = this.initialText.split('&/&')[i];
    }

    this.textView.nativeElement.style.border = 'none';
    if(this.allowNewParagraph){
      window.location.reload();
    }

    this.editAllowed = false;
    this.modifAllowed = false;
    this.editAllowedChange.emit(this.editAllowed);
  }

  getTextContent(){
    var paragraphs = this.textView.nativeElement.querySelectorAll("p");
    var text = "";
    for(var i=0; i<paragraphs.length;i++){
      text += paragraphs[i].textContent + "&/&";
    }
    text = text.slice(0,-3);
    return text;
  }

  addParagraph(){
    var newparagraph = document.createElement('p');
    newparagraph.textContent = "Nouveau paragraphe";
    this.renderer.appendChild(this.textView.nativeElement,newparagraph);
    this.initialText = this.getTextContent();
  }

  deleteParagraph(){
    var lastpar = this.textView.nativeElement.lastChild;
    this.renderer.removeChild(this.textView.nativeElement,lastpar);
    this.initialText = this.getTextContent();
  }
}
