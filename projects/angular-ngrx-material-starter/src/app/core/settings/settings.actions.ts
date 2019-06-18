import { Action } from '@ngrx/store';

import { Language } from './settings.model';

export enum SettingsActionTypes {
  CHANGE_LANGUAGE = '[Settings] Change Language',
  CHANGE_THEME = '[Settings] Change Theme',
  CHANGE_AUTO_NIGHT_AUTO_MODE = '[Settings] Change Auto Night Mode',
  CHANGE_STICKY_HEADER = '[Settings] Change Sticky Header',
  CHANGE_ANIMATIONS_PAGE = '[Settings] Change Animations Page',
  CHANGE_ANIMATIONS_PAGE_DISABLED = '[Settings] Change Animations Page Disabled',
  CHANGE_ANIMATIONS_ELEMENTS = '[Settings] Change Animations Elements',
  CHANGE_HOUR = '[Settings] Change Hours'
}

export class ActionSettingsChangeLanguage implements Action {
  readonly type = SettingsActionTypes.CHANGE_LANGUAGE;

  constructor(readonly payload: { language: Language }) {}
}

export class ActionSettingsChangeTheme implements Action {
  readonly type = SettingsActionTypes.CHANGE_THEME;

  constructor(readonly payload: { theme: string }) {}
}

export class ActionSettingsChangeAutoNightMode implements Action {
  readonly type = SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE;

  constructor(readonly payload: { autoNightMode: boolean }) {}
}

export class ActionSettingsChangeStickyHeader implements Action {
  readonly type = SettingsActionTypes.CHANGE_STICKY_HEADER;

  constructor(readonly payload: { stickyHeader: boolean }) {}
}

export class ActionSettingsChangeAnimationsPage implements Action {
  readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE;

  constructor(readonly payload: { pageAnimations: boolean }) {}
}

export class ActionSettingsChangeAnimationsPageDisabled implements Action {
  readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED;

  constructor(readonly payload: { pageAnimationsDisabled: boolean }) {}
}

export class ActionSettingsChangeAnimationsElements implements Action {
  readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS;

  constructor(readonly payload: { elementsAnimations: boolean }) {}
}

export class ActionSettingsChangeHour implements Action {
  readonly type = SettingsActionTypes.CHANGE_HOUR;

  constructor(readonly payload: { hour: number }) {}
}

export type SettingsActions =
  | ActionSettingsChangeLanguage
  | ActionSettingsChangeTheme
  | ActionSettingsChangeAnimationsPage
  | ActionSettingsChangeAnimationsPageDisabled
  | ActionSettingsChangeAnimationsElements
  | ActionSettingsChangeAutoNightMode
  | ActionSettingsChangeStickyHeader
  | ActionSettingsChangeHour;
