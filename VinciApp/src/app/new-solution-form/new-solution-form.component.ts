import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-new-solution-form',
  templateUrl: './new-solution-form.component.html',
  styleUrls: ['./new-solution-form.component.css']
})
export class NewSolutionFormComponent implements OnInit {

  solutionForm: FormGroup;
  offerid: number;
  @ViewChild('input') imgInput : ElementRef;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private backend: BackendService,
              public dialogRef: MatDialogRef<NewSolutionFormComponent>,
              @Inject(MAT_DIALOG_DATA) data) {

              this.offerid = data.id;
  }

  ngOnInit(): void {
    this.solutionForm = this.formBuilder.group({
      nom: [null, Validators.required],
      problematique: [null, Validators.required],
      description:[null, Validators.required],
      textImg: [null, Validators.required],
      image: [null, Validators.required]
    });
  }

  sendDatatoDB(): void {
    if (this.solutionForm.valid) {
      console.log("Solution créée");

      // Récupération des input
      var input = this.solutionForm.value;

      // Enregistrement de l'image dans assets
      var file = this.imgInput.nativeElement.files[0];
      var nomcadran = this.router.url.split('/').pop().split("&").pop().replace(/-/gi, "");
      var nomsolution = input["nom"].replace(/ /gi, "").toLowerCase();
      var fileName = nomcadran+"_"+nomsolution+(file.type=="image/jpeg"? ".jpg":".png");
      var renamedFile = new File([file],fileName,{type:file.type});

      let formData = new FormData();
      formData.append("file",renamedFile);
      this.backend.POST('/api/upload',formData, res=>{
          console.log('response received is : ',res)
      });

      // Enregistrement des textes dans la bdd → récup id des textes renvoyés
      var jsonNom = {"text": input["nom"]}
      var jsonPb = {"text": input["problematique"]}
      var jsonDesc = {"text": input["description"]}
      var jsonText = {"text": input["textImg"]}

      this.backend.POST('/api/texts',jsonNom, res=>{
          var idnom = res["id"];

          this.backend.POST('/api/texts',jsonPb, res=>{
              var idpb = res["id"];

              this.backend.POST('/api/texts',jsonDesc, res=>{
                  var iddesc = res["id"];

                  this.backend.POST('/api/texts',jsonText, res=>{
                      var idtext = res["id"];

                      // Creation de la solution dans la table cont_solution
                      var urlImg = "/assets/images/"+fileName;

                      var jsonSolution = {
                        "name": idnom,
                        "text_db": idtext,
                        "picture_db": urlImg,
                        "problem": idpb,
                        "arg": iddesc
                      };

                      console.log(jsonSolution);

                      this.backend.POST('/api/solutionContents',jsonSolution, res=>{
                          var idsolution = res["id"];

                          // Création binding entre offre et solution → besoin id de l'offre et id de la solution
                          var jsonBinding = {
                            "id_solution": idsolution
                          };

                          this.backend.POST('/api/offres/'+this.offerid.toString()+"/relationships/solution",jsonBinding, res=>{
                          });
                      });
                  });
              });
          });
      });

      this.resetForm();
    }
  }

  closePopup(): void {
    this.dialogRef.close();
  }

  resetForm(){
    this.solutionForm.reset();
  }
}
