import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  admin: boolean = this.auth.isLoggedIn();

  cadranList: any[] = [];
  urlImage!: string;

  @ViewChild('image') imageView: ElementRef;

  constructor(private cd: ChangeDetectorRef,
              private auth: AuthService,
              private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.GET('/api/cadrans', e=>{
      for(var i=0; i<e.data.length; i++){
        var name = e.data[i].included["text"][0].name.replace(/ /gi, "-").toLowerCase();
        var data = {
          "id": e.data[i].id,
          "color": e.data[i].fields.color,
          "name": e.data[i].included["text"][0].name,
          "url": "/cadran/"+e.data[i].id+"&"+name,
          "problem": e.data[i].included["text"][0].problem
        };
        this.cadranList.push(data);
      }

      // Image de fond
      this.backend.GET('/api/texts/2', e=>{
        this.urlImage = "url("+e.data[0].fields.text+")";
      });
    });
  }

  ngAfterViewInit() {
      this.cd.detectChanges();
  }
}
