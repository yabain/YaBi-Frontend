import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fogotpassword',
  templateUrl: './fogotpassword.page.html',
  styleUrls: ['./fogotpassword.page.scss'],
})
export class FogotpasswordPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToSigninPage(){
    this.router.navigate(['auth/login']);
  }
  submit(){
    this.navigateToSigninPage();
  }
}
