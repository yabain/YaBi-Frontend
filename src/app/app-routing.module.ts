import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainscreen',
    // redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'mainscreen',
    loadChildren: () => import('./front/mainscreen/mainscreen.module').then( m => m.MainscreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./front/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./front/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'fogotpassword',
    loadChildren: () => import('./front/fogotpassword/fogotpassword.module').then( m => m.FogotpasswordPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./front/about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
