import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lv-navbar-logo',
  template: `
    <a routerLink="/">
      <img
        src="assets/logo.png"
        alt="Logo"
      />
    </a>
  `,
  styles: ['img{height:3rem;}'],
})
export class NavbarLogoComponent {
  constructor() {}
}
