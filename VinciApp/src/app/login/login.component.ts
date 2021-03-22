import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Title} from '@angular/platform-browser';
import {AuthService} from '/home/sirine/Desktop/PAI-25/VinciApp/src/app/services/auth.service';
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
  loginError: string;
  constructor(private fb: FormBuilder,
    private router: Router,
    private titleService: Title,
    private authService: AuthService
    ) { }

    ngOnInit() {
      this.titleService.setTitle(`Login - Vinci Facilities`);
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });

    }
  //this.authService.logout();
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
  Submit() {
    
  this.authService.login(this.username.value, this.password.value)
    
  }  
} 