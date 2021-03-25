import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public router: Router) {}

  ngOnInit() {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(-10, 0);
      });
      // Rechargement de la page à chaque changement d'url
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
      }
    }
}
