import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { HomeTabPageRoutingModule } from './home-tab-routing.module';
import { HomeTabPage } from './home-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    HomeTabPageRoutingModule
  ],
  declarations: [HomeTabPage]
})
export class HomeTabPageModule {}
