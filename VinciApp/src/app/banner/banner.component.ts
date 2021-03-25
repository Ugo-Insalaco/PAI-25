import { Component, OnInit, Input, ElementRef, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {

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

  contentEditableText:boolean = false;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
      this.cd.detectChanges();
  }
}
