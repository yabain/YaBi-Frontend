import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrls: ['./billet.component.scss'],
})
export class BilletComponent implements OnInit {
  title: string;


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
    private navParams: NavParams
  ) { }

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
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  save() {
  }

}
