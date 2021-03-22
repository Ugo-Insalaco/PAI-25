import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { NewSolutionFormComponent } from '../new-solution-form/new-solution-form.component';

@Component({
  selector: 'app-new-solution',
  templateUrl: './new-solution.component.html',
  styleUrls: ['./new-solution.component.css']
})
export class NewSolutionComponent implements OnInit {

  @Input() idOffer: number;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPopup(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;  // The user can't close the dialog by clicking outside its body
    dialogConfig.id = "new-solution-form-component";
    dialogConfig.width = "70%";
    dialogConfig.data = {id: this.idOffer};
    const modalDialog = this.matDialog.open(NewSolutionFormComponent, dialogConfig);
  }
}
