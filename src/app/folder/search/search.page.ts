import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  title = 'Recherche';

  constructor(
    private router: Router,
    private location: Location) { }

  ngOnInit() {
  }

  prviousPage() {
    this.location.back();
  }
  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

}
