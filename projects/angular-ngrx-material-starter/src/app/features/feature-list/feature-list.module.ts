import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureListRoutingModule } from './feature-list-routing.module';

@NgModule({
  declarations: [FeatureListComponent],
  imports: [CommonModule, SharedModule, FeatureListRoutingModule]
})
export class FeatureListModule {}
