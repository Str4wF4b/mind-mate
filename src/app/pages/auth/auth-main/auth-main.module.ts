import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthMainPageRoutingModule } from './auth-main-routing.module';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthMainPage } from './auth-main.page';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthMainPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AuthMainPage, LoginComponent, SignUpComponent, ResetPasswordComponent]
})
export class AuthMainPageModule {}
 