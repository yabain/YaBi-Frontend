import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BilletComponent } from '../../shared/elements/billet/billet.component';

@Component({
  selector: 'app-billes',
  templateUrl: './billes.page.html',
  styleUrls: ['./billes.page.scss'],
})
export class BillesPage implements OnInit {
  title = 'Mes Billets';

  constructor(
    private router: Router,
    public billetController: ModalController
  ) { }

  dataReturned: any;

  async openBille(
    billetTitle?,
    billetOwner?,
    billetType?,
    startDate?,
    startTime?,
    endDate?,
    endTime?,
    place?, city?,
    country?,
    organiser?,
    owner?
    ) {
    // if (value == 'userName'){
    //   value = this.userName ;
    // } else if (value == 'country'){
    //   value = this.country ;
    // } else if (value == 'city'){
    //   value = this.city ;
    // } else if (value == 'phone'){
    //   value = this.phone ;
    // } else if (value == 'email'){
    //   value = this.email ;
    // }
    const modal = await this.billetController.create({
      component: BilletComponent,
      componentProps: {
        'billetTitle': billetTitle,
        'billetOwner': billetOwner,
        'billetType': billetType,
        'startDate': startDate,
        'startTime': startTime,
        'endDate': endDate,
        'endTime': endTime,
        'place': place,
        'city': city,
        'country': country,
        'organiser': organiser,
        'owner': owner,
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
    this.router.navigate(['tabs/home']);
  }

}
