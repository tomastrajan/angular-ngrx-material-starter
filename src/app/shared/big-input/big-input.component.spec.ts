import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '@app/shared';

import { BigInputComponent } from './big-input.component';

describe('BigInputComponent', () => {
  let component: BigInputComponent;
  let fixture: ComponentFixture<BigInputComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BigInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
