import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup; // email and password form
  isPwd: boolean = false; // boolean flag to trigger password visibility


  /**
  * The constructor initializes the `LoginComponent` and sets up necessary services and dependencies.
  * It also calls `initForm()` to create the form controls used in the component.
  *
  * @param router - The `Router` service for navigating between routes.
  * @param userDataService - The service used to manage user data across the application.
  */
  constructor(private router: Router, private userDataService: UserDataService) {
    this.initForm();
  }

  ngOnInit() {
  }

  /**
  * Initializes the reactive form with `email` and `password` form controls.
  * Sets up validation rules for each control to ensure proper input handling.
  */
  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]), // email is required and of type 'email'
      password: new FormControl('', [Validators.required, Validators.minLength(8)]) // password is required and requires at least 8 characters
    });
  }

  /**
  * Toggles the visibility of the password field by switching the `isPwd` boolean.
  * Logs the current state of `isPwd` for debugging purposes.
  */
  togglePwd() {
    this.isPwd = !this.isPwd; // toggle password visibility
    console.log('isPwd' + this.isPwd);
  }

  /**
  * Handles form submission. If the form is valid, it saves user data, navigates to another route,
  * and initializes recent song data in `localStorage`. If invalid, it marks all fields as touched to display errors.
  */
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // showing all errors
      return;
    } else {
      this.userDataService.setUsername('User');
      this.userDataService.setEmail(this.form.value.email); // save email for later use
      this.router.navigate(['/tabs']);
      this.userDataService.saveRecentSong({ title: '', artist: '', songUrl: '' });
      localStorage.setItem('customSongs', JSON.stringify([]));
    }
    console.log(this.form.value);
  }

  /**
  * Placeholder method for resetting, which takes an event as a parameter.
  *
  * @param event - The event object, used when resetting the component's state or form.
  */
  reset(event: any) {
  }
}
