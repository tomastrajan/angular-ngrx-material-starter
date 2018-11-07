import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Feature, features } from './features.data';

@Component({
  selector: 'anms-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: Feature[] = features;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
