import { TestBed } from '@angular/core/testing';
import { AppState } from '@app/core';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@testing/utils';
import { AuthGuardService } from './auth-guard.service';
import { AuthState } from './auth.models';

describe('AuthGuardService', () => {
  let authGuardService: AuthGuardService;
  let store: MockStore<AppState>;
  let state: AppState;

  const authState: AuthState = {
    isAuthenticated: true
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [AuthGuardService, provideMockStore()]
    });
    authGuardService = TestBed.get(AuthGuardService);
    store = TestBed.get(Store);
    state = createState(authState);
    store.setState(state);
  });

  it('should be created', () => {
    expect(authGuardService).toBeTruthy();
  });

  it('should return isAuthenticated from authState', () => {
    authGuardService.canActivate().subscribe(canActivate => {
      expect(canActivate).toBe(state.auth.isAuthenticated);
    });
  });
});

function createState(authState: AuthState) {
  return {
    auth: authState
  } as AppState;
}
