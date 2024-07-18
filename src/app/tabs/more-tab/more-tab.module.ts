import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { MoreTabPageRoutingModule } from './more-tab-routing.module';
import { MoreTabPage } from './more-tab.page';
import { TipsPageModule } from './features/tips/tips.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    MoreTabPageRoutingModule,
    TipsPageModule
  ],
  declarations: [MoreTabPage]
})
export class MoreTabPageModule {}
