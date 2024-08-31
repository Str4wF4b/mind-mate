import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoreTabPageRoutingModule } from './more-tab-routing.module';
import { MoreTabPage } from './more-tab.page';
import { TipsPageModule } from './features/tips/tips.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreTabPageRoutingModule,
    TipsPageModule,
    SharedModule
  ],
  declarations: [MoreTabPage]
})
export class MoreTabPageModule {}
