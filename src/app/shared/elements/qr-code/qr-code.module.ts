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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodeRoutingModule,
    QRCodeModule
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
