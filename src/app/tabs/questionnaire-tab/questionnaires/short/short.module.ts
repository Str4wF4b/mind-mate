import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortPageRoutingModule } from './short-routing.module';

import { ShortPage } from './short.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortPageRoutingModule
  ],
  declarations: [ShortPage]
})
export class ShortPageModule {}
