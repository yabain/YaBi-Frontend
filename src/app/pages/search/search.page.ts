import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private router: Router) { }

  options = {
    slidesPerView: 1.5,
    centered: true,
    spaceBetweenView:10
  }

  sliderOptions ={
  initialSlide: 0,
  slidesPerView: 1,
  speed:400
  }
  
  ngOnInit() {
  }

  navigateToSearchPage() {
    this.router.navigate(['search']);
  }

}
