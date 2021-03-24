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
  @Input() numoffer!: number;
  @Input() imageView!: ElementRef;
  @Input() imageType!: string;

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

  updateAssets(): void {
    this.closeImageModifPanel();
    var file = this.input.nativeElement.files[0];
    var nomcadran = this.router.url.split('/').pop().replace(/-/gi, "");
    var fileName = nomcadran+"-"+this.imageType+(this.numoffer!=0? this.numoffer : "")+(file.type=="image/jpeg"? ".jpg":".png");
    var renamedFile = new File([file],fileName,{type:file.type});

    let formData = new FormData();
    formData.append("file",renamedFile);
    this.backend.POST('/api/upload',formData, res=>{
        console.log('response received is : ',res)
    });
  }
}
