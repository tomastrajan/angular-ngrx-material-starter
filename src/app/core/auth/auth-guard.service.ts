import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectorAuth } from './auth.reducer';

@Injectable()
export class AuthGuardService implements CanActivate {
  isAuthenticated = false;

  constructor(private store: Store<any>) {
    this.store
      .select(selectorAuth)
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));
  }
  canActivate(): boolean {
    return this.isAuthenticated;
  }
}
