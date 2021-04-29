import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GlobalStorageService } from '../services/globalStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selected = this.globalstorage.get('langage')=='"FRA"'? 'FRA' : 'EN';
  isConnected!: boolean;

  dictFR = {
    'login': 'Se connecter',
    'logout': 'Se déconnecter'
  }
  dictEN = {
    'login': 'Login',
    'logout': 'Logout'
  }
  dictTexts = {};

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private auth: AuthService, private globalstorage: GlobalStorageService){
    this.auth.isLoggedIn(res => {
      this.isConnected = res;
    });
  }

  ngOnInit(): void {
    this.dictTexts = this.globalstorage.get('langage')=='"FRA"'? this.dictFR : this.dictEN;
  }

  public onToggleSidenav(){
    this.sidenavToggle.emit();
  }

  OnDisconnect(){
    this.auth.logout();
    window.location.reload();
  }

  changeLanguage(value: string){
    this.globalstorage.set('langage',value);
    window.location.reload();
  }
}
