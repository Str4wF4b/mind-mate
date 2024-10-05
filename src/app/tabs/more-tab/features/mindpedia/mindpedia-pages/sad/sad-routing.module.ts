import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SadPage } from './sad.page';

const routes: Routes = [
  {
    path: '',
    component: SadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SadPageRoutingModule {}
