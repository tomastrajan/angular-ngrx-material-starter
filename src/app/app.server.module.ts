
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';


@NgModule({
  imports: [
    AppModule,
    // // angular
    // BrowserAnimationsModule,
    ServerModule,
    // // core & shared
     CoreModule,
     SharedModule,

    // // features
    StaticModule,
    // SettingsModule,

    // // app
     AppRoutingModule,
  ],
  declarations: [
    // AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppServerModule  { }
