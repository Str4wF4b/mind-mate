import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcdPageRoutingModule } from './ocd-routing.module';

import { OcdPage } from './ocd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcdPageRoutingModule
  ],
  declarations: [OcdPage]
})
export class OcdPageModule {}
