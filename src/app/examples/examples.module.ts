import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';

import { CoreModule, createReducer } from '../core';
import { SharedModule } from '../shared';

import { ExamplesRoutingModule } from './examples-routing.module';
import { TodosComponent } from './todos/todos.component';
import { ExamplesComponent } from './examples/examples.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { StockMarketService } from './stock-market/stock-market.service';

import { todosReducer } from './todos/todos.reducer';

export const appReducerWithExamples = createReducer({
  todos: todosReducer
});

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    ExamplesRoutingModule
  ],
  declarations: [TodosComponent, ExamplesComponent, StockMarketComponent],
  providers: [StockMarketService]
})
export class ExamplesModule {

  constructor(private store: Store<any> ) {
    store.replaceReducer(appReducerWithExamples);
  }

}
