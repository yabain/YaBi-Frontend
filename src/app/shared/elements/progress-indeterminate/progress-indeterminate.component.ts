import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/user/language/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-progress-indeterminate',
  templateUrl: './progress-indeterminate.component.html',
  styleUrls: ['./progress-indeterminate.component.css']
})
export class ProgressIndeterminateComponent implements OnInit {
  @Input() message: String = '';
  constructor(
    langService: LanguageService,
    translate: TranslateService,
   ) {
     translate.use(langService.getLanguage()); }

  ngOnInit(): void {
  }

}
