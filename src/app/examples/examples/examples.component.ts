import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { routeAnimations, TitleService, selectAuth } from '@app/core';
import {
  State as BaseSettingsState,
  selectSettingsLanguage
} from '@app/settings';

import { State as BaseExamplesState } from '../examples.state';

interface State extends BaseSettingsState, BaseExamplesState {}

@Component({
  selector: 'anms-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  language$: Observable<string>;
  activatedRouteSnapshot$: Observable<ActivatedRouteSnapshot>;

  examples = [
    { link: 'todos', label: 'anms.examples.menu.todos' },
    { link: 'stock-market', label: 'anms.examples.menu.stocks' },
    { link: 'theming', label: 'anms.examples.menu.theming' },
    { link: 'crud', label: 'anms.examples.menu.crud' },
    { link: 'form', label: 'anms.examples.menu.form' },
    { link: 'notifications', label: 'anms.examples.menu.notifications' },
    { link: 'authenticated', label: 'anms.examples.menu.auth', auth: true }
  ];

  constructor(
    private store: Store<State>,
    private router: Router,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.router.routerState.snapshot.root);

    this.isAuthenticated$ = this.store.pipe(
      select(selectAuth),
      map(auth => auth.isAuthenticated)
    );
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.activatedRouteSnapshot$ = this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      map((event: ActivationEnd) => event.snapshot)
    );
  }
}
