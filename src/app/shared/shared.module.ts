import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import {
  MdButtonModule,
  MdToolbarModule,
  MdMenuModule,
  MdIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,

    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule
  ]
})
export class SharedModule { }
