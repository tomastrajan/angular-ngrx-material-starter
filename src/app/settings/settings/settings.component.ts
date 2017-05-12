import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SETTINGS_THEME } from '../settings.reducer';

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
    { value: 'DARK-THEME', label: 'Dark' }
  ];

  constructor(private store: Store<any>) {
    store.select('settings')
      .takeUntil(this.unsubscribe$)
      .subscribe(({ theme }) => this.theme = theme);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onThemeSelect({ value }) {
    this.store.dispatch({ type: SETTINGS_THEME, payload: value });
  }

}
