import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { selectStockMarket } from '../stock-market.selectors';
import { ActionStockMarketRetrieve } from '../stock-market.actions';
import { State } from '../../examples.state';

@Component({
  selector: 'anms-stock-market',
  templateUrl: './stock-market-container.component.html',
  styleUrls: ['./stock-market-container.component.scss']
})
export class StockMarketContainerComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  initialized;
  stocks;

  constructor(public store: Store<State>) {}

  ngOnInit() {
    this.initialized = false;
    this.store
      .pipe(
        select(selectStockMarket),
        takeUntil(this.unsubscribe$)
      )
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
