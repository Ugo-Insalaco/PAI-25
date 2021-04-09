import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selected = 'FR';
  isConnected!: boolean;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private auth: AuthService){
    this.auth.isLoggedIn(res => {
      this.isConnected = res;
    });
  }

  ngOnInit(): void {
  }

  public onToggleSidenav(){
    this.sidenavToggle.emit();
  }

  OnDisconnect(){
    this.auth.logout();
    window.location.reload();
  }
}
