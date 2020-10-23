import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { createEffect } from '@ngrx/effects';
import { tap, filter } from 'rxjs/operators';

@Injectable()
export class GoogleAnalyticsEffects {
  pageView = createEffect(
    () => () =>
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => {
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        })
      ),
    { dispatch: false }
  );

  constructor(private router: Router) {}
}
