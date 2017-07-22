import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LocalStorageService } from './local-storage/local-storage.service';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';

export function getInitialState() {
  return LocalStorageService.loadInitialState();
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpModule,

    // ngrx
    StoreModule.forRoot({
      auth: authReducer
    }, { initialState: getInitialState }),
    EffectsModule.forRoot([AuthEffects]),
  ],
  declarations: [],
  providers: [LocalStorageService]
})
export class CoreModule { }
