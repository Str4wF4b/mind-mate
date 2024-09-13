import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreathingAirPage } from './breathing-air.page';

const routes: Routes = [
  {
    path: '',
    component: BreathingAirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreathingAirPageRoutingModule {}
