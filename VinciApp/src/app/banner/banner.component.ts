import { Component, OnInit, Input, ElementRef, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {

  @Input() admin: boolean = false;
  @Input() couleur: string = "";
  @Input() nomsolution: string = "";
  @Input() idnamesolution: number = 0;
  @Input() databanner!: { [key: string]: any;};

  @ViewChild('cercles') cerclesView: ElementRef;
  @ViewChild('logo') logoView: ElementRef;
  @ViewChild('fond') fondView: ElementRef;
  @ViewChild('nom') nomView: ElementRef;
  @ViewChild('problem') problemView: ElementRef;
  @ViewChild('sol') solutionView: ElementRef;

  contentEditableNom:boolean = false;
  contentEditableProblem:boolean = false;
  contentEditableSolution:boolean = false;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
      this.cd.detectChanges();
  }
}
