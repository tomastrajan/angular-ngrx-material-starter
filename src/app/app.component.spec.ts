import { TestBed, async } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { LocalStorageService } from '@app/core';
import { TestingModule } from '@testing/utils';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [AppComponent],
      providers: [LocalStorageService, provideMockStore()]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
