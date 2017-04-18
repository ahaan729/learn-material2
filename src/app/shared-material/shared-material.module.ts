import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdSidenavModule, MdTabsModule, MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdButtonModule
  ],
  exports: [
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdButtonModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
