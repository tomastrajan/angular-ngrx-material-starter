import { Action } from '@ngrx/store';

export const SETTINGS_KEY = 'SETTINGS';

export enum SettingsActionTypes {
  CHANGE_THEME = '[Settings] Change Theme'
}

export class ActionSettingsChangeTheme implements Action {
  readonly type = SettingsActionTypes.CHANGE_THEME;
  constructor(public payload: { theme: string }) {}
}

export type SettingsActions = ActionSettingsChangeTheme;

export const initialState = {
  theme: 'DEFAULT-THEME'
};

export const selectorSettings = state => state.settings || { theme: '' };

export function settingsReducer(state = initialState, action: SettingsActions) {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_THEME:
      return { theme: action.payload.theme };

    default:
      return state;
  }
}
