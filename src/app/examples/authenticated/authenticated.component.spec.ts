import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedComponent } from './authenticated.component';

describe('AuthenticatedComponent', () => {
  let component: AuthenticatedComponent;
  let fixture: ComponentFixture<AuthenticatedComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AuthenticatedComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
