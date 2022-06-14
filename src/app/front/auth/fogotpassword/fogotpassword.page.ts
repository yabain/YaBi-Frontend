import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/user/auth/auth.service';

@Component({
  selector: 'app-fogotpassword',
  templateUrl: './fogotpassword.page.html',
  styleUrls: ['./fogotpassword.page.scss'],
})
export class FogotpasswordPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService, ) { 
    if ( this.authService.isLoggedIn.getValue() == true){
      this.router.navigate(['folder']);
    }

  }

  ngOnInit() {
  }

  navigateToSigninPage(){
    this.router.navigate(['auth/login']);
  }
  submit(){
    this.navigateToSigninPage();
  }
}
