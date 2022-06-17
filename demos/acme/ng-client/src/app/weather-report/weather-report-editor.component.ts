import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Subscription, withLatestFrom } from 'rxjs';
import { WeatherService } from './weather.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'lv-weather-report-editor',
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
          <mat-form-field appearance="fill">
            <mat-label>Choose a date</mat-label>
            <input
              matInput
              [matDatepicker]="picker"
              formControlName="date"
              [readonly]="!editing"
            />
            <mat-hint>MM/DD/YYYY</mat-hint>
            <mat-datepicker-toggle
              matSuffix
              [for]="picker"
              *ngIf="editing"
            >
            </mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>Temperature</mat-label>
            <input
              matInput
              formControlName="temperature"
              [readonly]="!editing"
            />
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>Summary</mat-label>
            <input
              matInput
              formControlName="summary"
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
export class WeatherReportEditorComponent implements OnDestroy {
  private sub?: Subscription;
  editing = false;

  constructor(
    public readonly service: WeatherService,
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.sub = this.report$.subscribe(r => {
      this.editForm.setValue(r!);
    });
  }

  readonly report$ = this.route.paramMap.pipe(
    filter(p => p.has('id')),
    map(p => p.get('id')),
    withLatestFrom(this.service.weather$),
    map(([id, reports]) => reports.find(r => r.id === id))
  );

  editForm = this.formBuilder.group({
    id: '00000000-0000-0000-0000-000000000000',
    date: '',
    temperature: '',
    summary: '',
  });

  onSubmit(): void {
    this.service.save(this.editForm.value);
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
