import { TestBed, inject } from '@angular/core/testing';

import { AnimationsService } from './animations.service';

describe('AnimationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimationsService]
    });
  });

  it(
    'should set route animation type to "NONE" by default',
    inject([AnimationsService], (service: AnimationsService) => {
      expect(AnimationsService.isRouteAnimationType('NONE')).toBe(true);
    })
  );

  it(
    'should set route animation type to "ALL"',
    inject([AnimationsService], (service: AnimationsService) => {
      service.updateRouteAnimationType(true, true);
      expect(AnimationsService.isRouteAnimationType('ALL')).toBe(true);
    })
  );

  it(
    'should set route animation type to "PAGE"',
    inject([AnimationsService], (service: AnimationsService) => {
      service.updateRouteAnimationType(true, false);
      expect(AnimationsService.isRouteAnimationType('PAGE')).toBe(true);
    })
  );

  it(
    'should set route animation type to "ELEMENTS"',
    inject([AnimationsService], (service: AnimationsService) => {
      service.updateRouteAnimationType(false, true);
      expect(AnimationsService.isRouteAnimationType('ELEMENTS')).toBe(true);
    })
  );
});
