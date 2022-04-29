import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { 
  }
  slidesOptions = {
    slidesPerView: 1.5
  };

  ngOnInit() {
    console.log("Inside homde page")
  }


}
