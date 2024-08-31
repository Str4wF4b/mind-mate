import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  //confirmPwdValidator!: ValidatorFn;
 
  isPwd: boolean = false;
  isConfirmPwd: boolean = false;


  constructor(private router: Router) {
    this.initForm();
  }

  ngOnInit() {
  }

  /**
   * 
   * @returns 
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
   * 
   * @returns 
   */
  getForm() : FormGroup {
    return this.signUpForm;
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    return control.get('password')?.value === control.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  /**
   * 
   * @param form 
   * @returns 
   */
  matchPasswordValidator(form: FormGroup) : ValidatorFn {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    const validator = () => {
      return password!.value == confirmPassword!.value ? null : { notMatching: true }
    };

    return validator;
  }

  /* checkMatching() {
    this.confirmPwdValidator = (
      control: AbstractControl): ValidationErrors | null => {
      return control.value.password === control.value.confirmPassword ? null : { passwordNoMatch: true };
    };
  } */

  togglePwd() {
    this.isPwd = !this.isPwd; // toggle password visibility
  }

  toggleConfirmPwd() {
    this.isConfirmPwd = !this.isConfirmPwd; // toggle confirm password visibility
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched(); // showing all errors
      return;
    } else {
      this.router.navigate(['/tabs']);
    }
    console.log(this.signUpForm.value); 
  }

}
