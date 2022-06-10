import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private route: Router
  ) {
  }
  slidesOptions = {
    slidesPerView: 1.5
  };

  ngOnInit() {
  }

  eventPage() {
    this.route.navigate(['folder/event-detail']);
  }

  navigateToNotificationsPage() {
    this.route.navigate(['folder/notifications']);
  }
  navigateToProfilPage() {
    this.route.navigate(['folder/profile']);
  }
}
