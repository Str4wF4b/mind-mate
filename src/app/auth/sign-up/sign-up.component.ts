import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  //confirmPwdValidator!: ValidatorFn;
 
  isPwd: boolean = false; // boolean flag to trigger password visibility
  isConfirmPwd: boolean = false; // boolean flag to trigger confirm password visibility

  /**
   * Constructor for `SignUpComponent`.
   * Initializes the component and injects the necessary services for form handling and navigation.
   * Also calls `initForm()` to set up the form controls.
   *
   * @param router - The `Router` service for navigation between routes.
   * @param userDataService - The service for managing user data within the application.
   */
  constructor(
    private router: Router, 
    private userDataService: UserDataService) {
    this.initForm();
  }

  ngOnInit() {
  }

  /**
   * Initializes the sign-up form with email, password, and confirm password fields.
   * Sets up validators to ensure email validity and password length, and adds custom validation for password matching.
   *
   * @returns The initialized `FormGroup` instance.
   */
  initForm() : FormGroup {
    this.signUpForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]), // email is required and of type 'email'
        password: new FormControl('', [Validators.required, Validators.minLength(8)]), // password is required and requires at least 8 characters
        confirmPassword: new FormControl(''),
      },
      {
        validators: this.passwordMatchValidator,
      }
    );

    this.signUpForm.get('confirmPassword')!.setValidators(this.matchPasswordValidator(this.signUpForm));

    return this.signUpForm;
  }

  /**
   * Returns the current instance of the sign-up form.
   *
   * @returns The `FormGroup` instance representing the sign-up form.
   */
  getForm() : FormGroup {
    return this.signUpForm;
  }

  /**
   * Custom validator to check if the password and confirm password fields match.
   *
   * @param control - The `AbstractControl` instance to validate.
   * @returns `null` if the passwords match, or a validation error object if they do not.
   */
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    return control.get('password')?.value === control.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  /**
   * Validator function that checks if the password and confirm password fields match.
   *
   * @param form - The `FormGroup` instance containing the password fields.
   * @returns A `ValidatorFn` function that returns `null` if the passwords match, or a validation error object if they do not.
   */
  matchPasswordValidator(form: FormGroup) : ValidatorFn {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    const validator = () => {
      return password!.value == confirmPassword!.value ? null : { notMatching: true }
    };

    return validator;
  }

  /**
   * Toggles the visibility of the password field.
   */
  togglePwd() {
    this.isPwd = !this.isPwd; // toggle password visibility
  }

  /**
   * Toggles the visibility of the confirm password field.
   */
  toggleConfirmPwd() {
    this.isConfirmPwd = !this.isConfirmPwd; // toggle confirm password visibility
  }

  /**
   * Handles the form submission process.
   * If the form is valid, it saves user data, navigates to another route, and stores default song data in `localStorage`.
   * If the form is invalid, it marks all form fields as touched to display validation errors.
   */
  onSubmit() {
    if (this.signUpForm.invalid) { 
      this.signUpForm.markAllAsTouched(); // showing all errors
      return;
    } else {
      this.userDataService.setUsername('User');
      this.userDataService.setEmail(this.signUpForm.value.email); // save email for later use
      this.router.navigate(['/tabs']);
      this.userDataService.saveRecentSong({ title: '', artist: '', songUrl: '' });
      localStorage.setItem('customSongs', JSON.stringify([]));
    }
    console.log(this.signUpForm.value); 
  }
}
