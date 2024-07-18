import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MindpediaPage } from './mindpedia.page';

const routes: Routes = [
  {
    path: '',
    component: MindpediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MindpediaPageRoutingModule {}
