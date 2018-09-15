import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { selectStockMarket } from '../stock-market.selectors';
import { ActionStockMarketRetrieve } from '../stock-market.actions';
import { STOCK_MARKET_KEY } from '../stock-market.effects';
import { State } from '../../examples.state';

import { LocalStorageService } from '@app/core';

@Component({
  selector: 'anms-stock-market',
  templateUrl: './stock-market-container.component.html',
  styleUrls: ['./stock-market-container.component.scss']
})
export class StockMarketContainerComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  initialized;
  stocks;

  constructor(
    public store: Store<State>, 
    public localStorageService: LocalStorageService) {

      this.stocks  = localStorageService.getItem(STOCK_MARKET_KEY);
  }

  ngOnInit() { 
    this.initialized = false;
    this.store
      .pipe(select(selectStockMarket), takeUntil(this.unsubscribe$))
      .subscribe((stocks: any) => {
        
        if (stocks == undefined)
          stocks = this.stocks;
        else
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
