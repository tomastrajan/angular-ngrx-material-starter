import {
  ActivationEnd,
  Router,
  NavigationEnd,
  ActivatedRouteSnapshot
} from '@angular/router';
import browser from 'browser-detect';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import {
  ActionAuthLogin,
  ActionAuthLogout,
  AnimationsService,
  TitleService,
  routeAnimations,
  AppState,
  LocalStorageService,
  selectIsAuthenticated
} from '@app/core';
import { environment as env } from '@env/environment';

import {
  selectSettings,
  SettingsState,
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled,
  selectEffectiveTheme
} from './settings';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/logo.png');
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br'];
  navigation = [
    { link: 'about', label: 'anms.menu.about' },
    { link: 'features', label: 'anms.menu.features' },
    { link: 'examples', label: 'anms.menu.examples' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ];

  isAuthenticated$: Observable<boolean>;
  settings$: Observable<SettingsState>;
  navigationEnd$: Observable<NavigationEnd>;
  activatedRouteSnapshot$: Observable<ActivatedRouteSnapshot>;
  theme$: Observable<string>;

  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<AppState>,
    private router: Router,
    private titleService: TitleService,
    private animationService: AnimationsService,
    private storageService: LocalStorageService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        new ActionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.settings$ = this.store.pipe(select(selectSettings));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
    this.activatedRouteSnapshot$ = this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      map((event: ActivationEnd) => event.snapshot)
    );
  }

  onSettings(settings: SettingsState) {
    this.animationService.updateRouteAnimationType(
      settings.pageAnimations,
      settings.elementsAnimations
    );
  }

  onActivatedRouteSnapshot(snapshot: ActivatedRouteSnapshot) {
    this.titleService.setTitle(snapshot);
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());
  }

  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(new ActionSettingsChangeLanguage({ language }));
  }
}
