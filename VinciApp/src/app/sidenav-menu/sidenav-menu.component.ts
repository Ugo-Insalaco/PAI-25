import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css']
})
export class SidenavMenuComponent implements OnInit {

  @Output() public sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onCloseSidenav(){
    this.sidenavClose.emit();
  }

}
