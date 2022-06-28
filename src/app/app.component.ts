import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, StatusBarBackgroundColorOptions, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LanguageService } from './shared/services/user/language/language.service';
// eslint-disable-next-line @typescript-eslint/naming-convention
// const { StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  textDir: String = 'ltr';
  public appPages = [
    { title: 'categories', url: 'folder/categories', icon: 'albums', labels: 'Catégorie' },
    { title: 'myTickets', url: 'folder/billes', icon: 'bookmarks', labels: 'Billets' },
    { title: 'myFavorites', url: 'folder/favoris', icon: 'star', labels: 'Favoris' },
    { title: 'myEvents', url: 'folder/my-events', icon: 'calendar', labels: 'Événements' },
    { title: 'notifications', url: 'folder/notifications', icon: 'notifications', labels: 'Notifications' },
    { title: 'invitations', url: 'folder/invitations', icon: 'folder-open', labels: 'Invitations' },
    { title: 'wallet', url: 'folder/wallet', icon: 'wallet', labels: 'Wallet' },
  ];
  public labels = ['Catégorie', 'Billets', 'Favoris', 'Invitations', 'Wallet', 'Historique', 'Wallet'];


  constructor(
    platform: Platform,
    private router: Router,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    langService: LanguageService,
    translate: TranslateService,
   ) {
     translate.use(langService.getLanguage());
    // translate.setDefaultLang('fr') ;
    // this.langService.initLanguage();
    // this.ionViewWillEnter();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //this is to determine the text direction depending on the selected language
      translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        this.textDir = event.lang == 'ar'? 'rtl' : 'ltr';
      });
    });
  }

  // ionViewWillEnter() {
  //   StatusBar.setStyle({ style: StatusBarStyle.Light });
  //   const opts: StatusBarBackgroundColorOptions = {
  //     color: '#eef2ee'
  //   };
  //   StatusBar.setBackgroundColor(opts);
  // }
}
