import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule, createReducer } from '../core';
import { SharedModule } from '../shared';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { TodosComponent } from './todos/todos.component';
import { todosReducer } from './todos/todos.reducer';
import { TodosEffects } from './todos/todos.effects';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { stockMarketReducer } from './stock-market/stock-market.reducer';
import { StockMarketEffects } from './stock-market/stock-market.effects';
import { StockMarketService } from './stock-market/stock-market.service';

export const appReducerWithExamples = createReducer({
  todos: todosReducer,
  stocks: stockMarketReducer
});

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    ExamplesRoutingModule,
    EffectsModule.run(TodosEffects),
    EffectsModule.run(StockMarketEffects)
  ],
  declarations: [
    ExamplesComponent,
    TodosComponent,
    StockMarketComponent
  ],
  providers: [
    StockMarketService
  ]
})
export class ExamplesModule {

  constructor(private store: Store<any> ) {
    store.replaceReducer(appReducerWithExamples);
  }

}
