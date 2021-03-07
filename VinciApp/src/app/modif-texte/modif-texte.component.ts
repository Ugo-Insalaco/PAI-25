import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modif-texte',
  templateUrl: './modif-texte.component.html',
  styleUrls: ['./modif-texte.component.css']
})
export class ModifTexteComponent implements OnInit {

  @Input() admin: boolean;

  @Input() textView : ElementRef;

  @Input() editAllowed: boolean;
  @Output() editAllowedChange = new EventEmitter<boolean>();

  initialText: string = "";
  modifAllowed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  allowModifText(): void {
    this.initialText = "";
    // Keep text if modif cancelled
    var paragraphs = this.textView.nativeElement.querySelectorAll("p");
    for(var i=0; i<paragraphs.length;i++){
      this.initialText += paragraphs[i].textContent + "/";
    }
    this.initialText = this.initialText.slice(0,-1);

    this.editAllowed = true;
    this.modifAllowed = true;
    this.editAllowedChange.emit(this.editAllowed);
  }

  confirmText(): void {
    this.editAllowed = false;
    this.modifAllowed = false;
    this.editAllowedChange.emit(this.editAllowed);
  }

  closeTextModifPanel(): void {
    this.modifAllowed = false;
    // Set back initial text
    var paragraphs = this.textView.nativeElement.querySelectorAll("p");
    for(var i=0; i<paragraphs.length;i++){
      paragraphs[i].textContent = this.initialText.split('/')[i];
    }
  }

}
