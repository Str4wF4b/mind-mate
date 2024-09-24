import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkFocusPage } from './work-focus.page';

const routes: Routes = [
  {
    path: '',
    component: WorkFocusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkFocusPageRoutingModule {}
