import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

import { BackendService } from '/home/sirine/Desktop/PAI-25/VinciApp/src/app/services/backend.service';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private currentUserSubject: BehaviorSubject<User>;
  //public currentUser: Observable<User>;

  constructor(private http: HttpClient, private back: BackendService ) {
    /*this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();*/
   }


   /*public get currentUserValue(): User {
    return this.currentUserSubject.value;
}*/
/*login(username: string, password: string) {
  return this.http.post<any>(this.config.backend.url_api+'/auth/login', { username, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));
}
logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}*/

login(username: string, password: string) {
  
  /*const http$= this.back.POST('/auth/login',{ username:username, password:password },res=>{
   console.log(res)},e=>{console.log(e)}
   )}*/
  }   
   

      
  



}
