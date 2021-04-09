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
  data!: string[];

  admin!: boolean;

  constructor(private cd: ChangeDetectorRef,
              private auth: AuthService,
              private backend: BackendService) {
    this.auth.isLoggedIn(res => {
      this.admin = res;
    });
  }

  ngOnInit(): void {
    this.backend.GET('/api/texts/1', e=>{
        this.data = e.data[0].fields.text.split('&/&');
        this.data1 = this.data.shift();
    });
  }

  ngAfterViewInit() {
      this.cd.detectChanges();
  }
}
