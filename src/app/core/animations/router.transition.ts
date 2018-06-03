import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger,
  sequence
} from '@angular/animations';
import { AnimationsService } from './animations.service';

export const ANIMATE_ON_ROUTE_ENTER = 'route-enter-staggered';

const STEPS_ALL: any[] = [
  query(':enter > *', style({ opacity: 0, position: 'fixed' }), {
    optional: true
  }),
  query(':enter .' + ANIMATE_ON_ROUTE_ENTER, style({ opacity: 0 }), {
    optional: true
  }),
  sequence([
    query(
      ':leave > *',
      [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate(
          '0.2s ease-in-out',
          style({ transform: 'translateY(-3%)', opacity: 0 })
        ),
        style({ position: 'fixed' })
      ],
      { optional: true }
    ),
    query(
      ':enter > *',
      [
        style({
          transform: 'translateY(-3%)',
          opacity: 0,
          position: 'static'
        }),
        animate(
          '0.5s ease-in-out',
          style({ transform: 'translateY(0%)', opacity: 1 })
        )
      ],
      { optional: true }
    )
  ]),
  query(
    ':enter .' + ANIMATE_ON_ROUTE_ENTER,
    stagger(100, [
      style({ transform: 'translateY(15%)', opacity: 0 }),
      animate(
        '0.5s ease-in-out',
        style({ transform: 'translateY(0%)', opacity: 1 })
      )
    ]),
    { optional: true }
  )
];
const STEPS_NONE = [];
const STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
const STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];

export const routerTransition = trigger('routerTransition', [
  transition(isRouteAnimationAll, STEPS_ALL),
  transition(isRouteAnimationNone, STEPS_NONE),
  transition(isRouteAnimationPage, STEPS_PAGE),
  transition(isRouteAnimationElements, STEPS_ELEMENTS)
]);

export function isRouteAnimationAll() {
  return AnimationsService.isRouteAnimationType('ALL');
}

export function isRouteAnimationNone() {
  return AnimationsService.isRouteAnimationType('NONE');
}

export function isRouteAnimationPage() {
  return AnimationsService.isRouteAnimationType('PAGE');
}

export function isRouteAnimationElements() {
  return AnimationsService.isRouteAnimationType('ELEMENTS');
}
