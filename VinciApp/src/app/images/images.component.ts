import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  cadranList: any[] = [];

  constructor(private backend: BackendService) { }

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
    });
  }
}
