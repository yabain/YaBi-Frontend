import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyEventsPage } from './my-events.page';

const routes: Routes = [
  {
    path: '',
    component: MyEventsPage
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
export class MyEventsRoutingModule {}
