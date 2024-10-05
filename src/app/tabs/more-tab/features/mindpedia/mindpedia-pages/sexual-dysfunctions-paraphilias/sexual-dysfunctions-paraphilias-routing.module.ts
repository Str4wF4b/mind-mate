import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SexualDysfunctionsParaphiliasPage } from './sexual-dysfunctions-paraphilias.page';

const routes: Routes = [
  {
    path: '',
    component: SexualDysfunctionsParaphiliasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SexualDysfunctionsParaphiliasPageRoutingModule {}
