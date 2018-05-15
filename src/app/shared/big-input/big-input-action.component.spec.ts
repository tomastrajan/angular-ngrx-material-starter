import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '@app/shared';

import { Component } from '@angular/core';

@Component({
  selector: 'host-for-test',
  template: `
    <anms-big-input-action
     color="warn"
     [icon]="icon"
     [label]="label"
    [disabled]="disabled"
    >
    </anms-big-input-action>
`
})
class HostComponent {
  disabled;
  icon;
  label;
}
describe('BigInputActionComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HostComponent],
        imports: [SharedModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initially not be disabled nad no show icon and label', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const button = hostElement.querySelector('button');
    const icon = hostElement.querySelector('mat-icon');
    const label = hostElement.querySelector('.mat-button-wrapper > span');
    expect(button.disabled).toBeFalsy();
    expect(icon).toBeNull();
    expect(label).toBeNull();
  });

  it('should disable button if disabled property is set', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');

    expect(button.disabled).toBeTruthy();
  });

  it('should display icon if icon property is set', () => {
    component.icon = 'delete';
    fixture.detectChanges();
    const icon = fixture.nativeElement.querySelector('mat-icon');

    expect(icon).toBeTruthy();
  });

  it('should display label with provided text when label property is set', () => {
    component.label = 'delete';
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector(
      '.mat-button-wrapper > span'
    );

    expect(label).toBeTruthy();
    expect(label.textContent).toBe('delete');
  });
});
