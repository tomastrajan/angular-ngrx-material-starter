import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
  stagger
} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      { optional: true }),
    query(':enter .route-enter-staggered',
      style({ opacity: 0 }),
      { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateY(-5%)', opacity: 0 }),
        animate('0.5s 0.5s ease-in-out',
          style({ transform: 'translateY(0%)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('0.2s ease-in-out',
          style({ transform: 'translateY(-5%)', opacity: 0 }))
      ], { optional: true })
    ]),
    query(':enter .route-enter-staggered', stagger(100, [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate('0.5s ease-in-out',
        style({ transform: 'translateY(0%)', opacity: 1 })),
    ]), { optional: true }),
  ])
]);
