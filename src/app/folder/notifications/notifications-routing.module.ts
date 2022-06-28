import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts.component';
import { BadgesComponent } from './badges.component';
import { ModalsComponent } from './modals.component';

import { NotificationsPage } from './notifications.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
  },
  {
    path: 'alerts',
    component: AlertsComponent,
    data: {
      title: 'Alerts'
    }
  },
  {
    path: 'badges',
    component: BadgesComponent,
    data: {
      title: 'Badges'
    }
  },
  {
    path: 'modals',
    component: ModalsComponent,
    data: {
      title: 'Modals'
    }
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
export class NotificationsPageRoutingModule {}
