import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Subscription, withLatestFrom } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { SnakeService } from './snake.service';

@Component({
  selector: 'lv-snake-editor',
  template: `
    <mat-card>
      <mat-card-title>Snake</mat-card-title>
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

          <!-- Meanness level -->
          <mat-form-field appearance="fill">
            <mat-label>Meanness</mat-label>
            <input
              matInput
              formControlName="meannessLevel"
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
export class SnakeEditorComponent implements OnDestroy {
  private sub?: Subscription;
  editing = false;

  constructor(
    public readonly service: SnakeService,
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.sub = this.snake$.subscribe(r => {
      this.editForm.setValue(r!);
    });
  }

  readonly snake$ = this.route.paramMap.pipe(
    filter(p => p.has('id')),
    map(p => p.get('id')),
    withLatestFrom(this.service.snake$),
    map(([id, snakes]) => snakes.find(r => r.id === id))
  );

  editForm = this.formBuilder.group({
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    meannessLevel: '',
  });

  onSubmit(): void {
    this.service.save(this.editForm.value);
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
