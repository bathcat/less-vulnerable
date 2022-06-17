import { Component, OnInit } from '@angular/core';
import { AccountService } from '../security/account.service';
import { WeatherService } from './weather.service';

@Component({
  selector: 'lv-weather-report-list',
  template: `
    <!-- <a
      *ngIf="accountService.loggedIn$ | async"
      mat-fab
      color="primary"
      aria-label="Example icon button with a delete icon"
      routerLink="/weather-reports/create"
    >
      <mat-icon>add_circle</mat-icon>
    </a> -->
    <ng-container *ngIf="weatherService.weather$ | async as items">
      <mat-table
        [dataSource]="items"
        class="mat-elevation-z8"
      >
        <!-- Date Column -->
        <ng-container matColumnDef="date">
          <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>
          <mat-cell *matCellDef="let element">
            {{ element.date }}
          </mat-cell>
        </ng-container>

        <!-- Temperature Column -->
        <ng-container matColumnDef="temperature">
          <mat-header-cell *matHeaderCellDef> Temperature </mat-header-cell>
          <mat-cell *matCellDef="let element">
            {{ element.temperature }}
          </mat-cell>
        </ng-container>

        <!-- Summary Column -->
        <ng-container matColumnDef="summary">
          <mat-header-cell *matHeaderCellDef> Summary </mat-header-cell>
          <mat-cell *matCellDef="let element">
            {{ element.summary }}
          </mat-cell>
        </ng-container>

        <!-- Edit Column -->
        <ng-container matColumnDef="edit">
          <mat-header-cell *matHeaderCellDef></mat-header-cell>
          <mat-cell *matCellDef="let element">
            <a
              [routerLink]="['/weather-reports', element.id]"
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
              (click)="weatherService.delete(element)"
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
export class WeatherReportListComponent {
  constructor(
    readonly weatherService: WeatherService,
    readonly accountService: AccountService
  ) {}

  displayedColumns: string[] = [
    'date',
    'temperature',
    'summary',
    'edit',
    'delete',
  ];
}
