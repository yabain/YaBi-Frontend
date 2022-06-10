import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopComponent } from '../../pop/pop.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  title = 'Détails';

  constructor(
    private router: Router,

    //for pop pop
    public popoverController: PopoverController,) { }

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['tabs/home']);
  }


  
  // for pop pop
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
}
