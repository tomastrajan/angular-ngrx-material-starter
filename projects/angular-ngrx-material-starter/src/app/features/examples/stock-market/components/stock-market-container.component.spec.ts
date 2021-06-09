import { By } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { EMPTY } from 'rxjs';

import { SharedModule } from '../../../../shared/shared.module';

import { StockMarketService } from '../stock-market.service';
import { actionStockMarketRetrieve } from '../stock-market.actions';
import { StockMarketContainerComponent } from './stock-market-container.component';
import { selectStockMarket } from '../stock-market.selectors';
import { StockMarketState } from '../stock-market.model';

describe('StockMarketContainerComponent', () => {
  let retrieveStockSpy: jasmine.Spy;

  let component: StockMarketContainerComponent;
  let fixture: ComponentFixture<StockMarketContainerComponent>;
  let store: MockStore;
  let mockSelectStockMarket: MemoizedSelector<any, StockMarketState>;

  const getSpinner = () => fixture.debugElement.query(By.css('mat-spinner'));

  const getError = () => fixture.debugElement.query(By.css('.error-state'));

  const getStocks = () =>
    fixture.debugElement.query(By.css('mat-card mat-card-title'));

  const getInput = () => fixture.debugElement.query(By.css('input'));

  const getExchange = () =>
    fixture.debugElement.query(By.css('mat-card mat-card-content'));

  const getChange = () =>
    fixture.debugElement.query(By.css('mat-card mat-card-subtitle'));

  const getCaretUpDownItem = () =>
    fixture.debugElement.query(By.css('mat-card fa-icon[icon="caret-down"]'));

  describe('given component booted', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          imports: [
            SharedModule,
            NoopAnimationsModule,
            TranslateModule.forRoot()
          ],
          providers: [StockMarketService, provideMockStore()],
          declarations: [StockMarketContainerComponent]
        }).compileComponents();

        const stockMarketService =
          TestBed.inject<StockMarketService>(StockMarketService);
        retrieveStockSpy = spyOn(
          stockMarketService,
          'retrieveStock'
        ).and.returnValue(EMPTY);

        store = TestBed.inject(MockStore);
        mockSelectStockMarket = store.overrideSelector(selectStockMarket, {
          symbol: 'AAPL',
          loading: false
        });
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
          actionStockMarketRetrieve({ symbol: 'A' })
        );
        expect(true).toBeTruthy();
      });
    });

    describe('and stocks are loading', () => {
      beforeEach(() => {
        mockSelectStockMarket.setResult({ symbol: 'TDD', loading: true });
        store.refreshState();
        fixture.detectChanges();
      });

      it('should show spinner', () => {
        expect(getSpinner()).toBeTruthy();
      });
    });

    describe('and stocks are not loading', () => {
      beforeEach(() => {
        mockSelectStockMarket.setResult({ symbol: 'TDD', loading: false });
        store.refreshState();
        fixture.detectChanges();
      });

      it('should not show spinner', () => {
        expect(getSpinner()).toBeFalsy();
      });
    });

    describe('and the error happened on stock retrieval', () => {
      beforeEach(() => {
        mockSelectStockMarket.setResult({
          symbol: 'TDD',
          loading: false,
          error: new HttpErrorResponse({})
        });
        store.refreshState();
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
        mockSelectStockMarket.setResult({
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
        });
        store.refreshState();
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
          `${change} (${changePercent}%)`
        );
      });
    });
  });
});
