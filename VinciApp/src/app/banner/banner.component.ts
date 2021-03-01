import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() admin: boolean = false;
  @Input() photo: string = "url(${photo})";
  @Input() logo: string = "";
  @Input() cercles: string = "";
  @Input() couleur: string = "";
  @Input() nomcadran: string = "";
  @Input() problematique: string = "";
  @Input() nomsolution: string = "";

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.GET('/api/cadrans', e=>{
      // Test car que données pour cadran AT
      if(e.data[0].fields.color==this.couleur){
        // Texts
        this.nomcadran = e.data[0].included["text"][0].name;
        this.cercles = e.data[0].included["text"][0].circles;
        this.problematique = e.data[0].included["text"][0].problem;

        // Images
        this.logo = e.data[0].fields.logo;
        this.couleur = e.data[0].fields.color;
        this.photo = "url("+e.data[0].fields.picture_back+")";
      }
    });
  }
}
