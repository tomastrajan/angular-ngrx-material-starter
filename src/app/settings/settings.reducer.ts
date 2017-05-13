import { Action } from '@ngrx/store';

export const SETTINGS_THEME = 'SETTINGS_THEME';

export const initialState = {
  theme: 'DEFAULT-THEME'
};

export function settingsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SETTINGS_THEME:
      return { theme: action.payload };

    default:
      return state;
  }
}

