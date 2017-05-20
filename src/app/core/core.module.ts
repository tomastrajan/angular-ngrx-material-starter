import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { settingsReducer, SettingsEffects } from '../settings';

import { LocalStorageService } from './local-storage/local-storage.service';
import {
  localStorageInitStateMiddleware
} from './local-storage/local-storage.middleware';

const rootReducer = localStorageInitStateMiddleware(
  combineReducers({
    settings: settingsReducer
  })
);

export function reducer(state, action) { return rootReducer(state, action); }

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore((reducer)),
    EffectsModule.run(SettingsEffects)
  ],
  declarations: [],
  providers: [LocalStorageService]
})
export class CoreModule { }
