import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Title} from '@angular/platform-browser';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
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

      //this.authService.logout();
    }
  //this.authService.logout();
  submit(){}
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
  /*Submit() {
    this.submitted = true;
    this.authService.login(this.username.value, this.password.value).subscribe((data) => {
       if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
          this.router.navigate([redirect]);
        } else {
          this.loginError = 'Username or password is incorrect.';
        }
      },
      error => this.error = error
    );
  }*/
  onSubmit(){
    this.authService.login(this.username.value, this.password.value,
    res=>{
      console.log(res)
      this.router.navigate(['/']);
    },
    err=>{
      console.log(err)
    })
  }
}
