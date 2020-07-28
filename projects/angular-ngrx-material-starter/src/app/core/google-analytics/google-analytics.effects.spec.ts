import * as assert from 'assert';
import { NavigationEnd } from '@angular/router';
import { getEffectsMetadata } from '@ngrx/effects';
import { TestScheduler } from 'rxjs/testing';

import { GoogleAnalyticsEffects } from './google-analytics.effects';

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected)
);

describe('GoogleAnalyticsEffects', () => {
  let router: any;
  const ga = (<any>window).ga;

  beforeEach(() => {
    router = {
      routerState: {
        snapshot: {}
      },
      events: {
        pipe() {}
      }
    };

    (<any>window).ga = jasmine.createSpy('ga');
  });

  afterAll(() => {
    (<any>window).ga = ga;
  });

  it('should not dispatch action', function () {
    const effect = new GoogleAnalyticsEffects(router);
    const metadata = getEffectsMetadata(effect);

    expect(metadata.pageView.dispatch).toEqual(false);
  });

  it('should call google analytics', function () {
    scheduler.run((helpers) => {
      const { cold } = helpers;

      const routerEvent = new NavigationEnd(1, '', '');
      router.events = cold('a', { a: routerEvent });
      const effect = new GoogleAnalyticsEffects(router);

      effect.pageView().subscribe(() => {
        expect((<any>window).ga).toHaveBeenCalled();
        expect((<any>window).ga).toHaveBeenCalledWith(
          'set',
          'page',
          routerEvent.urlAfterRedirects
        );
        expect((<any>window).ga).toHaveBeenCalledWith('send', 'pageview');
      });
    });
  });
});
