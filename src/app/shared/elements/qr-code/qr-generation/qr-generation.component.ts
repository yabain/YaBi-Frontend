import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/user/language/language.service';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(
    langService: LanguageService,
    translate: TranslateService,
   ) {
     translate.use(langService.getLanguage());
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
