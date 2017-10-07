import { NgModule, Optional, SkipSelf, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LocalStorageService } from './local-storage/local-storage.service';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';

// export function getInitialState() {
//   if (isPlatformBrowser(this.platformId)) {
//     return LocalStorageService.loadInitialState();
//   }
// }

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot({
      auth: authReducer
    }, {
      // initialState: getInitialState
     }),
    EffectsModule.forRoot([AuthEffects]),
  ],
  declarations: [],
  providers: [LocalStorageService]
})
export class CoreModule {
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
