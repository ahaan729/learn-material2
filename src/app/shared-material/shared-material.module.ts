import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdIconModule, MdListModule, MdSidenavModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdListModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdListModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
