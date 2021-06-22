import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSpinnerOverlayComponent } from './mat-spinner-overlay.component';

describe('MatSpinnerOverlayComponent', () => {
  let component: MatSpinnerOverlayComponent;
  let fixture: ComponentFixture<MatSpinnerOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSpinnerOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSpinnerOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
