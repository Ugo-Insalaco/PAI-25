import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-solution-form',
  templateUrl: './new-solution-form.component.html',
  styleUrls: ['./new-solution-form.component.css']
})
export class NewSolutionFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewSolutionFormComponent>) { }

  ngOnInit(): void {
  }

  sendDatatoDB(): void {
    // Récupération des input

    // Enregistrement des textes dans la bdd → récup id des textes renvoyés

    // Creation de la solution dans la table cont_solution

    // Création binding entre offre et solution → besoin id de l'offre et id de la solution

  }

  closePopup(): void {
    this.dialogRef.close();
  }
}
