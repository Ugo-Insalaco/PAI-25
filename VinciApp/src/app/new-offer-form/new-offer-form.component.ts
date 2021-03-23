import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-new-offer-form',
  templateUrl: './new-offer-form.component.html',
  styleUrls: ['./new-offer-form.component.css']
})
export class NewOfferFormComponent implements OnInit {

  offerForm: FormGroup;
  numoffer: number;
  idcadran: number;
  @ViewChild('input') imgInput : ElementRef;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private backend: BackendService,
              public dialogRef: MatDialogRef<NewOfferFormComponent>,
              @Inject(MAT_DIALOG_DATA) data) {

              this.numoffer = data.numoffer;
              this.idcadran = data.idcadran
  }

  ngOnInit(): void {
    this.offerForm = this.formBuilder.group({
      nom: [null, Validators.required],
      textImg: [null, Validators.required],
      image: [null, Validators.required]
    });
  }

  closePopup(): void {
    this.dialogRef.close();
  }

  resetForm(){
    this.offerForm.reset();
  }

  sendDatatoDB(): void {
    if (this.offerForm.valid) {
      console.log("Offre créée");

      // Récupération des inputs
      var input = this.offerForm.value;

      // Enregistrement de l'image dans assets
      var file = this.imgInput.nativeElement.files[0];
      var nomcadran = this.router.url.split('/').pop().replace(/-/gi, "");
      var nomoffre = "offre"+this.numoffer;
      var fileName = nomoffre+(file.type=="image/jpeg"? ".jpg":".png");
      var renamedFile = new File([file],nomcadran+"-"+fileName,{type:file.type});
      console.log(renamedFile);

      let formData = new FormData();
      formData.append("file",renamedFile);
      this.backend.POST('/api/upload',formData, res=>{
          console.log('response received is : ',res)
      });

      // Enregistrement des textes dans la bdd → récup id des textes renvoyés
      var jsonNom = {"text": input["nom"]}
      var jsonText = {"text": input["textImg"]}

      this.backend.POST('/api/texts',jsonNom, res=>{
        var idnom = res["id"];

        this.backend.POST('/api/texts',jsonText, res=>{
          var idtext = res["id"];

          // Creation de l'offre dans la table cont_offre
          var urlImg = "/assets/images/"+nomcadran+"/"+fileName;

          var jsonOffre = {
            "name": idnom,
            "text": idtext,
            "picture": urlImg
          };

          console.log(jsonOffre);

          this.backend.POST('/api/offres',jsonOffre, res=>{
            var idoffre = res["id"];

            // Création binding entre offre et cadran → besoin id du cadran
            var jsonBinding = {
              "id_offre": idoffre
            };

            this.backend.POST('/api/cadrans/'+this.idcadran.toString()+"/relationships/offre",jsonBinding, res=>{
            });
          });
        });
      });

      // Récupération des id des solutions créées
      // Création offre → récup id de l'offre + celle du cadran
      // Création binding entre cadran et offre
      this.resetForm();
    }
  }
}
