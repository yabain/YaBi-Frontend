import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilletsHistoryPage } from './billets-history/billets-history.page';
import { EventsHistoryPage } from './events-history/events-history.page';
import { WalletHistoryPage } from './wallet-history/wallet-history.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'wallet',
    component: WalletHistoryPage
  },
  {
    path: 'events',
    component: EventsHistoryPage
  },
  {
    path: 'billets',
    component: BilletsHistoryPage
  },
  {
    path: '**',
    redirectTo: 'events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryPageRoutingModule {}
