import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GadPage } from './gad.page';

const routes: Routes = [
  {
    path: '',
    component: GadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GadPageRoutingModule {}
