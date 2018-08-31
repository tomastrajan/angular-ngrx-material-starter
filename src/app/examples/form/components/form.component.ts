import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { TranslateService } from '@ngx-translate/core';

import { State } from '../../examples.state';
import { ActionFormSave, ActionFormUpdate } from '../form.actions';
import { selectForm } from '../form.selectors';

@Component({
  selector: 'anms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  form = this.fb.group({
    autosave: true,
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ]
    ],
    requestGift: [''],
    age: ['', [Validators.min(18), Validators.max(99)]],
    dob: [''],
    address: this.fb.group({
      country: [''],
      state: [''],
      city: [''],
      street: [''],
      zip: [''],
      numero: ['']
    }),
    rating: 10
  });

  minDate: Date;
  maxDate: Date;

  countries = ['Belgium', 'Switzerland'];

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private translate: TranslateService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store
      .pipe(select(selectForm), takeUntil(this.unsubscribe$))
      .subscribe(form => {
        if (!this.form.dirty) {
          this.form.patchValue(form.form);
        }
        this.store.dispatch(new ActionFormSave({ form: form }));
      });

    this.form.valueChanges.subscribe((f: FormGroup) => {
      const today = new Date();
      this.minDate = new Date(
        today.getFullYear() - (f['age'] + 1),
        today.getMonth(),
        today.getDate()
      );
      this.maxDate = new Date(
        today.getFullYear() - f['age'],
        today.getMonth(),
        today.getDate()
      );
      if (f['autosave']) {
        this.store.dispatch(new ActionFormUpdate({ form: f }));
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit() {
    this.save();
    this.snackBar.open(
      this.form.value.requestGift
        ? this.translate.instant('anms.examples.form.text4')
        : this.translate.instant('anms.examples.form.text5'),
      this.translate.instant('anms.examples.form.text6'),
      {
        duration: 1000
      }
    );
  }

  save() {
    this.store.dispatch(new ActionFormUpdate({ form: this.form.value }));
  }

  reset() {
    this.form.reset();
    this.store.dispatch(new ActionFormUpdate({ form: {} }));
  }
}
