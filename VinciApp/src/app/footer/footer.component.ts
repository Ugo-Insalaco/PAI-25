import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { GlobalStorageService } from '../services/globalStorage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dictFR = {
    'contact': 'Contactez-nous',
    'des': 'Votre métier et vos occupants sont au cœur de nos préoccupations',
    'btn': 'Contactez-nous'
  }
  dictEN = {
    'contact': 'Contact us',
    'des': 'Your business and your occupants are our core focus',
    'btn': 'Contact'
  }
  dictTexts = {};

  constructor(private route:ActivatedRoute, private router:Router, private globalstorage: GlobalStorageService) { }

  ngOnInit(): void {
    this.dictTexts = this.globalstorage.get('langage')=='"FRA"'? this.dictFR : this.dictEN;
  }
  contactNavigate(){
    this.router.navigate(['contact']);
  }

}
