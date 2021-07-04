import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatAccordion} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-capteur',
  templateUrl: './capteur.component.html',
  styleUrls: ['./capteur.component.css']
})
export class CapteurComponent implements OnInit {

  constructor(
    private backend: BackendService
  ) { }

  @Input() capteur;

  image: string;
  more = false // affiche ou masque le détail des informations sur le capteur

  imagetest = "/assets/images/capteurs/4.jpg"
  

  ngOnInit(): void {
    this.image = this.capteur.fields.picture

    
  }

  onMore() {
    this.more = true
  }

  onLess(){
    this.more = false
  }

}
