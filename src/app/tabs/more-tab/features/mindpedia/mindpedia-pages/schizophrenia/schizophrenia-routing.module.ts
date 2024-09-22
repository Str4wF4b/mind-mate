import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchizophreniaPage } from './schizophrenia.page';

const routes: Routes = [
  {
    path: '',
    component: SchizophreniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchizophreniaPageRoutingModule {}
