import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home-tab/home-tab.module').then(m => m.HomeTabPageModule)
      },
      {
        path: 'well-being',
        loadChildren: () => import('./well-being-tab/well-being-tab.module').then(m => m.WellBeingTabPageModule)
      },
      {
        path: 'questionnaire',
        loadChildren: () => import('./questionnaire-tab/questionnaire-tab.module').then(m => m.QuestionnaireTabPageModule)
      },
      {
        path: 'playlist',
        loadChildren: () => import('./playlist-tab/playlist-tab.module').then(m => m.PlaylistTabPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('./more-tab/more-tab.module').then(m => m.MoreTabPageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'device',
    loadChildren: () => import('./well-being-tab/device/device.module').then( m => m.DevicePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
