import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billes',
  templateUrl: './billes.page.html',
  styleUrls: ['./billes.page.scss'],
})
export class BillesPage implements OnInit {
  title = 'Mes Billets';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['tabs/home']);
  }

}
