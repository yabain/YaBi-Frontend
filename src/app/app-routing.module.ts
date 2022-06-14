import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainscreen',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'mainscreen',
    loadChildren: () => import('./front/mainscreen/mainscreen.module').then( m => m.MainscreenPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./front/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./front/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'mainscreen',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
