import { animate, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('ListPage => DetailPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ transform: 'translateX(100%)' })], { optional: true }),
    query(':leave', [animate('50ms ease-out', style({ transform: 'translateX(-100%)' }))], { optional: true }),
    query(':enter', [animate('50ms ease-out', style({ transform: 'translateX(0%)' }))], { optional: true }),
  ]),
  transition('DetailPage => ListPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ transform: 'translateX(-100%)' })], { optional: true }),
    query(':leave', [animate('50ms ease-out', style({ transform: 'translateX(100%)' }))], { optional: true }),
    query(':enter', [animate('50ms ease-out', style({ transform: 'translateX(0%)' }))], { optional: true }),
  ]),
]);
