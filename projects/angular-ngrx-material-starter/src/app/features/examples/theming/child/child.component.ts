import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'slang-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
