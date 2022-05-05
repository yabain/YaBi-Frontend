import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'tabs',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search', loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'event-detail', loadChildren: () => import('../event-detail/event-detail.module').then(m => m.EventDetailModule)
      },
      {
        path: 'categories', loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
      },
      {
        path: 'billes', loadChildren: () => import('../billes/billes.module').then(m => m.BillesPageModule)
      },
      {
        path: 'favoris', loadChildren: () => import('../favoris/favoris.module').then(m => m.FavorisPageModule)
      },
      {
        path: 'notifications', loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'wallet', loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletPageModule)
      },
      {
        path: 'history', loadChildren: () => import('../history/history.module').then(m => m.HistoryPageModule)
      },
      {
        path: 'invitations', loadChildren: () => import('../invitations/invitations.module').then(m => m.InvitationsPageModule)
      },
      {
        path: 'about', loadChildren: () => import('../../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'add-event', loadChildren: () => import('../add-event/add-event.module').then(m => m.AddEventPageModule)
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'tabs',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
