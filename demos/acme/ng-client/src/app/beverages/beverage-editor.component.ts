import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Subscription, withLatestFrom } from 'rxjs';
import { WeatherService } from '../weather-report/weather.service';
import { FormBuilder } from '@angular/forms';
import { BeverageService } from './beverage.service';

@Component({
  selector: 'lv-beverage-editor',
  template: `
    <mat-card>
      <mat-card-title>Weather Report</mat-card-title>
      <form
        [formGroup]="editForm"
        (ngSubmit)="onSubmit()"
      >
        <mat-card-content>
          <input
            hidden="true"
            formControlName="id"
          />

          <!-- Name -->
          <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input
              matInput
              formControlName="name"
              [readonly]="!editing"
            />
          </mat-form-field>

          <!-- Description -->
          <mat-form-field appearance="fill">
            <mat-label>Description</mat-label>
            <input
              matInput
              formControlName="description"
              [readonly]="!editing"
            />
          </mat-form-field>
        </mat-card-content>
        <mat-card-actions>
          <button
            mat-raised-button
            color="accent"
            type="submit"
          >
            Save
          </button>
          <a
            mat-raised-button
            color="warn"
            routerLink="/"
          >
            Cancel
          </a>
        </mat-card-actions>
      </form>
    </mat-card>
  `,
  styles: ['mat-card-content{display:flex;flex-direction:column;}'],
})
export class BeverageEditorComponent implements OnDestroy {
  private sub?: Subscription;
  editing = false;

  constructor(
    public readonly service: BeverageService,
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.sub = this.beverage$.subscribe(r => {
      this.editForm.setValue(r!);
    });
  }

  readonly beverage$ = this.route.paramMap.pipe(
    filter(p => p.has('id')),
    map(p => p.get('id')),
    withLatestFrom(this.service.beverage$),
    map(([id, beverages]) => beverages.find(r => r.id === id))
  );

  editForm = this.formBuilder.group({
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    description: '',
  });

  onSubmit(): void {
    this.service.save(this.editForm.value);
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
