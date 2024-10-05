import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepPageRoutingModule } from './sleep-routing.module';

import { SleepPage } from './sleep.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepPageRoutingModule,
    SharedModule
  ],
  declarations: [SleepPage]
})
export class SleepPageModule {}
