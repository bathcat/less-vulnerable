import { Component, OnInit } from '@angular/core';
import { AccountService } from '../security/account.service';
import { WeatherService } from '../weather-report/weather.service';
import { SnakeService } from './snake.service';

@Component({
  selector: 'lv-snake-list',
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
    <ng-container *ngIf="snakeService.snake$ | async as items">
      <mat-table
        [dataSource]="items"
        class="mat-elevation-z8"
      >
        <!-- iname -->
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
          <mat-cell *matCellDef="let element">
            {{ element.name }}
          </mat-cell>
        </ng-container>

        <!-- Meanness-->
        <ng-container matColumnDef="meannessLevel">
          <mat-header-cell *matHeaderCellDef> Meanness </mat-header-cell>
          <mat-cell *matCellDef="let element">
            {{ element.meannessLevel }}
          </mat-cell>
        </ng-container>

        <!-- Edit Column -->
        <ng-container matColumnDef="edit">
          <mat-header-cell *matHeaderCellDef></mat-header-cell>
          <mat-cell *matCellDef="let element">
            <a
              [routerLink]="['/snakes', element.id]"
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
              (click)="snakeService.delete(element)"
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
export class SnakeListComponent {
  constructor(
    readonly snakeService: SnakeService,
    readonly accountService: AccountService
  ) {}

  displayedColumns: string[] = ['name', 'meannessLevel', 'edit', 'delete'];
}
