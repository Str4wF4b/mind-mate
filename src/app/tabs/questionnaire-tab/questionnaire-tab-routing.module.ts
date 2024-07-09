import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnaireTabPage } from './questionnaire-tab.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnaireTabPageRoutingModule {}
