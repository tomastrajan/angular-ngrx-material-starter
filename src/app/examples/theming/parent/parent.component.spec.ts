import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ParentComponent, ChildComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
