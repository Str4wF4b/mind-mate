import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkFocusPageRoutingModule } from './work-focus-routing.module';

import { WorkFocusPage } from './work-focus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkFocusPageRoutingModule
  ],
  declarations: [WorkFocusPage]
})
export class WorkFocusPageModule {}
