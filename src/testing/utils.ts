import { NgModule, Injectable } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import {
  Store,
  StateObservable,
  ActionsSubject,
  ReducerManager,
  StoreModule
} from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

@Injectable()
export class MockStore<T> extends Store<T> {
  private stateSubject = new BehaviorSubject<T>({} as T);

  constructor(
    state$: StateObservable,
    actionsObserver: ActionsSubject,
    reducerManager: ReducerManager
  ) {
    super(state$, actionsObserver, reducerManager);
    this.source = this.stateSubject.asObservable();
  }

  setState(nextState: T) {
    this.stateSubject.next(nextState);
  }
}

export function provideMockStore() {
  return {
    provide: Store,
    useClass: MockStore
  };
}

@NgModule({
  imports: [
    NoopAnimationsModule,
    RouterTestingModule,
    SharedModule,
    TranslateModule.forRoot(),
    StoreModule.forRoot({})
  ],
  exports: [
    NoopAnimationsModule,
    RouterTestingModule,
    SharedModule,
    TranslateModule
  ],
  providers: [provideMockStore()]
})
export class TestingModule {
  constructor() {}
}
