import { createFeatureSelector } from '@ngrx/store';

import { SettingsState, State } from './settings.model';

export const selectSettings = createFeatureSelector<State, SettingsState>(
  'settings'
);
