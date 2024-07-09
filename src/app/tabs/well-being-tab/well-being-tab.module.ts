import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { WellBeingTabPageRoutingModule } from './well-being-tab-routing.module';
import { WellBeingTabPage } from './well-being-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    WellBeingTabPageRoutingModule
  ],
  declarations: [WellBeingTabPage]
})
export class WellBeingTabPageModule {}
