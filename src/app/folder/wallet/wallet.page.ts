import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  title = 'YaBi Wallet';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['tabs/home']);
  }

}
