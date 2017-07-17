import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';

@Component({
  selector: 'anms-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  versions = env.versions;

  ngOnInit() {
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
