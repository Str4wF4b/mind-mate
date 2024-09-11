import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortPage } from './short.page';

const routes: Routes = [
  {
    path: '',
    component: ShortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortPageRoutingModule {}
