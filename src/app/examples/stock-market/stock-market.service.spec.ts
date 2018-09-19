import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { StockMarketService } from './stock-market.service';

describe('StockMarketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [StockMarketService]
    });
  });

  it(
    'should be created',
    inject([StockMarketService], (service: StockMarketService) => {
      expect(service).toBeTruthy();
    })
  );
});
