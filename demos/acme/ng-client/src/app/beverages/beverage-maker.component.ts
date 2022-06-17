import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, startWith, Subscription, withLatestFrom } from 'rxjs';
import { Beverage } from './beverage';
import { BeverageService } from './beverage.service';

const API_URL = 'https://localhost:7232/beverages';

@Component({
  selector: 'lv-beverage-maker',
  template: `
    <mat-card>
      <mat-card-title>New Beverage</mat-card-title>
      <mat-card-content>
        <form
          ngNoForm
          target="_top"
          action="${API_URL}"
          method="post"
        >
          <input
            hidden="true"
            name="ID"
            value="00000000-0000-0000-0000-000000000000"
          />

          <!-- Name -->
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="Name"
          /><br /><br />

          <!-- Description -->
          <label for="description">Description</label>
          <input
            type="text"
            id="description"
            name="Description"
          /><br /><br />

          <input
            type="submit"
            value="Submit"
          />
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: ['mat-card-content{display:flex;flex-direction:column;}'],
})
export class BeverageMakerComponent {
  constructor() {}
}
