import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcentratePage } from './concentrate.page';

const routes: Routes = [
  {
    path: '',
    component: ConcentratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcentratePageRoutingModule {}
