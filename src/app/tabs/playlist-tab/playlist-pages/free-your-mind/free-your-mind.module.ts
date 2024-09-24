import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeYourMindPageRoutingModule } from './free-your-mind-routing.module';

import { FreeYourMindPage } from './free-your-mind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeYourMindPageRoutingModule
  ],
  declarations: [FreeYourMindPage]
})
export class FreeYourMindPageModule {}
