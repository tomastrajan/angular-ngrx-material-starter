import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

import { selectorSettings, actionChangeTheme } from '../settings.reducer';

@Component({
  selector: 'anms-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  theme: string;

  themes = [
    { value: 'DEFAULT-THEME', label: 'Default' },
    { value: 'LIGHT-THEME', label: 'Light' },
    { value: 'BLACK-THEME', label: 'Black' }
  ];

  constructor(private store: Store<any>) {
    store
      .select(selectorSettings)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(({ theme }) => (this.theme = theme));
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onThemeSelect({ value }) {
    this.store.dispatch(actionChangeTheme(value));
  }
}
