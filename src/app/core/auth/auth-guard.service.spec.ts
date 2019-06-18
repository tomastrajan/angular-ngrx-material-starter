import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { AppState } from '../core.state';

import { AuthGuardService } from './auth-guard.service';
import { AuthState } from './auth.models';

describe('AuthGuardService', () => {
  let authGuardService: AuthGuardService;
  let store: MockStore<AppState>;

  const authState: AuthState = {
    isAuthenticated: true
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        provideMockStore({
          initialState: {
            auth: authState
          }
        })
      ]
    });
    authGuardService = TestBed.get(AuthGuardService);
    store = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(authGuardService).toBeTruthy();
  });

  it('should return isAuthenticated from authState', () => {
    authGuardService.canActivate().subscribe(canActivate => {
      expect(canActivate).toBe(true);
    });
  });
});

function createState(authState: AuthState) {
  return {
    auth: authState
  } as AppState;
}
