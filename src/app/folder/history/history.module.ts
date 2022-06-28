import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HistoryPageRoutingModule } from './history-routing.module';
import { TitleComponent } from '../../shared/elements/title/title.component';
import { BilletsHistoryPage } from './billets-history/billets-history.page';
import { EventsHistoryPage } from './events-history/events-history.page';
import { WalletHistoryPage } from './wallet-history/wallet-history.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      // defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    BilletsHistoryPage,
    TitleComponent,
    EventsHistoryPage,
    WalletHistoryPage]
})
export class HistoryPageModule { }
