import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from './../core/material/material.module';
import { FortawesomeModule } from './../core/fortawesome/fortawesome.module';

import { BigInputComponent } from './big-input/big-input/big-input.component';
import { BigInputActionComponent } from './big-input/big-input-action/big-input-action.component';
import { RtlSupportDirective } from './rtl-support/rtl-support.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MaterialModule,
    FortawesomeModule,
    TranslateModule,
  ],
  declarations: [
    BigInputComponent,
    BigInputActionComponent,
    RtlSupportDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    FortawesomeModule,
    TranslateModule,

    BigInputComponent,
    BigInputActionComponent,
    RtlSupportDirective
  ]
})
export class SharedModule {
  constructor() { }
}
