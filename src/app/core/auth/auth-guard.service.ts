import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { selectAuth } from './auth.selectors';

@Injectable()
export class AuthGuardService implements CanActivate {
  isAuthenticated = false;

  constructor(private store: Store<any>) {
    this.store
      .pipe(select(selectAuth))
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));
  }
  canActivate(): boolean {
    return this.isAuthenticated;
  }
}
