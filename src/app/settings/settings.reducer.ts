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

export const initialState: SettingsState = {
  theme: 'DEFAULT-THEME'
};

export const selectorSettings = state => state.settings || { theme: '' };

export function settingsReducer(
  state: SettingsState = initialState,
  action: SettingsActions
): SettingsState {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_THEME:
      return { ...state, theme: action.payload.theme };

    default:
      return state;
  }
}

export interface SettingsState {
  theme: string;
}
