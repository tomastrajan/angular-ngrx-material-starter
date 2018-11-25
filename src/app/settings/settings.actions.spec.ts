import {
  ActionSettingsChangeAnimationsElements,
  ActionSettingsChangeAnimationsPage,
  ActionSettingsChangeAnimationsPageDisabled,
  ActionSettingsChangeAutoNightMode,
  ActionSettingsChangeHour,
  ActionSettingsChangeLanguage,
  ActionSettingsChangeStickyHeader,
  ActionSettingsChangeTheme,
  SettingsActionTypes
} from './settings.actions';
import { NIGHT_MODE_THEME } from './settings.model';

describe('Settings Actions', () => {
  it('should create ActionSettingsChangeTheme action', () => {
    const action = new ActionSettingsChangeTheme({
      theme: NIGHT_MODE_THEME
    });

    expect(action.type).toEqual(SettingsActionTypes.CHANGE_THEME);
    expect(action.payload.theme).toEqual(NIGHT_MODE_THEME);
  });

  it('should create ActionSettingsChangeAnimationsElements action', () => {
    const action = new ActionSettingsChangeAnimationsElements({
      elementsAnimations: true
    });

    expect(action.type).toEqual(SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS);
    expect(action.payload.elementsAnimations).toEqual(true);
  });

  it('should create ActionSettingsChangeAnimationsPage action', () => {
    const action = new ActionSettingsChangeAnimationsPage({
      pageAnimations: true
    });

    expect(action.type).toEqual(SettingsActionTypes.CHANGE_ANIMATIONS_PAGE);
    expect(action.payload.pageAnimations).toEqual(true);
  });

  it('should create ActionSettingsChangeAnimationsPageDisabled action', () => {
    const action = new ActionSettingsChangeAnimationsPageDisabled({
      pageAnimationsDisabled: true
    });

    expect(action.type).toEqual(
      SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED
    );
    expect(action.payload.pageAnimationsDisabled).toEqual(true);
  });

  it('should create ActionSettingsChangeAutoNightMode action', () => {
    const action = new ActionSettingsChangeAutoNightMode({
      autoNightMode: true
    });

    expect(action.type).toEqual(
      SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE
    );
    expect(action.payload.autoNightMode).toEqual(true);
  });

  it('should create ActionSettingsChangeLanguage action', () => {
    const action = new ActionSettingsChangeLanguage({
      language: 'en'
    });

    expect(action.type).toEqual(SettingsActionTypes.CHANGE_LANGUAGE);
    expect(action.payload.language).toEqual('en');
  });

  it('should create ActionSettingsChangeStickyHeader action', () => {
    const action = new ActionSettingsChangeStickyHeader({
      stickyHeader: true
    });

    expect(action.type).toEqual(SettingsActionTypes.CHANGE_STICKY_HEADER);
    expect(action.payload.stickyHeader).toEqual(true);
  });

  it('should create ActionSettingsChangeHour action', () => {
    const action = new ActionSettingsChangeHour({
      hour: 7
    });

    expect(action.type).toEqual(SettingsActionTypes.CHANGE_HOUR);
    expect(action.payload.hour).toEqual(7);
  });
});
