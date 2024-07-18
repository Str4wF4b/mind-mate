import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchSpecialistsPage } from './search-specialists.page';

const routes: Routes = [
  {
    path: '',
    component: SearchSpecialistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchSpecialistsPageRoutingModule {}
