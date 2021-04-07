import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-modif-image',
  templateUrl: './modif-image.component.html',
  styleUrls: ['./modif-image.component.css']
})
export class ModifImageComponent implements OnInit {

  @Input() admin!: boolean;
  @Input() buttonName!: string;
  @Input() numoffer: number = 0;
  @Input() nomSolution!: string;
  @Input() imageView!: ElementRef;
  @Input() imageType!: string; // nom de la variable image dans la BDD
  @Input() containerType!: string;
  @Input() containerId!: string;

  @ViewChild('input') input : ElementRef;

  initialURL!: string;
  modifAllowed: boolean = false;
  visualizationActivated : boolean = false;


  constructor(private router: Router, private backend: BackendService) { }

  ngOnInit(): void {
  }

  allowModifImage(): void {
    this.initialURL = this.imageView.nativeElement.style.backgroundImage;
    this.modifAllowed = true;
  }

  closeImageModifPanel(): void {
    this.modifAllowed = false;
    this.imageView.nativeElement.style.backgroundImage = this.initialURL;
  }

  updateImageDisplay(): void {
    var preview = this.imageView.nativeElement;
    var file    = this.input.nativeElement.files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      preview.style.backgroundImage = "url("+reader.result+")";
    }

    if (file) {
      this.visualizationActivated=true;
      reader.readAsDataURL(file);
    }
  }

  sendDatatoDB(): void {
    this.closeImageModifPanel();
    // Upload de l'image dans le dossier assets
    var file = this.input.nativeElement.files[0];
    var nomcadran = "";

    var complementnomimage = "";
    if(this.containerType == "offres"){
      complementnomimage = "offre";
      nomcadran = this.router.url.split('/').pop().split("&").pop().replace(/-/gi, "");
    }
    else if(this.containerType == "solutionContents"){
      complementnomimage = this.nomSolution.replace(/ /gi, "").toLowerCase();
      nomcadran = this.router.url.split('/')[2].split("&").pop().replace(/-/gi, "");
    }
    else if(this.containerType == "cadrans"){
      complementnomimage = this.imageType;
      if(this.nomSolution!=""){
        // Page solution
        nomcadran = this.router.url.split('/')[2].split("&").pop().replace(/-/gi, "");
      }
      else{
        // Page cadran
        nomcadran = this.router.url.split('/').pop().split("&").pop().replace(/-/gi, "");
      }
    }
    else if(this.containerType == "texts"){
      complementnomimage = this.imageType;
      if(this.nomSolution!=undefined){
        // Page solution
        nomcadran = this.router.url.split('/')[1].split("&").pop().replace(/-/gi, "");
        complementnomimage = this.router.url.split('/')[2].split("&").pop().replace(/[-'(),]/gi, "");
      }
      else if(this.router.url=="/"){
        // Page d'accueil
        nomcadran = "accueil";
        complementnomimage = "image";
      }
      else{
        // Page cadran
        nomcadran = this.router.url.split('/').pop().split("&").pop().replace(/-/gi, "");
      }
    }

    var fileName = nomcadran+"_"+complementnomimage+(this.numoffer!=0? this.numoffer : "")+"."+file.name.split(".")[1];
    var renamedFile = new File([file],fileName,{type:file.type});

    let formData = new FormData();
    formData.append("file",renamedFile);
    this.backend.POST('/api/upload',formData, res=>{
    });

    // Mise à jour de l'url dans la base de données
    var data = {};
    data[this.imageType] = "/assets/images/"+fileName;
    this.backend.PATCH('/api/'+this.containerType+"/"+this.containerId, data, res=>{
    });
  }
}
