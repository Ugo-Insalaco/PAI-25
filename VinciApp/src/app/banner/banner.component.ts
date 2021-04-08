import { Component, OnInit, Input, ElementRef, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {

  @Input() admin: boolean = false;
  @Input() idcadran: number = 0;
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

  constructor(private cd: ChangeDetectorRef, private backend: BackendService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  colorPreview(event: any){
    this.couleur = event.target.value;
  }

  colorChange(event: any){
    var data = {color: event.target.value};
    this.backend.PATCH('/api/cadrans/'+this.idcadran, data, res=>{
      window.location.reload();
    });
  }
}
