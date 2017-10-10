import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '@app/shared';

import { BigInputActionComponent } from './big-input-action.component';

describe('BigInputActionComponent', () => {
  let component: BigInputActionComponent;
  let fixture: ComponentFixture<BigInputActionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BigInputActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
