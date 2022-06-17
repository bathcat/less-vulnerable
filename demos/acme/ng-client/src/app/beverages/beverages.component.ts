import { Component, OnInit } from '@angular/core';
import { AccountService } from '../security/account.service';

@Component({
  selector: 'lv-beverages',
  template: `
    <a
      *ngIf="accountService.loggedIn$ | async"
      mat-fab
      color="primary"
      aria-label="Example icon button with a delete icon"
      routerLink="/beverages/create"
    >
      <mat-icon>add_circle</mat-icon>
    </a>
    <lv-beverage-list></lv-beverage-list>
  `,
})
export class BeveragesComponent {
  constructor(readonly accountService: AccountService) {}
}
