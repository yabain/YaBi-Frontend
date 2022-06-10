import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../../shared/services/notifications/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  waitingLogin = false;

  constructor(
    private router: Router,
    private formLog: FormBuilder,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formLog.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.waitingLogin = false;
  }

  get f() {
    return this.loginForm.controls;
  }
  navigateToForgotPage() {
    this.router.navigate(['fogotpassword']);
  }

  submit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // this.notification.showNotification('top', 'center', 'success', 'pe-7s-close-circle', '\<b>Welcome !\</b>\<br>Message de welcome');
    this.router.navigate(['folder']);
    // this.waitingLogin = true;
    // let user: User = new User();
    // user.email=this.sanitezeService.emailSanitize(this.loginForm.value.email);
    // user.password=this.loginForm.value.password;

    // this.authService.signIn(user)
    //     .then((result) => {
    //         this.router.navigate(['tabs']);
    //         this.submitted = false;
    //         this.waitingLogin =false;
    //     })
    //     .catch((error:ResultStatut) => {
    //         this.waitingLogin = false;
    //         this.notification.showNotification('top', 'center', 'danger', 'pe-7s-close-circle', '\<b>Sorry !\</b>\<br>'+error.message);
    //         this.submitted = false;
    //     });
  }

  navigateToSignupPage() {
    this.router.navigate(['signup']);
  }

}
