import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './security/account.service';

@Component({
  selector: 'lv-page-login',
  template: `
    <mat-card>
      <mat-card-title>Login to your account</mat-card-title>
      <form (ngSubmit)="onSubmit()">
        <div class="lv-page-fields">
          <mat-form-field appearance="fill">
            <mat-label>Login</mat-label>
            <input
              matInput
              placeholder="Ex. jbloggs"
              [(ngModel)]="login"
              name="login"
            />
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Password</mat-label>
            <input
              matInput
              placeholder="Ex. Pizza"
              [(ngModel)]="password"
              name="password"
            />
          </mat-form-field>
        </div>
        <button
          mat-raised-button
          color="primary"
          type="submit"
        >
          Log in
        </button>
      </form>
    </mat-card>
  `,
  styles: [
    '.lv-page-fields{display:flex;flex-direction:column;}',
    'mat-card{width:40%;margin:3rem;}',
  ],
})
export class LoginComponent {
  login = '';
  password = '';

  constructor(
    private readonly service: AccountService,
    private readonly router: Router
  ) {}

  onSubmit(): void {
    this.service.login({ login: this.login, password: this.password });
    this.router.navigateByUrl('/');
  }
}
