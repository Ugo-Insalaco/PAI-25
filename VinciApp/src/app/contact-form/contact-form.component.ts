import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactResumeComponent } from '../contact-resume/contact-resume.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  data:object;
  constructor(private formBuilder: FormBuilder,public dialog: MatDialog, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(`Contact - Vinci Facilities`);
    this.form = this.formBuilder.group({
      surname: [null, Validators.required],
      name: [null, Validators.required],
      civility:[null, Validators.required],
      entreprise: [null, Validators.required],
      mobile: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({

        street: [null, Validators.required],
        city: [null, Validators.required],
        zipCode: [null, Validators.required]

      }),
      request: this.formBuilder.group({

        object: [null, Validators.required],
        activitySeg: [null, Validators.required],
        info: [null, Validators.required],
        message:[null, Validators.required],
      }),
     /* acceptation: this.formBuilder.group({

        accept: [null, Validators.required],

      })*/
    });
  }
  get surname() { return this.form.get('surname'); }
  get name() { return this.form.get('name'); }
  get civility() { return this.form.get('civility'); }
  get entreprise() { return this.form.get('entreprise'); }
  get mobile() { return this.form.get('mobile'); }
  get email() { return this.form.get('email'); }

  get street() { return this.form.get('address.street'); }
  get city() { return this.form.get('address.city'); }
  get zipCode() { return this.form.get('address.zipCode'); }

  get object() { return this.form.get('request.object'); }

  get activitySeg() { return this.form.get('request.activitySeg'); }
  get info() { return this.form.get('request.info'); }
  get  message() { return this.form.get('request.message'); }
  //get  accept() { return this.form.get('acceptation.accept'); }





  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }


  onSubmit() {
    //console.log(this.form);
    if (this.form.valid) {
     console.log( this.email)
    const dialogRef = this.dialog.open(ContactResumeComponent,{data:{Name:this.name.value,
      Surname:this.surname.value,Civilite:this.civility.value,Entreprise:this.entreprise.value,Telephone:this.mobile.value
      ,Email:this.email.value,Street:this.street.value,city:this.city.value,zip:this.zipCode.value,object:this.object.value,
    activitySeg:this.activitySeg.value,info:this.info.value,message:this.message.value}});

    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset(){
    this.form.reset();
}





  }
