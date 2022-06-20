import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-history',
  templateUrl: './events-history.page.html',
  styleUrls: ['./events-history.page.scss'],
})
export class EventsHistoryPage implements OnInit {
  title = 'Historique';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

}
