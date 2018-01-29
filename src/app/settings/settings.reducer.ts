import { Action } from '@ngrx/store';

export const SETTINGS_KEY = 'SETTINGS';

export enum SettingsActionTypes {
  CHANGE_THEME = '[Settings] Change Theme',
  CHANGE_AUTO_NIGHT_AUTO_MODE = '[Settings] Change Auto Night Mode',
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

export class ActionSettingsPersist implements Action {
  readonly type = SettingsActionTypes.PERSIST;
  constructor(public payload: { settings: SettingsState }) {}
}

export type SettingsActions =
  | ActionSettingsPersist
  | ActionSettingsChangeTheme
  | ActionSettingsChangeAutoNightMode;

export const NIGHT_MODE_THEME = 'BLACK-THEME';

export const initialState: SettingsState = {
  theme: 'DEFAULT-THEME',
  autoNightMode: false
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

    default:
      return state;
  }
}

export interface SettingsState {
  theme: string;
  autoNightMode: boolean;
}
