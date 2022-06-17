import { Component } from '@angular/core';

@Component({
  selector: 'lv-root',
  template: `
    <nav
      mat-tab-nav-bar
      [tabPanel]="tabPanel"
    >
      <lv-navbar-logo></lv-navbar-logo>
      <a
        mat-tab-link
        [routerLink]="'/'"
      >
        Home
      </a>
      <a
        mat-tab-link
        [routerLink]="'/weather-reports'"
      >
        Weather
      </a>
      <a
        mat-tab-link
        [routerLink]="'/snakes'"
      >
        Snakes
      </a>
      <a
        mat-tab-link
        [routerLink]="'/beverages'"
      >
        Beverages
      </a>
      <div class="lv-nav-buttons">
        <lv-navbar-login></lv-navbar-login>
        <lv-navbar-logout></lv-navbar-logout>
      </div>
    </nav>
    <mat-tab-nav-panel #tabPanel>
      <router-outlet></router-outlet>
    </mat-tab-nav-panel>
  `,
  styles: [
    '.lv-nav-buttons{ margin-left:10rem;display:flex;flex-direction:row;justify-content:space-around;align-items: stretch;gap:1rem;}',
    'mat-tab-nav-panel{background-color: rgb(64, 64, 64);}',
  ],
})
export class AppComponent {
  title = 'web-client';
}
