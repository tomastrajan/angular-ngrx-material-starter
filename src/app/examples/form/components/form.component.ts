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
    rating: 0
  });

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
    this.store.dispatch(new ActionFormUpdate({ form: {} }));
  }
}
