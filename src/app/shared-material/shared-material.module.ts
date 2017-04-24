import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdDialogModule, MdIconModule, MdListModule, MdSidenavModule, MdSlideToggleModule,
  MdTabsModule,
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
    MdTooltipModule,
    MdDialogModule
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
    MdTooltipModule,
    MdDialogModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
