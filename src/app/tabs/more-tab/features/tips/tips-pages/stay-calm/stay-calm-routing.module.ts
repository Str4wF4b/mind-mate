import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StayCalmPage } from './stay-calm.page';

const routes: Routes = [
  {
    path: '',
    component: StayCalmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StayCalmPageRoutingModule {}
