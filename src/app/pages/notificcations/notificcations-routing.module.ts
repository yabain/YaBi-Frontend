import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificcationsPage } from './notificcations.page';

const routes: Routes = [
  {
    path: '',
    component: NotificcationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificcationsPageRoutingModule {}
