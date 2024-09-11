import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnaireTabPage } from './questionnaire-tab.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireTabPage
  },  {
    path: 'short',
    loadChildren: () => import('./questionnaires/short/short.module').then( m => m.ShortPageModule)
  },
  {
    path: 'daily',
    loadChildren: () => import('./questionnaires/daily/daily.module').then( m => m.DailyPageModule)
  },
  {
    path: 'weekly',
    loadChildren: () => import('./questionnaires/weekly/weekly.module').then( m => m.WeeklyPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnaireTabPageRoutingModule {}
