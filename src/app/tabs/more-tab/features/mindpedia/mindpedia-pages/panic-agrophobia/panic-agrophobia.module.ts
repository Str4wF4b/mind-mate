import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanicAgrophobiaPageRoutingModule } from './panic-agrophobia-routing.module';

import { PanicAgrophobiaPage } from './panic-agrophobia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanicAgrophobiaPageRoutingModule
  ],
  declarations: [PanicAgrophobiaPage]
})
export class PanicAgrophobiaPageModule {}
