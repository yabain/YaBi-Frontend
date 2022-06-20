import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.page.html',
  styleUrls: ['./wallet-history.page.scss'],
})
export class WalletHistoryPage implements OnInit {
  title = 'Historique';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

}
