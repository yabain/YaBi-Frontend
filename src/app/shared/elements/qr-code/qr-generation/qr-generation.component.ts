import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-generation',
  templateUrl: './qr-generation.component.html',
  styleUrls: ['./qr-generation.component.scss'],
})

export class QrGenerationComponent implements OnInit {
  title = 'Transfert';
  qrLink = 'https://yabain.com';
  public textToCode: string;
  public myAngularxQrCode: string = null;

  constructor() {
    if(this.myAngularxQrCode == null){
      this.myAngularxQrCode = 'https://yabain.com';
    }
   }

  ngOnInit() {
  }

  save() {
  }

  createQRCode(){
    this.myAngularxQrCode = this.textToCode;
    this.textToCode = '';
  }

}
