import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  examples = [
    { link: 'todos', label: 'Todos' },
    { link: 'stock-market', label: 'Stock Market' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
