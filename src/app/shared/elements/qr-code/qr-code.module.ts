import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrCodeRoutingModule } from './qr-code-routing'
import { QrGenerationComponent } from './qr-generation/qr-generation.component';
import { QrScanComponent } from './qr-scan/qr-scan.component';
import { QRCodeModule } from 'angularx-qrcode';
import { TitleComponent } from '../title/title.component';


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
  ]
})

export class QrCodePageModule {}
