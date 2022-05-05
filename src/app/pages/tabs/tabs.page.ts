import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToProfilePage() {
    this.router.navigate(['tabs/profile']);
  }
  navigateToHomePage() {
    this.router.navigate(['tabs/home']);
  }
  navigateToLoginPage()
  {
    this.router.navigate(['login']);
  }
  navigateToSearchPage()
  {
    this.router.navigate(['tabs/search']);
  }
  navigateToCategoriesPage()
  {
    this.router.navigate(['tabs/categories']);
  }
  navigateToBillesPage()
  {
    this.router.navigate(['tabs/billes']);
  }
  navigateToFavorisPage()
  {
    this.router.navigate(['tabs/favoris']);
  }
  navigateToInvitationsPage()
  {
    this.router.navigate(['tabs/invitations']);
  }
  navigateToNotificationsPage()
  {
    this.router.navigate(['tabs/notifications']);
  }
  navigateToWalletPage()
  {
    this.router.navigate(['tabs/wallet']);
  }
  navigateToHistoryPage()
  {
    this.router.navigate(['tabs/history']);
  }
  navigateToAboutPage()
  {
    this.router.navigate(['tabs/about']);
  }
  navigateToAddEventPage()
  {
    this.router.navigate(['tabs/add-event']);
  }
}
