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

}
