import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billets-history',
  templateUrl: './billets-history.page.html',
  styleUrls: ['./billets-history.page.scss'],
})
export class BilletsHistoryPage implements OnInit {
  title = 'Historique';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

}
