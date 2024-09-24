import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistTabPage } from './playlist-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistTabPage
  },  {
    path: 'calm-down',
    loadChildren: () => import('./playlist-pages/calm-down/calm-down.module').then( m => m.CalmDownPageModule)
  },
  {
    path: 'work-focus',
    loadChildren: () => import('./playlist-pages/work-focus/work-focus.module').then( m => m.WorkFocusPageModule)
  },
  {
    path: 'moving',
    loadChildren: () => import('./playlist-pages/moving/moving.module').then( m => m.MovingPageModule)
  },
  {
    path: 'ambiente',
    loadChildren: () => import('./playlist-pages/ambiente/ambiente.module').then( m => m.AmbientePageModule)
  },
  {
    path: 'sleep',
    loadChildren: () => import('./playlist-pages/sleep/sleep.module').then( m => m.SleepPageModule)
  },
  {
    path: 'free-your-mind',
    loadChildren: () => import('./playlist-pages/free-your-mind/free-your-mind.module').then( m => m.FreeYourMindPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistTabPageRoutingModule {}
