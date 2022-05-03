import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificcations',
  templateUrl: './notificcations.page.html',
  styleUrls: ['./notificcations.page.scss'],
})
export class NotificcationsPage implements OnInit {
  title = 'Notifications';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['tabs/home']);
  }

}
