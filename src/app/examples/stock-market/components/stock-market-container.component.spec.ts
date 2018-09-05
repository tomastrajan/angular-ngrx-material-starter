import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { EMPTY } from 'rxjs';

import { TestingModule, MockStore } from '@testing/utils';
import { CoreModule } from '@app/core';

import { ExamplesModule } from '../../examples.module';
import { ActionStockMarketRetrieve } from '../stock-market.actions';
import { StockMarketState } from '../stock-market.model';
import { StockMarketContainerComponent } from './stock-market-container.component';
import { State } from '../../examples.state';
import { StockMarketService } from '../../stock-market/stock-market.service';

describe('StockMarketContainerComponent', () => {
  let retrieveStockSpy: jasmine.Spy;

  let component: StockMarketContainerComponent;
  let fixture: ComponentFixture<StockMarketContainerComponent>;
  let store: MockStore<State>;

  const getSpinner = () => fixture.debugElement.query(By.css('mat-spinner'));

  const getError = () => fixture.debugElement.query(By.css('.error'));

  const getStocks = () =>
    fixture.debugElement.query(By.css('mat-card mat-card-title'));

  const getInput = () => fixture.debugElement.query(By.css('input'));

  const getExchange = () =>
    fixture.debugElement.query(By.css('mat-card mat-card-content'));

  const getChange = () =>
    fixture.debugElement.query(By.css('mat-card mat-card-subtitle'));

  const getCaretUpDownItem = () =>
    fixture.debugElement.query(
      By.css('mat-card mat-icon[fontIcon="fa-caret-down"]')
    );

  describe('given component booted', () => {
    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          imports: [TestingModule, CoreModule, ExamplesModule],
          providers: [{ provide: Store, useClass: MockStore }]
        }).compileComponents();

        const stockMarketService = TestBed.get(StockMarketService);
        retrieveStockSpy = spyOn(
          stockMarketService,
          'retrieveStock'
        ).and.returnValue(EMPTY);

        store = TestBed.get(Store);
        store.setState(createState({ symbol: '', loading: true }));
        fixture = TestBed.createComponent(StockMarketContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
    );

    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    describe('and input changed', () => {
      let dispatchSpy: jasmine.Spy;

      beforeEach(() => {
        dispatchSpy = spyOn(store, 'dispatch');
        getInput().triggerEventHandler('keyup', { target: { value: 'A' } });
        fixture.detectChanges();
      });

      it('should trigger dispatch with correct input', () => {
        expect(dispatchSpy).toHaveBeenCalledTimes(1);
        expect(dispatchSpy).toHaveBeenCalledWith(
          new ActionStockMarketRetrieve({ symbol: 'A' })
        );
        expect(true).toBeTruthy();
      });
    });

    describe('and stocks are loading', () => {
      beforeEach(() => {
        store.setState(createState({ symbol: 'TDD', loading: true }));
        fixture.detectChanges();
      });

      it('should show spinner', () => {
        expect(getSpinner()).toBeTruthy();
      });
    });

    describe('and stocks are not loading', () => {
      beforeEach(() => {
        store.setState(createState({ symbol: 'TDD', loading: false }));
        fixture.detectChanges();
      });

      it('should not show spinner', () => {
        expect(getSpinner()).toBeFalsy();
      });
    });

    describe('and the error happened on stock retrieval', () => {
      beforeEach(() => {
        store.setState(
          createState({
            symbol: 'TDD',
            loading: false,
            error: new HttpErrorResponse({})
          })
        );
        fixture.detectChanges();
      });

      it('should show error', () => {
        expect(getError()).toBeTruthy();
      });
    });

    describe('and stock details are loaded', () => {
      const symbol = 'TDD';
      const exchange = 'TESTAQ';
      const last = '123';
      const ccy = 'USD';
      const change = '100';
      const changePercent = '11';

      beforeEach(() => {
        store.setState(
          createState({
            symbol,
            loading: false,
            stock: {
              symbol,
              exchange,
              last,
              ccy,
              change,
              changePercent,
              changeNegative: true,
              changePositive: false
            }
          })
        );

        fixture.detectChanges();
      });

      it('should display the relevant caret item', () => {
        expect(getCaretUpDownItem()).toBeTruthy();
      });

      it('should display correct stock name, price, currency', () => {
        expect(getStocks().nativeElement.textContent.trim()).toEqual(
          `${symbol} ${last} ${ccy}`
        );
      });

      it('should display correct exchange', () => {
        expect(getExchange().nativeElement.textContent.trim()).toEqual(
          exchange
        );
      });

      it('should display correct change', () => {
        expect(getChange().nativeElement.textContent.trim()).toEqual(
          `${change} (${changePercent})`
        );
      });
    });
  });
});

function createState(stockState: StockMarketState) {
  return {
    examples: {
      stockMarket: stockState
    }
  } as State;
}
