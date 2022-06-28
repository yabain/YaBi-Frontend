import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopComponent } from 'src/app/shared/elements/pop/pop.component';
import { NotificationService } from 'src/app/shared/services/notifications/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  title = 'Notifications';

  constructor(
    public popoverController: PopoverController,
    private router: Router,
    private notification: NotificationService) {
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

  ngOnInit() {
    this.notification.showNotification('top', 'center', 'danger', 'fa fa-close-circle', '\<b>Sorry !\</b>\<br>');
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

}
