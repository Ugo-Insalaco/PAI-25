import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-des2',
  templateUrl: './des2.component.html',
  styleUrls: ['./des2.component.css']
})
export class Des2Component implements OnInit {

  constructor(
    private backend: BackendService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  decouvrir() {
    this.router.navigate(["capteurs"]);
  }

}