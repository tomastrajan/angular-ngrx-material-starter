import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdToolbarModule,
  MdMenuModule,
  MdSelectModule,
  MdTabsModule,
  MdInputModule,
  MdProgressSpinnerModule,
  MdChipsModule,
  MdSidenavModule,
  MdCheckboxModule,
  MdCardModule,
  MdListModule,
  MdIconModule,
  MdTooltipModule
} from '@angular/material';

import { BigInputComponent } from './big-input/big-input.component';
import { BigInputActionComponent } from './big-input/big-input-action.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,

    MdButtonModule,
    MdToolbarModule,
    MdSelectModule,
    MdTabsModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdChipsModule,
    MdCardModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdListModule,
    MdMenuModule,
    MdIconModule,
    MdTooltipModule
  ],
  declarations: [
    BigInputComponent,
    BigInputActionComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,

    MdButtonModule,
    MdMenuModule,
    MdTabsModule,
    MdChipsModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdCheckboxModule,
    MdCardModule,
    MdSidenavModule,
    MdListModule,
    MdSelectModule,
    MdToolbarModule,
    MdIconModule,
    MdTooltipModule,

    BigInputComponent,
    BigInputActionComponent
  ]
})
export class SharedModule { }
