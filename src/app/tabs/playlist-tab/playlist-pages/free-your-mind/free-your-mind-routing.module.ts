import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeYourMindPage } from './free-your-mind.page';

const routes: Routes = [
  {
    path: '',
    component: FreeYourMindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeYourMindPageRoutingModule {}
