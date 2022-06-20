import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillesPage } from './billes.page';

const routes: Routes = [
  {
    path: '',
    component: BillesPage
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
export class BillesPageRoutingModule {}
