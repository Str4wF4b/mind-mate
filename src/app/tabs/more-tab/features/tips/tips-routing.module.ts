import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipsPage } from './tips.page';

const routes: Routes = [
  {
    path: '',
    component: TipsPage
  },  {
    path: 'stay-calm',
    loadChildren: () => import('./tips-pages/stay-calm/stay-calm.module').then( m => m.StayCalmPageModule)
  },
  {
    path: 'concentrate',
    loadChildren: () => import('./tips-pages/concentrate/concentrate.module').then( m => m.ConcentratePageModule)
  },
  {
    path: 'sleep',
    loadChildren: () => import('./tips-pages/sleep/sleep.module').then( m => m.SleepPageModule)
  },
  {
    path: 'meditation',
    loadChildren: () => import('./tips-pages/meditation/meditation.module').then( m => m.MeditationPageModule)
  },
  {
    path: 'physical-activity',
    loadChildren: () => import('./tips-pages/physical-activity/physical-activity.module').then( m => m.PhysicalActivityPageModule)
  },
  {
    path: 'breathing-exercises',
    loadChildren: () => import('./tips-pages/breathing-exercises/breathing-exercises.module').then( m => m.BreathingExercisesPageModule)
  },
  {
    path: 'breathing-air',
    loadChildren: () => import('./tips-pages/breathing-air/breathing-air.module').then( m => m.BreathingAirPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./tips-pages/music/music.module').then( m => m.MusicPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipsPageRoutingModule {}
