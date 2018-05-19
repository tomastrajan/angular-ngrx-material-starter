import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '@app/shared';

import { Component } from '@angular/core';

@Component({
  selector: 'host-for-test',
  template: ``
})

class HostComponent {
  disabled;
  icon;
  label;
  actionHandler;
}

describe('BigInputActionComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  const getButton = () => fixture.debugElement.query(By.css('button'));
  const getButtonElement = () => getButton().nativeElement;
  const getIconElement = () => fixture.debugElement.query(By.css('mat-icon')) ?
  fixture.debugElement.query(By.css('mat-icon')).nativeElement: null;
  const getLabelElement = () => fixture.debugElement.query(By.css('.mat-button-wrapper > span')) ?
  fixture.debugElement.query(By.css('.mat-button-wrapper > span')).nativeElement: null;

  function createHostComponent( template: string ): ComponentFixture<HostComponent> {
    TestBed.overrideComponent(HostComponent, { set: { template: template } });
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    return fixture as ComponentFixture<HostComponent>;
  }

  beforeEach(() =>
      TestBed.configureTestingModule({
        declarations: [HostComponent],
        imports: [SharedModule]
      })
  );

  it('should be created', () => {
    const template = `<anms-big-input-action></anms-big-input-action>`;
    fixture = createHostComponent(template);
    expect(component).toBeTruthy();
  });

  it('should initially not be disabled nad no show icon and label', () => {
    const template = `<anms-big-input-action ></anms-big-input-action>`;
    fixture = createHostComponent(template);
    const button = getButtonElement();
    const label = getLabelElement();
    expect(button.disabled).toBeFalsy();
    expect(getIconElement()).toBeNull();
    expect(label).toBeNull();
  });

  it('should disable button if disabled property is set', () => {
    const template = `<anms-big-input-action [disabled]="disabled"></anms-big-input-action>`;

    fixture = createHostComponent(template);
    component.disabled = true;
    fixture.detectChanges();
    const button = getButtonElement();
    expect(button.disabled).toBeTruthy();
  });

  it('should display icon if icon property is set', () => {
    const template = `
    <anms-big-input-action
     [icon]="icon"
    ></anms-big-input-action>
    `;
    fixture = createHostComponent(template);
    component.icon = 'delete';
    fixture.detectChanges();
    const icon = getIconElement();

    expect(icon).toBeTruthy();
  });

  it('should display label with provided text when label property is set', () => {
    const template = `
    <anms-big-input-action
      [label]="label"
    ></anms-big-input-action>
    `;
    fixture = createHostComponent(template);
    component.label = 'delete';
    fixture.detectChanges();
    const label =  getLabelElement();

    expect(label).toBeTruthy();
    expect(label.textContent).toBe('delete');
  });

  it('should trigger action bound when button clicked', () => {
    const template = `
    <anms-big-input-action
     (action)="actionHandler()"
    ></anms-big-input-action>
    `;
    fixture = createHostComponent(template);
    const button = getButton();
    component.actionHandler = () => {};
    fixture.detectChanges();
    spyOn(component, 'actionHandler').and.callThrough();
    button.triggerEventHandler('click', <Event>{});
    expect(component.actionHandler).toHaveBeenCalled();
  });
});
