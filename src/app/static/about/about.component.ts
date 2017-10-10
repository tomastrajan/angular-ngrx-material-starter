import { Component, OnInit } from '@angular/core';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor() {}

  ngOnInit() {}
}
