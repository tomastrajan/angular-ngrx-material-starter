import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  imports: [
    NoopAnimationsModule,
    RouterTestingModule,
    SharedModule,
    TranslateModule.forRoot(),
    StoreModule.forRoot({})
  ],
  exports: [
    NoopAnimationsModule,
    RouterTestingModule,
    SharedModule,
    TranslateModule
  ]
})
export class TestingModule {
  constructor() {}
}
