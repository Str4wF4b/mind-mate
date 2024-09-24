import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalmDownPageRoutingModule } from './calm-down-routing.module';

import { CalmDownPage } from './calm-down.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalmDownPageRoutingModule
  ],
  declarations: [CalmDownPage]
})
export class CalmDownPageModule {}
