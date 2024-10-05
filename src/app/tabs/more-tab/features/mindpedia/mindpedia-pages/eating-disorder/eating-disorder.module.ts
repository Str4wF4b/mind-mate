import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EatingDisorderPageRoutingModule } from './eating-disorder-routing.module';

import { EatingDisorderPage } from './eating-disorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EatingDisorderPageRoutingModule
  ],
  declarations: [EatingDisorderPage]
})
export class EatingDisorderPageModule {}
