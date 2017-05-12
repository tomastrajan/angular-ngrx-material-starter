import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { settingsReducer } from '../settings';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore({ settings: settingsReducer })
  ],
  declarations: []
})
export class CoreModule { }
