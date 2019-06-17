import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { RtlSupportDirective } from './rtl-support.directive';
import { BehaviorSubject, of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  template: `
    <h2 rtl>Something Yellow</h2>
    <h2 rtl>The Default (Gray)</h2>
    <h2>No Highlight</h2>
    <div rtl>Vasili</div>
  `
})
class TestComponent {}

describe('RtlSupportDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[]; // the three elements w/ the directive
  let bareH2: DebugElement; // the <h2> w/o the directive
  let languageSubject;

  beforeEach(() => {
    languageSubject = new BehaviorSubject({ lang: 'he' });
    fixture = TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [RtlSupportDirective, TestComponent],
      providers: [
        {
          provide: TranslateService,
          useValue: {
            currentLang: 'he',
            onLangChange: languageSubject.asObservable()
          }
        }
      ]
    }).createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached RtlDirective
    des = fixture.debugElement.queryAll(By.directive(RtlSupportDirective));

    // the h2 without the RtlDirective
    bareH2 = fixture.debugElement.query(By.css('h2:not([rtl])'));
  });

  // color tests
  it('should have three rtl styled elements', () => {
    expect(des.length).toBe(3);
  });

  it('should set "text-align" rule value to "right" if current language is hebrew', () => {
    const textAlign = des[0].nativeElement.style.textAlign;
    expect(textAlign).toBe('right');
  });

  it('should set "direction" rule value to "rtl" if current language is hebrew', () => {
    const direction = des[0].nativeElement.style.direction;
    expect(direction).toBe('rtl');
  });

  it('should set "direction" rule value to "ltr" after current language changed to German', () => {
    languageSubject.next({ lang: 'de' });
    fixture.detectChanges();

    const textAlign = des[0].nativeElement.style.textAlign;
    expect(textAlign).toBe('left');
    const direction = des[0].nativeElement.style.direction;
    expect(direction).toBe('ltr');
  });
});
