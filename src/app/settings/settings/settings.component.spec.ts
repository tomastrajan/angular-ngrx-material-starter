// angular
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

// 3D
import { Store } from '@ngrx/store';
import { MatSlideToggle } from '@angular/material';

// angular testing stuff
import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '@app/shared';

// relativr stuff
import { SettingsComponent } from './settings.component';
import {
  SettingsState,
  ActionSettingsChangeTheme,
  ActionSettingsChangeAutoNightMode
} from '../settings.reducer';

import { TestStore } from '@testing/utils';
describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let store: TestStore<SettingsState>;
  let dispatchSpy;

  const getSelectArrow = () =>
    fixture.debugElement.query(By.css('.mat-select-trigger'));
  const getOptions = () => fixture.debugElement.queryAll(By.css('mat-option'));

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, RouterTestingModule, SharedModule],
        declarations: [SettingsComponent],
        providers: [{ provide: Store, useClass: TestStore }]
      }).compileComponents();
    })
  );

  beforeEach(
    inject([Store], (testStore: TestStore<SettingsState>) => {
      store = testStore;
      store.setState({
        theme: 'DEFAULT-THEME',
        autoNightMode: true,
        pageAnimations: true,
        pageAnimationsDisabled: true,
        elementsAnimations: true
      });
      fixture = TestBed.createComponent(SettingsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(component.settings.theme).toBe('DEFAULT-THEME');
    expect(component.settings.autoNightMode).toBeTruthy();
  });

  it('should dispatch change theme action on theme selection', () => {
    dispatchSpy = spyOn(store, 'dispatch');
    getSelectArrow().triggerEventHandler('click', {});

    fixture.detectChanges();

    getOptions()[1].triggerEventHandler('click', {});

    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledTimes(2);
    expect(dispatchSpy).toHaveBeenCalledWith(
      new ActionSettingsChangeTheme({ theme: 'LIGHT-THEME' })
    );
  });

  it('should dispatch change auto night mode on night mode toggle', () => {
    dispatchSpy = spyOn(store, 'dispatch');
    const componentDebug = fixture.debugElement;
    const slider = componentDebug.queryAll(By.directive(MatSlideToggle))[0];

    slider.triggerEventHandler('change', { checked: false });
    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledTimes(2);
    expect(dispatchSpy).toHaveBeenCalledWith(
      new ActionSettingsChangeAutoNightMode({ autoNightMode: false })
    );
  });
});
