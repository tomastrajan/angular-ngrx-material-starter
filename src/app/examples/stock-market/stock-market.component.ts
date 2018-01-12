import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

import {
  ActionStockMarketRetrieve,
  selectorStocks
} from './stock-market.reducer';

@Component({
  selector: 'anms-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrls: ['./stock-market.component.scss']
})
export class StockMarketComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  initialized;
  stocks;

  constructor(public store: Store<any>) {}

  ngOnInit() {
    this.initialized = false;
    this.store
      .select(selectorStocks)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((stocks: any) => {
        this.stocks = stocks;

        if (!this.initialized) {
          this.initialized = true;
          this.store.dispatch(
            new ActionStockMarketRetrieve({ symbol: stocks.symbol })
          );
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSymbolChange(symbol: string) {
    this.store.dispatch(new ActionStockMarketRetrieve({ symbol }));
  }
}
