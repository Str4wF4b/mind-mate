import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GadPageRoutingModule } from './gad-routing.module';

import { GadPage } from './gad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GadPageRoutingModule
  ],
  declarations: [GadPage]
})
export class GadPageModule {}
