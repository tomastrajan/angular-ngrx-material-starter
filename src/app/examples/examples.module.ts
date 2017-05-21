import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule, createReducer } from '../core';
import { SharedModule } from '../shared';

import { ExamplesRoutingModule } from './examples-routing.module';
import { TodosComponent } from './todos/todos.component';
import { ExamplesComponent } from './examples/examples.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { StockMarketService } from './stock-market/stock-market.service';

import { todosReducer } from './todos/todos.reducer';
import { TodosEffects } from './todos/todos.effects';

export const appReducerWithExamples = createReducer({
  todos: todosReducer
});

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    ExamplesRoutingModule,
    EffectsModule.run(TodosEffects)
  ],
  declarations: [TodosComponent, ExamplesComponent, StockMarketComponent],
  providers: [StockMarketService]
})
export class ExamplesModule {

  constructor(private store: Store<any> ) {
    store.replaceReducer(appReducerWithExamples);
  }

}
