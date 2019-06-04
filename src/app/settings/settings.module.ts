import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';

import { State } from './settings.model';
import { SettingsEffects } from './settings.effects';
import { settingsReducer } from './settings.reducer';
import {
  selectSettingsState,
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectSettingsStickyHeader
} from './settings.selectors';
import {
  SettingsActions,
  SettingsActionTypes,
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled
} from './settings.actions';
import { SettingsContainerComponent } from './components/settings-container.component';

export {
  SettingsContainerComponent,
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled,
  SettingsActions,
  SettingsActionTypes,
  State,
  selectSettingsState,
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectSettingsStickyHeader
};

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('settings', settingsReducer),
    EffectsModule.forFeature([SettingsEffects])
  ],
  declarations: [SettingsContainerComponent]
})
export class SettingsModule {}
