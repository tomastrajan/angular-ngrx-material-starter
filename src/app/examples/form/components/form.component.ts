import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {
  Validators,
  FormBuilder,
  AbstractControl,
  FormGroup,
  FormControl
} from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { State } from '@app/examples/examples.state';
import { takeUntil } from 'rxjs/operators';
import { selectForm } from '@app/examples/form/form.selectors';
import { ActionFormRetrieve } from '@app/examples/form/form.actions';
import { Form } from '@app/examples/form/form.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'anms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  initialized;

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
    wannagift: [''],
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
    public snackBar: MatSnackBar
  ) {
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
        this.store.dispatch(new ActionFormRetrieve(f));
      }
    });
  }

  ngOnInit() {
    this.initialized = false;
    this.store
      .pipe(select(selectForm), takeUntil(this.unsubscribe$))
      .subscribe((form: any) => {
        if (!this.initialized) {
          this.initialized = true;
          this.form.patchValue(form);
          this.store.dispatch(new ActionFormRetrieve(form));
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
      this.form.value.wannagift ? 'Gift sended !' : 'No gift sended.',
      'Clap',
      {
        duration: 1000
      }
    );
  }

  save() {
    this.store.dispatch(new ActionFormRetrieve(this.form.value));
  }

  reset() {
    this.form.reset();
    this.store.dispatch(new ActionFormRetrieve({}));
  }
}
