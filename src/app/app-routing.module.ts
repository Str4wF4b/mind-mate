import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    //loadChildren: () => import('./pages/loader/loader.module').then(m => m.LoaderPageModule)
    redirectTo: 'auth-main', pathMatch: 'full'
  },
  {
    path: 'auth-main',
    loadChildren: () => import('./pages/auth/auth-main/auth-main.module').then(m => m.AuthMainPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
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
