import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AccountService } from 'src/app/security/account.service';

@Component({
  selector: 'lv-navbar-logout',
  template: `
    <button
      *ngIf="service.loggedIn$ | async"
      mat-raised-button
      (click)="service.logout()"
    >
      Log Out
    </button>
  `,
})
export class NavbarLogoutComponent {
  constructor(readonly service: AccountService) {}
}
