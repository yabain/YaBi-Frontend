import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import { PopComponent } from '../pop/pop.component';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/services/user/language/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss'],
})
export class RechargeComponent implements OnInit {
  title = 'Recharge';

  billetTitle: string;
  billetOwner: string;
  billetType: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  place: string;
  city: string;
  country: string;
  organiser: string;
  owner: string;

  constructor(
    private modalController: ModalController,
    public popoverController: PopoverController,
    private navParams: NavParams,
    private router: Router,
    langService: LanguageService,
    translate: TranslateService,
   ) {
     translate.use(langService.getLanguage()); }

  ngOnInit() {
    console.table(this.navParams);
    this.billetTitle = this.navParams.data.billetTitle;
    this.billetOwner = this.navParams.data.billetOwner;
    this.billetType = this.navParams.data.billetType;
    this.startDate = this.navParams.data.startDate;
    this.startTime = this.navParams.data.startTime;
    this.endDate = this.navParams.data.endDate;
    this.endTime = this.navParams.data.endTime;
    this.place = this.navParams.data.place;
    this.city = this.navParams.data.city;
    this.country = this.navParams.data.country;
    this.organiser = this.navParams.data.organiser;
    this.owner = this.navParams.data.owner;
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  save() {
  }
  codeGenerator(){
    this.router.navigate(['folder/qr-code/generation']);
  }

}
