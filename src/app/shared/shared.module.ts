import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import {
  MdButtonModule,
  MdToolbarModule,
  MdMenuModule,
  MdSelectModule,
  MdIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MdButtonModule,
    MdToolbarModule,
    MdSelectModule,
    MdMenuModule,
    MdIconModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,

    MdButtonModule,
    MdMenuModule,
    MdSelectModule,
    MdToolbarModule,
    MdIconModule
  ]
})
export class SharedModule { }
