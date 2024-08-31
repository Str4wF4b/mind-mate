import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpComponent } from './sign-up.component';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let signUpForm: FormGroup;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component = new SignUpComponent(new Router);
    signUpForm = component.getForm();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should password different from confirm password be invalid', () => {
    signUpForm.get('password')?.setValue('anyPassword');
    signUpForm.get('confirmPassword')?.setValue('anotherPassword');

    expect(signUpForm.get('confirmPassword')!.valid).toBeFalsy();
  });

  it('should form be valid', () => {
    signUpForm.get('email')?.setValue('anyEmail@email.com');
    signUpForm.get('password')?.setValue('anyPassword');
    signUpForm.get('confirmPassword')?.setValue('anyPassword');

    expect(signUpForm.valid).toBeTruthy();
  })
});
