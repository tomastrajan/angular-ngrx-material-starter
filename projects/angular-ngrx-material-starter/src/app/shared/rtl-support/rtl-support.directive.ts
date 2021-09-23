import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[rtl]'
})
export class RtlSupportDirective implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  constructor(private el: ElementRef, public translate: TranslateService) {
    el.nativeElement.style.textAlign =
      translate.currentLang === 'he' || translate.currentLang === 'ar'
        ? 'right'
        : 'left';
    el.nativeElement.style.direction =
      translate.currentLang === 'he' || translate.currentLang === 'ar'
        ? 'rtl'
        : 'ltr';
  }
  ngOnInit() {
    this.subscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.el.nativeElement.style.textAlign =
          event.lang === 'he' || event.lang === 'ar' ? 'right' : 'left';
        this.el.nativeElement.style.direction =
          event.lang === 'he' || event.lang === 'ar' ? 'rtl' : 'ltr';
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
