import { Component, OnDestroy } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.scss-theme.scss']
})
export class AppComponent implements OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();

  themeClass: string;

  constructor(
    overlayContainer: OverlayContainer,
    private store: Store<any>
  ) {
    store
      .select('settings')
      .takeUntil(this.unsubscribe$)
      .map(({ theme }) => theme.toLowerCase())
      .subscribe(theme => {
        this.themeClass = theme;
        overlayContainer.themeClass = theme;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
