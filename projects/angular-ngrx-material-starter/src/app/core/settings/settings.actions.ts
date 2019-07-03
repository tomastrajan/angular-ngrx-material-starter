import { createAction, props } from '@ngrx/store';

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

export const actionSettingsChangeLanguage = createAction(
  SettingsActionTypes.CHANGE_LANGUAGE,
  props<{ language: Language }>()
);

export const actionSettingsChangeTheme = createAction(
  SettingsActionTypes.CHANGE_THEME,
  props<{ theme: string }>()
);
export const actionSettingsChangeAutoNightMode = createAction(
  SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE,
  props<{ autoNightMode: boolean }>()
);

export const actionSettingsChangeStickyHeader = createAction(
  SettingsActionTypes.CHANGE_STICKY_HEADER,
  props<{ stickyHeader: boolean }>()
);

export const actionSettingsChangeAnimationsPage = createAction(
  SettingsActionTypes.CHANGE_ANIMATIONS_PAGE,
  props<{ pageAnimations: boolean }>()
);

export const actionSettingsChangeAnimationsPageDisabled = createAction(
  SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED,
  props<{ pageAnimationsDisabled: boolean }>()
);

export const actionSettingsChangeAnimationsElements = createAction(
  SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS,
  props<{ elementsAnimations: boolean }>()
);
export const actionSettingsChangeHour = createAction(
  SettingsActionTypes.CHANGE_HOUR,
  props<{ hour: number }>()
);
