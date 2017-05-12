import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';

import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
