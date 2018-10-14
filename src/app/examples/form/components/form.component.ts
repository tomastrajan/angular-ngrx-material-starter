import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, filter, debounceTime, take } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { TranslateService } from '@ngx-translate/core';

import { State } from '../../examples.state';
import { ActionFormUpdate, ActionFormReset } from '../form.actions';
import { selectForm } from '../form.selectors';
import { Form } from '../form.model';

@Component({
  selector: 'anms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  form = this.fb.group({
    autosave: false,
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
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
    birthday: ['', [Validators.required]],
    rating: [0, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private translate: TranslateService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store
      .pipe(select(selectForm), take(1))
      .subscribe(form => this.form.patchValue(form.form));

    this.form.valueChanges
      .pipe(
        debounceTime(500),
        filter((form: Form) => form.autosave),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((form: Form) =>
        this.store.dispatch(new ActionFormUpdate({ form }))
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.form = null;
  }

  onSubmit() {
    if (this.form.valid) {
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
  }

  save() {
    this.store.dispatch(new ActionFormUpdate({ form: this.form.value }));
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
    this.store.dispatch(new ActionFormReset());
  }
}
