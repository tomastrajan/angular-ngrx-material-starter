import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import {
  MdButtonModule,
  MdToolbarModule,
  MdMenuModule,
  MdSelectModule,
  MdSidenavModule,
  MdListModule,
  MdIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MdButtonModule,
    MdToolbarModule,
    MdSelectModule,
    MdSidenavModule,
    MdListModule,
    MdMenuModule,
    MdIconModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,

    MdButtonModule,
    MdMenuModule,
    MdSidenavModule,
    MdListModule,
    MdSelectModule,
    MdToolbarModule,
    MdIconModule
  ]
})
export class SharedModule { }
