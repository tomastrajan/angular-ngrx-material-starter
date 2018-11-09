import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { tap, map, distinctUntilChanged } from 'rxjs/operators';

import { TitleService } from '@app/core';

import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { State, selectSettingsState } from '@app/settings';
import { Store, select } from '@ngrx/store';

@Injectable()
export class SettingsEffects {
  constructor(
    private store: Store<State>,
    private translate: TranslateService,
    private router: Router,
    private titleService: TitleService
  ) {}

  @Effect({ dispatch: false })
  changeLanguage = this.store.pipe(
    select(selectSettingsState),
    map(settings => settings.language),
    distinctUntilChanged(),
    tap(language => this.translate.use(language)),
    tap(() =>
      this.titleService.setTitle(
        this.router.routerState.snapshot.root,
        this.translate
      )
    )
  );
}
