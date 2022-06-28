import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { LanguageService } from 'src/app/shared/services/user/language/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page-privacy',
  templateUrl: 'privacy.html',
})
export class PrivacyPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    langService: LanguageService,
    translate: TranslateService,
   ) {
     translate.use(langService.getLanguage());
  }

}
