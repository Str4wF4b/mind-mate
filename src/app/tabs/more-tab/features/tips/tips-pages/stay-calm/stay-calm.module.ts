import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StayCalmPageRoutingModule } from './stay-calm-routing.module';

import { StayCalmPage } from './stay-calm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StayCalmPageRoutingModule
  ],
  declarations: [StayCalmPage]
})
export class StayCalmPageModule {}
