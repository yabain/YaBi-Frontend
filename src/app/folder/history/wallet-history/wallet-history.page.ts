import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/services/user/language/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.page.html',
  styleUrls: ['./wallet-history.page.scss'],
})
export class WalletHistoryPage implements OnInit {
  title = 'Historique';

  constructor(
    private router: Router,
    langService: LanguageService,
    translate: TranslateService,
  ) {
    translate.use(langService.getLanguage());
 }

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

}
