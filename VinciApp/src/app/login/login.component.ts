import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../services/auth.service';
import {BackendService} from '../services/backend.service';
import { GlobalStorageService } from '../services/globalStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isAdmin=false;
  loginForm: FormGroup;
  returnUrl: string;
  error: {errorTitle: '', errorDesc: ''};

  dictFR = {
    'login': 'Se connecter',
    'id': 'Identifiant',
    'pwd': 'Mot de passe',
    'incorrectid': "Le nom d'utilisateur est incorrect",
    'incorrectpwd': 'Le mot de passe est incorrect',
    'incorrectsubmission': "L'identifiant ou le mot de passe est incorrect"
  }
  dictEN = {
    'login': 'Login',
    'id': 'Username',
    'pwd': 'Password',
    'incorrectid': "Incorrect username",
    'incorrectpwd': 'Incorrect password',
    'incorrectsubmission': "Username or password is incorrect"
  }
  dictTexts = {};
  incorrectSubmission: boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private titleService: Title,
    private authService: AuthService,
    private back: BackendService,
    private globalstorage: GlobalStorageService) { }

  ngOnInit() {
    this.dictTexts = this.globalstorage.get('langage')=='"FRA"'? this.dictFR : this.dictEN;
    this.titleService.setTitle(`${this.dictTexts['login']} - Vinci Facilities`);
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(){
    this.authService.login(this.username.value, this.password.value,
    res=>{
      console.log(res)
      this.router.navigate(['/']);
    },
    err=>{
      console.log(err)
    })
    this.incorrectSubmission = true
  }
}
