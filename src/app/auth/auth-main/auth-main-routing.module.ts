import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthMainPage } from './auth-main.page';

const routes: Routes = [
  {
    path: '',
    component: AuthMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthMainPageRoutingModule {}
