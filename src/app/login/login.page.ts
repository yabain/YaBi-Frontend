import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToForgotPage() {
    this.router.navigate(['fogotpassword']);
  }

  submit() {
    this.router.navigate(['tabs']);
  }

  navigateToSignupPage() {
    this.router.navigate(['signup']);
  }

}
