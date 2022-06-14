import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/user/auth/auth.service';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.page.html',
  styleUrls: ['./mainscreen.page.scss'],
})
export class MainscreenPage implements OnInit {

  constructor(private router: Router,
    private authService: AuthService, ) { 
    if ( this.authService.isLoggedIn.getValue() == true){
      this.router.navigate(['folder']);
    }
  }

  ngOnInit() {
  }

  loginPage() {
    this.router.navigate(['auth/login']);
    // this.route.navigate(['folder/Trash']);
  }

  aboutPage() {
    this.router.navigate(['about']);
  }


}
