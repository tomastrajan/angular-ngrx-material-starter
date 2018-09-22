import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  themeSrc: string = require('!raw-loader!./parent.component.scss-theme.scss');

  constructor() {}

  ngOnInit() {}
}
