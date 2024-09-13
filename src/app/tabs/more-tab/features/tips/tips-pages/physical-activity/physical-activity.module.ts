import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysicalActivityPageRoutingModule } from './physical-activity-routing.module';

import { PhysicalActivityPage } from './physical-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhysicalActivityPageRoutingModule
  ],
  declarations: [PhysicalActivityPage]
})
export class PhysicalActivityPageModule {}
