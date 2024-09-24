import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalmDownPage } from './calm-down.page';

const routes: Routes = [
  {
    path: '',
    component: CalmDownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalmDownPageRoutingModule {}
