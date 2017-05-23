import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
