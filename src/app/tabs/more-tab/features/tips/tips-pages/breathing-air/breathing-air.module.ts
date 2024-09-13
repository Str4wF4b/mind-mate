import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreathingAirPageRoutingModule } from './breathing-air-routing.module';

import { BreathingAirPage } from './breathing-air.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreathingAirPageRoutingModule
  ],
  declarations: [BreathingAirPage]
})
export class BreathingAirPageModule {}
