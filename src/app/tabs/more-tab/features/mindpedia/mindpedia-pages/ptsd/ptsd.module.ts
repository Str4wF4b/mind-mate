import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtsdPageRoutingModule } from './ptsd-routing.module';

import { PtsdPage } from './ptsd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PtsdPageRoutingModule
  ],
  declarations: [PtsdPage]
})
export class PtsdPageModule {}
