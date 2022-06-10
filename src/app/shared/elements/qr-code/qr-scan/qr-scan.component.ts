import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.component.html',
  styleUrls: ['./qr-scan.component.scss'],
})
export class QrScanComponent implements OnInit {
  title = 'Scanner';
  public showCamera = false;
  public textScanned = '';

  constructor(
    private qrScanner: QRScanner,
    private alertController: AlertController,
    private location: Location
  ) {
    this.scanCode();
    console.log(this.showCamera);
  }

  ngOnInit() {
  }

  scanCode(){
    this.showCamera = true;
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) =>{
      if(status.authorized){
        let scanSub = this.qrScanner.scan().subscribe((text: any) =>{
          console.log('Scan effectué', text);
          this.textScanned = text.result;
          this.qrScanner.hide();
          scanSub.unsubscribe();
          this.showCamera = false;
        });
      } else if (status.denied){

      } else { }
    })
    .catch((e: any) =>
      console.log('Erreur: ', e)
    );
  }

  closeCamera(){
    this.showCamera = false;
    this.qrScanner.hide();
    this.qrScanner.destroy();
  }

  prviousPage() {
    this.location.back();
  }
}
