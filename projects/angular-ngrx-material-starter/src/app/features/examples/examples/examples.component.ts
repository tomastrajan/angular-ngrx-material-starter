import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'slang-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'slang.examples.menu.todos' },
    { link: 'stock-market', label: 'slang.examples.menu.stocks' },
    { link: 'theming', label: 'slang.examples.menu.theming' },
    { link: 'crud', label: 'slang.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'slang.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'slang.examples.menu.form' },
    { link: 'notifications', label: 'slang.examples.menu.notifications' },
    { link: 'elements', label: 'slang.examples.menu.elements' },
    { link: 'authenticated', label: 'slang.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
