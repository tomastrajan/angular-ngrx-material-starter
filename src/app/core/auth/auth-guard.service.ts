import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { selectAuth } from './auth.selectors';
import { AppState } from '../core.state';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(selectAuth),
      map(auth => auth.isAuthenticated)
    );
  }
}
