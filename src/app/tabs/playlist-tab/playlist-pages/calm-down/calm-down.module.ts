import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalmDownPageRoutingModule } from './calm-down-routing.module';

import { CalmDownPage } from './calm-down.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalmDownPageRoutingModule,
    SharedModule
  ],
  declarations: [CalmDownPage]
})
export class CalmDownPageModule {}
