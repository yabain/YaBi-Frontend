import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitationsPage } from './invitations.page';

const routes: Routes = [
  {
    path: '',
    component: InvitationsPage
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitationsPageRoutingModule {}
