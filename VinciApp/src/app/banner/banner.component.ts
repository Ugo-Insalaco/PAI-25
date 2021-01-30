import { Component, OnInit, Input } from '@angular/core';

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
  @Input() nom: string = "";
  @Input() problematique: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
