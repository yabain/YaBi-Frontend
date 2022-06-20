import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import { PopComponent } from '../pop/pop.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss'],
})
export class RetraitComponent implements OnInit {
  title: 'Retrait';

  constructor(
    private modalController: ModalController,
    public popoverController: PopoverController,
    private navParams: NavParams,
    private router: Router,
  ) { }

  ngOnInit() {
    
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
}
