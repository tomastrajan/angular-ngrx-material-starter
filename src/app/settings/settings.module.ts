import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';

import { SettingsComponent } from './settings/settings.component';
import { SettingsEffects } from './settings.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.run(SettingsEffects)
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
