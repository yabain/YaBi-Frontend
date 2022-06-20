import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RetraitComponent } from '../../shared/elements/retrait/retrait.component';
import { RechargeComponent } from '../../shared/elements/recharge/recharge.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  title = 'YaBi Wallet';
  solde = 45000;

  constructor(
    private router: Router,
    public walletController: ModalController) { }
    
    dataReturned: any;

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }
  navigateToHistoryPage(){
    this.router.navigate(['folder/history/wallet']);
  }


  async openRetrait() {
    const modal = await this.walletController.create({
      component: RetraitComponent,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }


  async openRecharge() {
    const modal = await this.walletController.create({
      component: RechargeComponent,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

}
