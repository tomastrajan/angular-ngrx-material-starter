import browser from 'browser-detect';
import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger,
  sequence
} from '@angular/animations';

export const ANIMATE_ON_ROUTE_ENTER = 'route-enter-staggered';

const ROUTE_TRANSITION: any[] = [
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

export const ROUTE_TRANSITION_IE = [ROUTE_TRANSITION[1], ROUTE_TRANSITION[3]];

export const routerTransition = trigger('routerTransition', [
  transition(isNotIEorEdge, ROUTE_TRANSITION),
  transition(isIEorEdge, ROUTE_TRANSITION_IE)
]);

export function isNotIEorEdge() {
  return !isIEorEdge();
}

export function isIEorEdge() {
  return ['ie', 'edge'].includes(browser().name);
}
