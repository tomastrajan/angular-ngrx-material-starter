import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { ExamplesModule } from '../examples.module';

import { StockMarketComponent } from './stock-market.component';

describe('StockMarketComponent', () => {
  let component: StockMarketComponent;
  let fixture: ComponentFixture<StockMarketComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          CoreModule,
          SharedModule,
          ExamplesModule
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
