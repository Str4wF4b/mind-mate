import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EatingDisorderPage } from './eating-disorder.page';

const routes: Routes = [
  {
    path: '',
    component: EatingDisorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EatingDisorderPageRoutingModule {}
