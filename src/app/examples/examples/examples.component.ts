import { Component, OnInit } from '@angular/core';

import { routerTransition } from '@app/core';

@Component({
  selector: 'anms-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routerTransition]
})
export class ExamplesComponent implements OnInit {
  examples = [
    { link: 'todos', label: 'Todos' },
    { link: 'stock-market', label: 'Stock Market' },
    { link: 'theming', label: 'Theming' }
  ];

  constructor() {}

  ngOnInit() {}
}
