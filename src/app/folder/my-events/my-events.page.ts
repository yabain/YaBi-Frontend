import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/services/user/language/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.page.html',
  styleUrls: ['./my-events.page.scss'],
})
export class MyEventsPage implements OnInit {
  title = 'Mes events';

  constructor(private router: Router,
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
