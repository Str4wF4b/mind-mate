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
  },
  {
    path: 'panic-agrophobia',
    loadChildren: () => import('./mindpedia-pages/panic-agrophobia/panic-agrophobia.module').then( m => m.PanicAgrophobiaPageModule)
  },
  {
    path: 'gad',
    loadChildren: () => import('./mindpedia-pages/gad/gad.module').then( m => m.GadPageModule)
  },
  {
    path: 'sad',
    loadChildren: () => import('./mindpedia-pages/sad/sad.module').then( m => m.SadPageModule)
  },
  {
    path: 'eating-disorder',
    loadChildren: () => import('./mindpedia-pages/eating-disorder/eating-disorder.module').then( m => m.EatingDisorderPageModule)
  },
  {
    path: 'sexual-dysfunctions-paraphilias',
    loadChildren: () => import('./mindpedia-pages/sexual-dysfunctions-paraphilias/sexual-dysfunctions-paraphilias.module').then( m => m.SexualDysfunctionsParaphiliasPageModule)
  },
  {
    path: 'personality-disorder',
    loadChildren: () => import('./mindpedia-pages/personality-disorder/personality-disorder.module').then( m => m.PersonalityDisorderPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MindpediaPageRoutingModule {}
