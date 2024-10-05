import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalityDisorderPage } from './personality-disorder.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalityDisorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalityDisorderPageRoutingModule {}
