import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyEventsRoutingModule } from './my-events-routing.module';
import { MyEventsPage } from './my-events.page';
import { TitleComponent } from '../../shared/elements/title/title.component';
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
    MyEventsRoutingModule,
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
  declarations: [MyEventsPage,
  TitleComponent]
})
export class MyEventsModule {}
