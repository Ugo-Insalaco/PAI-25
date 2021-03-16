import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {

  createNewOffer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayEmptyOffer(): void {
    this.createNewOffer = true;
  }

  cancelCreation(): void {
    this.createNewOffer = false;
  }

  sendDatatoDB(): void {
    // Controle que des solutions ont été créées ou demander si ok si pas de solution
    // Methode post mais besoin de création solution avant

    // Enregistrement des textes → récup id des textes
    // Récupération des id des solutions créées
    // Création offre → récup id de l'offre + celle du cadran
    // Création binding entre cadran et offre
  }
}
