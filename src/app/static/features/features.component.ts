import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  versions = env.versions;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
