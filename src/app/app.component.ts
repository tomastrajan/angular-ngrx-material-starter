import { Component, OnDestroy } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();

  themeClass: string;

  title = 'anms works!';

  constructor(
    overlayContainer: OverlayContainer,
    private store: Store<any>
  ) {
    store.select('settings')
      .takeUntil(this.unsubscribe$)
      .subscribe(({ theme }) => {
        const themeClass = theme.toLowerCase();
        overlayContainer.themeClass = themeClass;
        this.themeClass = themeClass;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
