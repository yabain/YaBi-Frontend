import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HistoryPageRoutingModule } from './history-routing.module';
import { TitleComponent } from '../../shared/elements/title/title.component';
import { BilletsHistoryPage } from './billets-history/billets-history.page';
import { EventsHistoryPage } from './events-history/events-history.page';
import { WalletHistoryPage } from './wallet-history/wallet-history.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule
  ],
  declarations: [
    BilletsHistoryPage,
    TitleComponent,
    EventsHistoryPage,
    WalletHistoryPage]
})
export class HistoryPageModule { }
