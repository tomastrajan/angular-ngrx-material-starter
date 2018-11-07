import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

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
  private initialized: boolean;

  stocks$: Observable<StockMarketState> = this.store.pipe(
    select(selectStockMarket)
  );
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(public store: Store<State>) {}

  ngOnInit() {
    this.initialized = false;
    this.stocks$.pipe(takeUntil(this.unsubscribe$)).subscribe(stocks => {
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
