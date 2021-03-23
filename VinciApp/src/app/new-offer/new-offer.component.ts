import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { NewOfferFormComponent } from '../new-offer-form/new-offer-form.component';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {

  idoffer: number = 3; // récuperer l'id de l'offre ie numéro de l'offre dans le cadran (pas dans BDD)
  idcadran: number = 2; // récuperer l'i ddu cadran dans BDD

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPopup(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;  // The user can't close the dialog by clicking outside its body
    dialogConfig.id = "new-offer-form-component";
    dialogConfig.width = "70%";
    dialogConfig.data = {"numoffer": this.idoffer,"idcadran": this.idcadran};
    const modalDialog = this.matDialog.open(NewOfferFormComponent, dialogConfig);
  }
}
