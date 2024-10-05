import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovingPageRoutingModule } from './moving-routing.module';

import { MovingPage } from './moving.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovingPageRoutingModule,
    SharedModule
  ],
  declarations: [MovingPage]
})
export class MovingPageModule {}
