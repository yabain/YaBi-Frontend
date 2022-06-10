import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { FogotpasswordPage } from './fogotpassword/fogotpassword.page';


@NgModule({
  declarations: [
    LoginPage,
    SignupPage,
    FogotpasswordPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    IonicModule
  ]
})
export class AuthModule { }
