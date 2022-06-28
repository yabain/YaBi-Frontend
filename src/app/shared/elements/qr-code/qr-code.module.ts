import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { QrCodeRoutingModule } from './qr-code-routing'
import { QrGenerationComponent } from './qr-generation/qr-generation.component';
import { QrScanComponent } from './qr-scan/qr-scan.component';
import { QRCodeModule } from 'angularx-qrcode';
import { TitleComponent } from '../title/title.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { ProgressIndeterminateModule } from '../progress-indeterminate/progress-indeterminate.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodeRoutingModule,
    QRCodeModule,
    ProgressIndeterminateModule,
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
      QrGenerationComponent,
      QrScanComponent,
      TitleComponent
  ],
  providers:[
    StatusBar,
    SplashScreen,
    QRScanner,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ]
})

export class QrCodePageModule {}
