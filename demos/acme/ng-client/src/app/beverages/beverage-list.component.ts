import { Component, OnInit } from '@angular/core';
import { AccountService } from '../security/account.service';
import { BeverageService } from './beverage.service';

@Component({
  selector: 'lv-beverage-list',
  template: `
    <ng-container *ngIf="beverageService.beverage$ | async as items">
      <mat-table
        [dataSource]="items"
        class="mat-elevation-z8"
      >
        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
          <mat-cell *matCellDef="let element">
            {{ element.name }}
          </mat-cell>
        </ng-container>

        <!-- Description Column -->
        <ng-container matColumnDef="description">
          <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>
          <mat-cell *matCellDef="let element">
            {{ element.description }}
          </mat-cell>
        </ng-container>

        <!-- Edit Column -->
        <ng-container matColumnDef="edit">
          <mat-header-cell *matHeaderCellDef></mat-header-cell>
          <mat-cell *matCellDef="let element">
            <a
              [routerLink]="['/beverages', element.id]"
              mat-icon-button
              color="primary"
              aria-label="Example icon button with a home icon"
            >
              <mat-icon>edit</mat-icon>
            </a>
          </mat-cell>
        </ng-container>

        <!-- Delete Column -->
        <ng-container matColumnDef="delete">
          <mat-header-cell *matHeaderCellDef></mat-header-cell>
          <mat-cell *matCellDef="let element">
            <button
              mat-icon-button
              (click)="beverageService.delete(element)"
              *ngIf="accountService.loggedIn$ | async"
            >
              <mat-icon>delete</mat-icon>
            </button>
          </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
      </mat-table>
    </ng-container>
  `,
  styles: ['a[mat-fab]{float:right;z-index: 100;margin:1rem;}'],
})
export class BeverageListComponent {
  constructor(
    readonly beverageService: BeverageService,
    readonly accountService: AccountService
  ) {}

  displayedColumns: string[] = ['name', 'description', 'edit', 'delete'];
}
