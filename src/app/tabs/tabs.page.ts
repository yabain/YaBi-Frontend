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
    this.router.navigate(['folder/profile']);
  }
  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }
  navigateToLoginPage()
  {
    this.router.navigate(['login']);
  }
  navigateToSearchPage()
  {
    this.router.navigate(['folder/search']);
  }
  navigateToCategoriesPage()
  {
    this.router.navigate(['folder/categories']);
  }
  navigateToBillesPage()
  {
    this.router.navigate(['folder/billes']);
  }
  navigateToFavorisPage()
  {
    this.router.navigate(['folder/favoris']);
  }
  navigateToInvitationsPage()
  {
    this.router.navigate(['folder/invitations']);
  }
  navigateToNotificationsPage()
  {
    this.router.navigate(['folder/notifications']);
  }
  navigateToWalletPage()
  {
    this.router.navigate(['folder/wallet']);
  }
  navigateToHistoryPage()
  {
    this.router.navigate(['folder/history']);
  }
  navigateToAboutPage()
  {
    this.router.navigate(['folder/about']);
  }
  navigateToAddEventPage()
  {
    this.router.navigate(['folder/add-event']);
  }
}
