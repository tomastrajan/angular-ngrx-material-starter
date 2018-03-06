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
    { link: 'stock-market', label: 'Stocks' },
    { link: 'theming', label: 'Theming' },
    { link: 'notifications', label: 'Notifications' },
    { link: 'authenticated', label: 'Auth' }
  ];

  constructor() {}

  ngOnInit() {}
}
