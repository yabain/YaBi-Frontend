import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../shared/elements/modal/modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
title = 'Profil';
userId = '12012010';
userName = 'Utilisateur 1';
country = 'Cameroun';
city = 'Bangangté';
phone = '672 764 654';
email = 'user@yabain.com';

  constructor(
    private router: Router,
    public modalController: ModalController
    ) { }

  dataReturned: any;

  async openModal(title?, value?, description?) {
    if (value == 'userName'){
      value = this.userName ;
    } else if (value == 'country'){
      value = this.country ;
    } else if (value == 'city'){
      value = this.city ;
    } else if (value == 'phone'){
      value = this.phone ;
    } else if (value == 'email'){
      value = this.email ;
    }
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        'modalValue': value,
        'modalTitle': title,
        'modalDescription': description,
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

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

  navigateToLoginPage() {
    this.router.navigate(['auth/login']);
  }

}
