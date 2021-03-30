import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})
export class DesComponent implements OnInit, AfterViewInit {

  @ViewChild('main') maintextView: ElementRef;

  contentEditableMain: boolean = false;
  data1!: string;
  data2!: string;

  admin: boolean = this.auth.isLoggedIn();

  constructor(private cd: ChangeDetectorRef,
              private auth: AuthService,
              private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.GET('/api/texts/1', e=>{
        var text = e.data[0].fields.text;
        this.data1 = text.split('&/&')[0];
        this.data2 = text.split('&/&')[1];
    });
  }

  ngAfterViewInit() {
      this.cd.detectChanges();
  }
}
