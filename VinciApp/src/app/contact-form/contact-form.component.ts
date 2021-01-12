//import { ConnectionService } from './connection.service';
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import { Component, OnInit, HostListener,Input } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
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
        
        object: [null],
        activitySeg: [null],
        info: [null],
        message:[null, Validators.required],
      })
    });
  }

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
    console.log(this.form);
    if (this.form.valid) {
      console.log('form submitted');
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


