import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreTabPage } from './more-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MoreTabPage,
  },
  {
    path: 'tips',
    loadChildren: () => import('./features/tips/tips.module').then(m => m.TipsPageModule)
  },
  {
    path: 'mindpedia',
    loadChildren: () => import('./features/mindpedia/mindpedia.module').then(m => m.MindpediaPageModule)
  },
  {
    path: 'search-specialists',
    loadChildren: () => import('./features/search-specialists/search-specialists.module').then(m => m.SearchSpecialistsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./others/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./others/disclaimer/disclaimer.module').then(m => m.DisclaimerPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreTabPageRoutingModule { }
