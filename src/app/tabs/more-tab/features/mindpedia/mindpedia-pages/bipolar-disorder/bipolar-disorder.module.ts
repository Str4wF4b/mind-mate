import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BipolarDisorderPageRoutingModule } from './bipolar-disorder-routing.module';

import { BipolarDisorderPage } from './bipolar-disorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BipolarDisorderPageRoutingModule
  ],
  declarations: [BipolarDisorderPage]
})
export class BipolarDisorderPageModule {}
