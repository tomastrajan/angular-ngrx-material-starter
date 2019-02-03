import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { TestingModule } from '@testing/utils';
import { ExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: ExamplesComponent;
  let fixture: ComponentFixture<ExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [ExamplesComponent],
      providers: [provideMockStore()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
