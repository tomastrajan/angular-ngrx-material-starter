import { Action } from '@ngrx/store';

export const initialState = {
  theme: 'DEFAULT-THEME'
};

export const SETTINGS_KEY = 'SETTINGS';
export const SETTINGS_CHANGE_THEME = 'SETTINGS_CHANGE_THEME';

export const changeThemeAction = (theme: string) =>
  ({ type: SETTINGS_CHANGE_THEME, payload: theme });

export function settingsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SETTINGS_CHANGE_THEME:
      return { theme: action.payload };

    default:
      return state;
  }
}

