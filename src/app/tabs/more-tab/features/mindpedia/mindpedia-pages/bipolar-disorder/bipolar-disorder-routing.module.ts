import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BipolarDisorderPage } from './bipolar-disorder.page';

const routes: Routes = [
  {
    path: '',
    component: BipolarDisorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BipolarDisorderPageRoutingModule {}
