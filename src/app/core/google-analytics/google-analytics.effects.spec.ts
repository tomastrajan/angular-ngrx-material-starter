import { getEffectsMetadata } from '@ngrx/effects';
import { cold } from 'jasmine-marbles';
import { GoogleAnalyticsEffects } from './google-analytics.effects';
import { NavigationEnd } from '@angular/router';

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

  it('should not dispatch action', function() {
    const effect = new GoogleAnalyticsEffects(router);
    const metadata = getEffectsMetadata(effect);

    expect(metadata.pageView).toEqual({ dispatch: false });
  });

  it('should call google analytics', function() {
    const routerEvent = new NavigationEnd(1, '', '');
    router.events = cold('a', { a: routerEvent });
    const effect = new GoogleAnalyticsEffects(router);

    effect.pageView.subscribe(() => {
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
