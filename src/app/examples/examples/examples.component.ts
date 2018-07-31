import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { routeAnimations } from '@app/core';
import { selectorSettings, SettingsState } from '@app/settings';

@Component({
  selector: 'anms-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations]
})
export class ExamplesComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  examples = [
    { link: 'todos', label: 'anms.examples.menu.todos' },
    { link: 'stock-market', label: 'anms.examples.menu.stocks' },
    { link: 'theming', label: 'anms.examples.menu.theming' },
    { link: 'authenticated', label: 'anms.examples.menu.auth' }
  ];

  constructor(private store: Store<any>, private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.store
      .select(selectorSettings)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((settings: SettingsState) =>
        this.translate.use(settings.language)
      );
  }
}
