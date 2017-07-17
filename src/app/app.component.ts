import { Component, OnDestroy } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { environment as env } from '@env/environment';

import { selectorSettings } from './settings';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  themeClass: string;
  version = env.versions.app;
  year = new Date().getFullYear();

  private unsubscribe$: Subject<void> = new Subject<void>();

  logo = require('../assets/logo.png');
  navigation = [
    { link: 'about', label: 'About' },
    { link: 'features', label: 'Features' },
    { link: 'examples', label: 'Examples' },
  ];

  constructor(
    overlayContainer: OverlayContainer,
    private store: Store<any>
  ) {
    store
      .select(selectorSettings)
      .takeUntil(this.unsubscribe$)
      .map(({ theme }) => theme.toLowerCase())
      .subscribe(theme => {
        this.themeClass = theme;
        overlayContainer.themeClass = theme;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
