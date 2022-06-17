import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AccountService } from 'src/app/security/account.service';

@Component({
  selector: 'lv-navbar-login',
  template: `
    <a
      *ngIf="(service.loggedIn$ | async) === false"
      routerLink="/login"
      mat-raised-button
    >
      Log In
    </a>
  `,
})
export class NavbarLoginComponent {
  constructor(readonly service: AccountService) {}
}
