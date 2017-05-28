import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  intro = require('../../../assets/intro.jpg');

  constructor() { }

  ngOnInit() {
  }

}
