import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profilIncomplet = true;

  slidesOptions = {
    slidesPerView: 1.5
  };

  constructor(
    private route: Router
  ) {
  }

  ngOnInit() {
    this.countDown();
    if (this.profilIncomplet == true) {
      setTimeout(() => {
        this.profilIncomplet = false;
      }, 10000);
    }
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

  countDown() {
  }
}
