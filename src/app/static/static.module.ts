import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StaticRoutingModule
  ],
  declarations: [
    AboutComponent,
    FeaturesComponent
  ]
})
export class StaticModule { }
