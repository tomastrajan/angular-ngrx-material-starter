import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/animations/route.animations';

@Component({
  selector: 'anms-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  counter = 0;

  constructor() {}

  ngOnInit() {}

  increment() {
    this.counter++;
  }
}
