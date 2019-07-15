import { initialState, settingsReducer } from './settings.reducer';

import {
  actionSettingsChangeAnimationsElements,
  actionSettingsChangeAnimationsPage,
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeHour,
  actionSettingsChangeLanguage,
  actionSettingsChangeStickyHeader,
  actionSettingsChangeTheme
} from './settings.actions';

describe('SettingsReducer', () => {
  it('should return default state', () => {
    const action = {} as any;
    const state = settingsReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should update language', () => {
    const action = actionSettingsChangeLanguage({ language: 'sk' });
    const state = settingsReducer(undefined, action);
    expect(state.language).toEqual('sk');
  });

  it('should update theme', () => {
    const action = actionSettingsChangeTheme({ theme: 'dark' });
    const state = settingsReducer(undefined, action);
    expect(state.theme).toEqual('dark');
  });

  it('should update pageAnimations', () => {
    const action = actionSettingsChangeAnimationsPage({
      pageAnimations: false
    });
    const state = settingsReducer(undefined, action);
    expect(state.pageAnimations).toEqual(false);
  });

  it('should update pageAnimationsDisabled and pageAnimations', () => {
    const action = actionSettingsChangeAnimationsPageDisabled({
      pageAnimationsDisabled: true
    });
    const state = settingsReducer(undefined, action);
    expect(state.pageAnimationsDisabled).toEqual(true);
    expect(state.pageAnimations).toEqual(false);
  });

  it('should update elementsAnimations', () => {
    const action = actionSettingsChangeAnimationsElements({
      elementsAnimations: false
    });
    const state = settingsReducer(undefined, action);
    expect(state.elementsAnimations).toEqual(false);
  });

  it('should update autoNightMode', () => {
    const action = actionSettingsChangeAutoNightMode({
      autoNightMode: true
    });
    const state = settingsReducer(undefined, action);
    expect(state.autoNightMode).toEqual(true);
  });

  it('should update stickyHeader', () => {
    const action = actionSettingsChangeStickyHeader({
      stickyHeader: false
    });
    const state = settingsReducer(undefined, action);
    expect(state.stickyHeader).toEqual(false);
  });

  it('should update hour', () => {
    const action = actionSettingsChangeHour({
      hour: 7
    });
    const state = settingsReducer(undefined, action);
    expect(state.hour).toEqual(7);
  });
});
