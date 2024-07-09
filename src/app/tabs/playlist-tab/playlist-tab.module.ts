import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { PlaylistTabPageRoutingModule } from './playlist-tab-routing.module';
import { PlaylistTabPage } from './playlist-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    PlaylistTabPageRoutingModule
  ],
  declarations: [PlaylistTabPage]
})
export class PlaylistTabPageModule {}
