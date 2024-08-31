import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlaylistTabPageRoutingModule } from './playlist-tab-routing.module';
import { PlaylistTabPage } from './playlist-tab.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistTabPageRoutingModule,
    SharedModule
  ],
  declarations: [PlaylistTabPage]
})
export class PlaylistTabPageModule {}
