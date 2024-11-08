import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth-main', pathMatch: 'full'
  },
  {
    path: 'auth-main',
    loadChildren: () => import('./auth/auth-main/auth-main.module').then(m => m.AuthMainPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'playlist-tab',
    loadChildren: () => import('./tabs/playlist-tab/playlist-tab.module').then(m => m.PlaylistTabPageModule)
  },
  {
    path: 'more-tab',
    loadChildren: () => import('./tabs/more-tab/more-tab.module').then(m => m.MoreTabPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
