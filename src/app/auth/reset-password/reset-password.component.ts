import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  code: string = ''; // holds the value of a code or OTP used for password reset verification
  flag: number = 1; // flag used to manage the state of the component and control the flow between verifying the email and resetting the password
  isPwd: boolean = false; // boolean flag to trigger password visibility
  model: any = { // form data for email and new password that serves as a model for capturing user input
    email: '',
    new_password: '',
    //code: ''
  };

  /**
   * Constructor for the `ResetPasswordComponent` class.
   * Initializes the component and injects the necessary services for handling modals and toast notifications.
   *
   * @param modalController - The `ModalController` service used to manage modal dialogs.
   * @param toastController - The `ToastController` service used to display toast notifications.
   */
  constructor(private modalController: ModalController, private toastController: ToastController) { }

  ngOnInit() { }

  /**
   * Handles form submission. Populates the `model` object with form values.
   * If `flag` is set to `2`, it triggers the `closeModal()` method to dismiss the modal.
   *
   * @param form - The form object containing user input values.
   */
  onSubmit(form: NgForm) {
    this.model = {
      email: form.value.email || '',
      new_passowrd: form.value.new_password || '',
      //otp: form.value.code || ''
    }

    if (this.flag == 2) { // close modal after password change
      this.closeModal();
    }
  }

  /**
   * Determines the content to be displayed based on the current state of the model.
   * Returns an object containing a title, subtitle, and button label to guide the user.
   * 
   * @returns An object with properties `title`, `subTitle`, and `button` for display purposes.
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

  /**
   * Toggles the visibility of the password field by changing the `isPwd` state.
   */
  togglePwd() {
    this.isPwd = !this.isPwd; // toggle password visibility
  }

  /**
   * Closes the modal dialog and displays a success toast notification.
   * The toast confirms that the password change was successful.
   */
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
