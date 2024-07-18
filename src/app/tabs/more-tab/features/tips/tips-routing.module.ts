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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipsPageRoutingModule {}
