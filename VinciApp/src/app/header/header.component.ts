import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  selected = 'FR';
  loginNavigate(){
    this.router.navigate(['login']);
   
  }
  searchNavigate(){
    this.router.navigate(['search']);
  }
  homeNavigate(){
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
