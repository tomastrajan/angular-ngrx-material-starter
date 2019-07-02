import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../../environments/environment';

import {
  AppState,
  reducers,
  metaReducers,
  selectRouterState
} from './core.state';
import { AuthEffects } from './auth/auth.effects';
import { selectIsAuthenticated, selectAuth } from './auth/auth.selectors';
import { authLogin, authLogout } from './auth/auth.actions';
import { AuthGuardService } from './auth/auth-guard.service';
import { TitleService } from './title/title.service';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  routeAnimations
} from './animations/route.animations';
import { AnimationsService } from './animations/animations.service';
import { AppErrorHandler } from './error-handler/app-error-handler.service';
import { CustomSerializer } from './router/custom-serializer';
import { LocalStorageService } from './local-storage/local-storage.service';
import { HttpErrorInterceptor } from './http-interceptors/http-error.interceptor';
import { GoogleAnalyticsEffects } from './google-analytics/google-analytics.effects';
import { NotificationService } from './notifications/notification.service';
import { SettingsEffects } from './settings/settings.effects';
import {
  selectSettingsLanguage,
  selectEffectiveTheme,
  selectSettingsStickyHeader
} from './settings/settings.selectors';
import {
  SettingsActions,
  SettingsActionTypes,
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled
} from './settings/settings.actions';

export {
  TitleService,
  selectAuth,
  authLogin,
  authLogout,
  routeAnimations,
  AppState,
  LocalStorageService,
  selectIsAuthenticated,
  ROUTE_ANIMATIONS_ELEMENTS,
  AnimationsService,
  AuthGuardService,
  selectRouterState,
  NotificationService,
  SettingsActions,
  SettingsActionTypes,
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled,
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectSettingsStickyHeader
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      AuthEffects,
      SettingsEffects,
      GoogleAnalyticsEffects
    ]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: 'Angular NgRx Material Starter'
        }),

    // 3rd party
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  exports: [TranslateModule]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
