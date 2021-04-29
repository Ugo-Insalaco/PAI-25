import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactResumeComponent } from '../contact-resume/contact-resume.component';
import {Title} from '@angular/platform-browser';
import { GlobalStorageService } from '../services/globalStorage.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  data:object;

  dictFR = {
    'title': 'Contact',
    'des': 'Une question ? Un besoin ?',
    'titlecivility': 'Civilité',
    'titleM': 'M',
    'titleF': 'Mme',
    'name': 'Nom',
    'firstname': 'Prénom',
    'company': 'Entreprise',
    'phone': 'Téléphone',
    'mail': 'Email',
    'address': 'Adresse',
    'city': 'Ville',
    'postcode': 'Code Postal',
    'object': 'Objet de la demande',
    'objectlist': ["J'ai un projet en local", "J'ai un projet en national", "J'ai un projet international"],
    'business': "Mon segment d’activité",
    'businesslist': ['Collectivités', 'Data center', 'Évenementiel', 'Grands Magasins', 'Habitat',
      'Hôtellerie', 'Immeubles de bureaux', 'Industrie', 'Laboratoires de recherche', 'Musées et lieux culturels',
      'Piscine et balnéothérapie', 'Sites logistiques', 'Écoles', 'Établissements de santé'],
    'info': 'Je souhaite des informations sur',
    'infolist': ['Actifs techniques', 'Santé & Bien-être', 'Environnement', 'Espaces'],
    'message': 'Message',
    'reset': 'Réinitialiser',
    'send': 'Envoyer',
    'mandatory': 'Champ obligatoire'
  }
  dictEN = {
    'title': 'Contact us',
    'des': 'Any questions ? Any needs ?',
    'titlecivility': 'Title',
    'titleM': 'Mr',
    'titleF': 'Mme',
    'name': 'Name',
    'firstname': 'First Name',
    'company': 'Company',
    'phone': 'Phone',
    'mail': 'E-mail',
    'address': 'Address',
    'city': 'City',
    'postcode': 'Postcode',
    'object': 'Object of the request',
    'objectlist': ["I have a local project", "I have a national project", "I have an international project"],
    'business': "My business activity",
    'businesslist': ['Data centres', 'Events', 'Healthcare facilities', 'Hotels', 'Housing', 'Large stores',
      'Industrie', 'Museum and cultural institutions', 'Office environment', 'Research laboratories', 'Schools', 'Logistics sites'],
    'info': 'I want information on',
    'infolist': ['Technical Assets', 'Health & Well-being', 'Environment', 'Spaces'],
    'message': 'Message',
    'reset': 'Reset',
    'send': 'Send',
    'mandatory': 'This field is required'
  }
  dictTexts = {};

  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog,
              private titleService: Title,
              private globalstorage: GlobalStorageService) {}

  ngOnInit() {
    this.dictTexts = this.globalstorage.get('langage')=='"FRA"'? this.dictFR : this.dictEN;
    this.titleService.setTitle(`${this.dictTexts['title']} - Vinci Facilities`);
    this.form = this.formBuilder.group({
      surname: [null, Validators.required],
      name: [null, Validators.required],
      civility:[null, Validators.required],
      entreprise: [null],
      mobile: [null],
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
    if (this.form.valid) {
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
