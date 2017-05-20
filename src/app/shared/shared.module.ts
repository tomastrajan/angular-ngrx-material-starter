import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import {
  MdButtonModule,
  MdToolbarModule,
  MdMenuModule,
  MdSelectModule,
  MdTabsModule,
  MdSidenavModule,
  MdCardModule,
  MdListModule,
  MdIconModule
} from '@angular/material';

import { BigInputComponent } from './big-input/big-input.component';
import { BigInputActionComponent } from './big-input/big-input-action.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MdButtonModule,
    MdToolbarModule,
    MdSelectModule,
    MdTabsModule,
    MdCardModule,
    MdSidenavModule,
    MdListModule,
    MdMenuModule,
    MdIconModule
  ],
  declarations: [
    BigInputComponent,
    BigInputActionComponent
  ],
  exports: [
    CommonModule,
    FormsModule,

    MdButtonModule,
    MdMenuModule,
    MdTabsModule,
    MdCardModule,
    MdSidenavModule,
    MdListModule,
    MdSelectModule,
    MdToolbarModule,
    MdIconModule,

    BigInputComponent,
    BigInputActionComponent
  ]
})
export class SharedModule { }
