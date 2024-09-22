import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcdPage } from './ocd.page';

const routes: Routes = [
  {
    path: '',
    component: OcdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcdPageRoutingModule {}
