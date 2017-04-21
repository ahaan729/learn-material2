import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdSidenavModule, MdSlideToggleModule, MdTabsModule,
  MdToolbarModule, MdTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdSlideToggleModule,
    MdTooltipModule
  ],
  exports: [
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdSlideToggleModule,
    MdTooltipModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
