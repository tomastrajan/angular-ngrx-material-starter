import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { SharedModule } from '../../../../shared/shared.module';

import { CrudComponent } from './crud.component';
import { selectAllBooks, selectSelectedBook } from '../books.selectors';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;
  let store: MockStore;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          SharedModule,
          NoopAnimationsModule,
          RouterTestingModule,
          TranslateModule.forRoot()
        ],
        providers: [provideMockStore()],
        declarations: [CrudComponent]
      }).compileComponents();
      store = TestBed.inject(MockStore);
      store.overrideSelector(selectAllBooks, []);
      store.overrideSelector(selectSelectedBook, null);
      fixture = TestBed.createComponent(CrudComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
