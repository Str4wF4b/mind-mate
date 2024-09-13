import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MindpediaPage } from './mindpedia.page';

const routes: Routes = [
  {
    path: '',
    component: MindpediaPage
  },
  {
    path: 'schizophrenia',
    loadChildren: () => import('./mindpedia-pages/schizophrenia/schizophrenia.module').then( m => m.SchizophreniaPageModule)
  },
  {
    path: 'depression',
    loadChildren: () => import('./mindpedia-pages/depression/depression.module').then( m => m.DepressionPageModule)
  },
  {
    path: 'bipolar-disorder',
    loadChildren: () => import('./mindpedia-pages/bipolar-disorder/bipolar-disorder.module').then( m => m.BipolarDisorderPageModule)
  },
  {
    path: 'ptsd',
    loadChildren: () => import('./mindpedia-pages/ptsd/ptsd.module').then( m => m.PtsdPageModule)
  },
  {
    path: 'ocd',
    loadChildren: () => import('./mindpedia-pages/ocd/ocd.module').then( m => m.OcdPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MindpediaPageRoutingModule {}
