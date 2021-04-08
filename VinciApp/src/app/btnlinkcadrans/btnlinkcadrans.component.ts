import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-btnlinkcadrans',
  templateUrl: './btnlinkcadrans.component.html',
  styleUrls: ['./btnlinkcadrans.component.css']
})
export class BtnlinkcadransComponent implements OnInit {

  cadranList: any[] = [];

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.GET('/api/cadrans', e=>{
      for(var i=0; i<e.data.length; i++){
        var name = e.data[i].included["text"][0].name.replace(/ /gi, "-").toLowerCase();
        var data = {
          "color": e.data[i].fields.color,
          "name": e.data[i].included["text"][0].name,
          "url": "/cadran/"+e.data[i].id+"$"+name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        };
        this.cadranList.push(data);
      }
    });
  }
}
