import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { tap, filter } from 'rxjs/operators';

@Injectable()
export class GoogleAnalyticsEffects {
  constructor(private router: Router) {}

  @Effect({ dispatch: false })
  pageView = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    tap((event: NavigationEnd) => {
      (<any>window).ga('set', 'page', event.urlAfterRedirects);
      (<any>window).ga('send', 'pageview');
    })
  );
}
