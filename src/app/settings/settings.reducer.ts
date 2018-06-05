import { Action } from '@ngrx/store';

export const SETTINGS_KEY = 'SETTINGS';

export enum SettingsActionTypes {
  CHANGE_THEME = '[Settings] Change Theme',
  CHANGE_AUTO_NIGHT_AUTO_MODE = '[Settings] Change Auto Night Mode',
  CHANGE_ANIMATIONS_PAGE = '[Settings] Change Animations Page',
  CHANGE_ANIMATIONS_PAGE_DISABLED = '[Settings] Change Animations Page Disabled',
  CHANGE_ANIMATIONS_ELEMENTS = '[Settings] Change Animations Elements',
  PERSIST = '[Settings] Persist'
}

export class ActionSettingsChangeTheme implements Action {
  readonly type = SettingsActionTypes.CHANGE_THEME;
  constructor(public payload: { theme: string }) {}
}

export class ActionSettingsChangeAutoNightMode implements Action {
  readonly type = SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE;
  constructor(public payload: { autoNightMode: boolean }) {}
}

export class ActionSettingsChangeAnimationsPage implements Action {
  readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE;
  constructor(public payload: { pageAnimations: boolean }) {}
}

export class ActionSettingsChangeAnimationsPageDisabled implements Action {
  readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED;
  constructor(public payload: { pageAnimationsDisabled: boolean }) {}
}

export class ActionSettingsChangeAnimationsElements implements Action {
  readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS;
  constructor(public payload: { elementsAnimations: boolean }) {}
}

export class ActionSettingsPersist implements Action {
  readonly type = SettingsActionTypes.PERSIST;
  constructor(public payload: { settings: SettingsState }) {}
}

export type SettingsActions =
  | ActionSettingsPersist
  | ActionSettingsChangeTheme
  | ActionSettingsChangeAnimationsPage
  | ActionSettingsChangeAnimationsPageDisabled
  | ActionSettingsChangeAnimationsElements
  | ActionSettingsChangeAutoNightMode;

export const NIGHT_MODE_THEME = 'BLACK-THEME';

export const initialState: SettingsState = {
  theme: 'DEFAULT-THEME',
  autoNightMode: false,
  pageAnimations: true,
  pageAnimationsDisabled: false,
  elementsAnimations: true
};

export const selectorSettings = state =>
  <SettingsState>(state.settings || { theme: '' });

export function settingsReducer(
  state: SettingsState = initialState,
  action: SettingsActions
): SettingsState {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_THEME:
      return { ...state, theme: action.payload.theme };

    case SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE:
      return { ...state, autoNightMode: action.payload.autoNightMode };

    case SettingsActionTypes.CHANGE_ANIMATIONS_PAGE:
      return { ...state, pageAnimations: action.payload.pageAnimations };

    case SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS:
      return {
        ...state,
        elementsAnimations: action.payload.elementsAnimations
      };

    case SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED:
      return {
        ...state,
        pageAnimations: false,
        pageAnimationsDisabled: action.payload.pageAnimationsDisabled
      };

    default:
      return state;
  }
}

export interface SettingsState {
  theme: string;
  autoNightMode: boolean;
  pageAnimations: boolean;
  pageAnimationsDisabled: boolean;
  elementsAnimations: boolean;
}
