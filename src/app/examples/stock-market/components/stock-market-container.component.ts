import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { selectStockMarket } from '../stock-market.selectors';
import { ActionStockMarketRetrieve } from '../stock-market.actions';
import { StockMarketState } from '../stock-market.model';
import { State } from '../../examples.state';

@Component({
  selector: 'anms-stock-market',
  templateUrl: './stock-market-container.component.html',
  styleUrls: ['./stock-market-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockMarketContainerComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  initialized: boolean;
  stocks: StockMarketState;

  constructor(public store: Store<State>, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.initialized = false;
    this.store
      .pipe(select(selectStockMarket), takeUntil(this.unsubscribe$))
      .subscribe(stocks => {
        this.stocks = stocks;

        if (!this.initialized) {
          this.initialized = true;
          this.store.dispatch(
            new ActionStockMarketRetrieve({ symbol: stocks.symbol })
          );
        }

        this.cd.markForCheck();
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
