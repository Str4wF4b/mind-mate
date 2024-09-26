import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  model: any = {
    email: '',
    new_password: '',
    //code: ''
  };

  code: string = '';
  flag: number = 1;
  isPwd: boolean = false;

  constructor(private modalController: ModalController, private toastController: ToastController) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    this.model = {
      email: form.value.email || '',
      new_passowrd: form.value.new_password || '',
      //otp: form.value.code || ''
    }

    if (this.flag == 2) {
      this.closeModal();
    }
  }

  /**
   * 
   */
  getData() {
    let data: any = {};
    if (this.model?.email == '' && this.model?.new_password == '') {
      data = {
        title: 'Forgot Password',
        subTitle: 'Enter your Email to verify your Account.',
        button: 'Verify Email'
      };
      //this.code = ''; // reset code
      this.flag = 1;

    } else {
      data = {
        title: 'Reset Password',
        subTitle: 'Enter your new Password (at least 8 characters).',
        button: 'Save'
      };
      this.flag = 2;
    }

    return data;
  }

  togglePwd() {
    this.isPwd = !this.isPwd; // toggle password visibility
  }

  async closeModal() {
    await this.modalController.dismiss();

    const toast = await this.toastController.create({
      message: 'Password changed successfully.',
      duration: 2000,
      color: 'undefined',
      cssClass: 'success-toast'
    });
    await toast.present();
  }
}
