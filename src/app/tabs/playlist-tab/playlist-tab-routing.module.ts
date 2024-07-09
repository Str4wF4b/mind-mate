import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistTabPage } from './playlist-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistTabPageRoutingModule {}
