import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  form!: FormGroup;
  isPwd: boolean = false;


  constructor(private router: Router) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]), // email is required and of type 'email'
      password: new FormControl('', [Validators.required, Validators.minLength(8)]) // password is required and requires at least 8 characters
    });
  }

  togglePwd() {
    this.isPwd = !this.isPwd; // toggle password visibility
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // showing all errors
      return;
    } else {
      this.router.navigate(['/tabs']);
    }
    console.log(this.form.value);
  }

  reset(event: any) {
    
  }
}
