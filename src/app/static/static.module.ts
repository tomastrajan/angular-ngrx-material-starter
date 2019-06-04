import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [AboutComponent, FeaturesComponent]
})
export class StaticModule {}
