import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { selectAuth } from './auth.selectors';
import { AppState } from '../core.state';

@Injectable()
export class AuthGuardService implements CanActivate {
  isAuthenticated = false;

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(selectAuth))
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));
  }
  canActivate(): boolean {
    return this.isAuthenticated;
  }
}
