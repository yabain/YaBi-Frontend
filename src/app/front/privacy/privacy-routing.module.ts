import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPage } from './privacy.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'privacy',
    pathMatch: 'full',
  },
   {
     path: 'privacy',
     pathMatch: 'full',
     component:PrivacyPage
   },
   {
     path:'**',
     redirectTo: 'privacy'
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyPageRoutingModule { }
