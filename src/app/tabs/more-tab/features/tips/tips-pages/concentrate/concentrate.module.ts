import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcentratePageRoutingModule } from './concentrate-routing.module';

import { ConcentratePage } from './concentrate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcentratePageRoutingModule
  ],
  declarations: [ConcentratePage]
})
export class ConcentratePageModule {}
