import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';

import { CoreModule } from './core';
import { SettingsModule } from './settings';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,

    CoreModule,
    SharedModule,

    SettingsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
