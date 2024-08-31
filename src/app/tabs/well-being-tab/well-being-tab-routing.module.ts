import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellBeingTabPage } from './well-being-tab.page';

const routes: Routes = [
  {
    path: '',
    component: WellBeingTabPage
  },
  {
    path: 'device',
    loadChildren: () => import('./device/device.module').then(m => m.DevicePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellBeingTabPageRoutingModule {}
