import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthMainPage } from './auth-main.page';

describe('AuthMainPage', () => {
  let component: AuthMainPage;
  let fixture: ComponentFixture<AuthMainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
