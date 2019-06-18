import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  constructor() {
    AnimationsService.routeAnimationType = 'NONE';
  }

  private static routeAnimationType: RouteAnimationType = 'NONE';

  static isRouteAnimationsType(type: RouteAnimationType) {
    return AnimationsService.routeAnimationType === type;
  }

  updateRouteAnimationType(
    pageAnimations: boolean,
    elementsAnimations: boolean
  ) {
    AnimationsService.routeAnimationType =
      pageAnimations && elementsAnimations
        ? 'ALL'
        : pageAnimations
        ? 'PAGE'
        : elementsAnimations
        ? 'ELEMENTS'
        : 'NONE';
  }
}

export type RouteAnimationType = 'ALL' | 'PAGE' | 'ELEMENTS' | 'NONE';
