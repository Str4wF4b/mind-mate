import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkFocusPageRoutingModule } from './work-focus-routing.module';

import { WorkFocusPage } from './work-focus.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkFocusPageRoutingModule,
    SharedModule
  ],
  declarations: [WorkFocusPage]
})
export class WorkFocusPageModule {}
